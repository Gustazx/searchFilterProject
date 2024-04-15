import { ThemeType } from "@src/common/theme";
import { TextInput, TextInputProps } from "react-native-paper";
import { useTheme } from "styled-components";

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const SearchInput = ({
  value,
  onChangeText,
  ...props
}: SearchInputProps & TextInputProps) => {
  const theme = useTheme() as ThemeType;

  const clearInput = (): void => {
    onChangeText("");
  };

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      mode="outlined"
      theme={{ roundness: theme.radius.medium }}
      style={{
        width: "100%",
        height: theme.sizes.input,
      }}
      left={<TextInput.Icon icon="magnify" size={theme.sizes.icon.medium} />}
      right={
        value && (
          <TextInput.Icon
            icon="close"
            size={theme.sizes.icon.medium}
            onPress={clearInput}
          />
        )
      }
    />
  );
};
