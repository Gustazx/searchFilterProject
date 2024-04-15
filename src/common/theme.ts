import { MD3LightTheme as defaultPaperTheme } from "react-native-paper";

import CSS from "csstype";
import { MD3Theme as IPaperTheme } from "react-native-paper/lib/typescript/types";

export const paperTheme: IPaperTheme = {
  ...defaultPaperTheme,
  colors: {
    ...defaultPaperTheme.colors,
    primary: "#000",
    secondary: "#000",
  },
  roundness: 1,
};

export type ThemeType = IPaperTheme & {
  sizes: {
    button: number;
    input: number;
    font: {
      extraSmall: number;
      small: number;
      smallMedium: number;
      medium: number;
      large: number;
      extraLarge: number;
    };
    icon: {
      extraSmall: number;
      small: number;
      medium: number;
      large: number;
      extraLarge: number;
      twiceExtraLarge: number;
    };
  };
  radius: {
    small: number;
    medium: number;
    large: number;
  };
  spacing: {
    margins: {
      extraSmall: number;
      small: number;
      medium: number;
      large: number;
      extraLarge: number;
    };
    paddings: {
      extraSmall: number;
      small: number;
      medium: number;
      large: number;
      extraLarge: number;
    };
    gaps: {
      extraSmall: number;
      small: number;
      medium: number;
      large: number;
    };
  };
  // font: {
  //   light: string;
  //   regular: string;
  //   medium: string;
  //   bold: string;
  //   colors: {
  //     primary: CSS.Property.Color;
  //     secondary: CSS.Property.Color;
  //     tertiary: CSS.Property.Color;
  //     error: CSS.Property.Color;
  //     mutted: CSS.Property.Color;
  //   };
  // };
};

export const styledTheme: ThemeType = {
  ...paperTheme,
  sizes: {
    button: 60,
    input: 60,
    font: {
      extraSmall: 10,
      small: 12,
      smallMedium: 14,
      medium: 18,
      large: 22,
      extraLarge: 28,
    },
    icon: {
      extraSmall: 10,
      small: 12,
      medium: 18,
      large: 28,
      extraLarge: 40,
      twiceExtraLarge: 55,
    },
  },
  radius: {
    small: 10,
    medium: 14,
    large: 20,
  },
  spacing: {
    margins: {
      extraSmall: 4,
      small: 8,
      medium: 12,
      large: 20,
      extraLarge: 26,
    },
    paddings: {
      extraSmall: 4,
      small: 8,
      medium: 12,
      large: 20,
      extraLarge: 26,
    },
    gaps: {
      extraSmall: 10,
      small: 15,
      medium: 20,
      large: 30,
    },
  },
  // font: {
  //   light: "robotoLight",
  //   regular: "roboto",
  //   medium: "robotoMedium",
  //   bold: "robotoBold",
  //   colors: {
  //     primary: "#443D67",
  //     secondary: "white",
  //     tertiary: "#59518c",
  //     error: "red",
  //     mutted: "grey",
  //   },
  // },
};
