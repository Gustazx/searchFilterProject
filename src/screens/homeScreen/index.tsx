import React, { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import { useQuery } from "react-query";

import * as S from "./styles";
import { SearchInput } from "@src/components/SearchInput";
import { getBreedsService } from "@src/services/breeds";
import { Breed } from "@src/services/breeds";
import { ScrollView, Text, View } from "react-native";
import { useTheme } from "styled-components";
import { ThemeType } from "@src/common/theme";
import { ActivityIndicator } from "react-native-paper";
import { InfinityScrollLoading } from "@src/components/InfinityScrollLoading";
import { BreedCard } from "./components/breedCard";

export const HomeScreen = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [search] = useDebounce(searchText, 500);
  const [page, setPage] = useState<number>(0);
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
    if (!isFetching) {
      setPage((page) => page + 1);
    }
  };

  const { refetch, isFetching } = useQuery(
    ["breeds", page],
    () =>
      getBreedsService({
        limit: limit.current,
        page: page,
        search: search,
      }),
    {
      onSuccess: (res) => {
        if (!search) {
          setBreeds((currentBreeds) => [...currentBreeds, ...res]);
        }
        if (search) {
          setBreeds([...res]);
        }
      },
    }
  );

  useEffect(() => {
    if (!isFetching) {
      setPage(0);
      setBreeds([]);
      refetch();
    }
  }, [search]);

  return (
    <S.Container>
      <SearchInput value={searchText} onChangeText={setSearchText} />
      <></>
      <ScrollView
        showsVerticalScrollIndicator={true}
        scrollEventThrottle={16}
        style={{
          paddingBottom: 30,
        }}
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            onScrollEnd();
          }
        }}
      >
        <S.PaddingContainer>
          {breeds.map((breed: Breed) => (
            <BreedCard
              key={breed.id}
              id={breed.id}
              name={breed.name}
              origin={breed.origin}
              temperament={breed.temperament}
              weight={breed.weight}
            />
          ))}
        </S.PaddingContainer>
      </ScrollView>
      {isFetching && <InfinityScrollLoading />}
    </S.Container>
  );
};
