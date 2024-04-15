import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useQuery } from "react-query";

import * as S from "./styles";
import { SearchInput } from "@src/components/SearchInput";
import { getFactsService } from "@src/services/groups";

export const HomeScreen = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [facts, setFacts] = useState([]);
  const [search] = useDebounce(searchText, 1000);

  const { data, isFetching } = useQuery(
    ["facts"],
    () => getFactsService({ limit: 20 }),
    {
      onSuccess: (res: any) => {
        setFacts(res);
      },
    }
  );

  return (
    <S.Container>
      <SearchInput value={searchText} onChangeText={setSearchText} />
    </S.Container>
  );
};
