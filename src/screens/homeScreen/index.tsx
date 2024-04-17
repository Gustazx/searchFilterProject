import React, { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import { useQuery } from "react-query";

import * as S from "./styles";
import { SearchInput } from "@src/components/SearchInput";
import { getBreedsService } from "@src/services/breeds";
import { Breed } from "@src/types/breed";
import { ScrollView, Text, View } from "react-native";
import { useTheme } from "styled-components";
import { ThemeType } from "@src/common/theme";
import { ActivityIndicator } from "react-native-paper";
import { InfinityScrollLoading } from "@src/components/InfinityScrollLoading";

export const HomeScreen = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [search] = useDebounce(searchText, 500);
  const [page, setPage] = useState(0);
  const limit = useRef<number>(10);

  const theme = useTheme() as ThemeType;

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: any) => {
    const paddingToBottom = 26;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const onScrollEnd = () => {
    console.log(page);
    if (!isFetching) {
      setPage((page) => page + 1);
      refetch();
    }
  };

  const { data, refetch, isFetching } = useQuery(
    ["facts", page],
    () =>
      getBreedsService({
        limit: limit.current,
        page: page,
        search: search,
      }),
    {
      onSuccess: (res: any) => {
        setBreeds((currentBreeds) => [...currentBreeds, ...res]);
      },
    }
  );

  // useEffect(() => {
  //   setPage(0);
  //   setBreeds([]);
  //   refetch();
  // }, [search]);

  return (
    <S.Container>
      <SearchInput value={searchText} onChangeText={setSearchText} />
      <ScrollView
        showsVerticalScrollIndicator={true}
        scrollEventThrottle={16}
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            onScrollEnd();
          }
        }}
      >
        {Boolean(!isFetching) ? (
          breeds.map((breed) => (
            <View style={{ padding: 40 }} key={breed.id}>
              <Text>{breed.name}</Text>
            </View>
          ))
        ) : (
          <View />
        )}
      </ScrollView>
      {isFetching && <InfinityScrollLoading />}
    </S.Container>
  );
};
