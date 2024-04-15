import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import * as S from "./styles";
import { SearchInput } from "@src/components/SearchInput";

export const HomeScreen = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [search] = useDebounce(searchText, 1000);

  return (
    <S.Container>
      <SearchInput value={searchText} onChangeText={setSearchText} />
    </S.Container>
  );
};
