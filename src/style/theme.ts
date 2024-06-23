export type ColorKey =
  | "main"
  | "white"
  | "sub1"
  | "sub2"
  | "sub3"
  | "sub4"
  | "sub5"
  | "gray1"
  | "gray2"
  | "gray3"
  | "gray4"
  | "gray5"
  | "gray6"
  | "gray7"
  | "gray8"
  | "gray9"
  | "gray10"
  | "dimmed";

export type LayoutWidth = "large" | "medium" | "small";
export type BorderRadius = "default";

export type THeadingSize = "T1" | "T2" | "T3" | "T4" | "T5" | "T6" | "T7";
export type TBodySize = "B1" | "B2" | "B3" | "B4";
export type TSnbSchema = "default" | "hover" | "selected";
export type TLoginSchema = "default" | "hover";

interface Theme {
  color: {
    [key in ColorKey]: string;
  };
  layout: {
    width: {
      [key in LayoutWidth]: string;
    };
  };
  borderRadius: {
    [key in BorderRadius]: string;
  };

  headingSize: {
    [key in THeadingSize]: string;
  };
  bodySize: {
    [key in TBodySize]: string;
  };
  snbSchema: {
    [key in TSnbSchema]: {
      color: string;
      background: string;
    };
  };
}

const theme: Theme = {
  color: {
    main: "#7467FF",
    white: "#fff",
    sub1: "#FBFAFF",
    sub2: "#F0EEFF",
    sub3: "#DEDAFF",
    sub4: "#C8C2FF",
    sub5: "#948BFF",
    gray1: "#EFEFF1",
    gray2: "#E6E6ED",
    gray3: "#D7D7E3",
    gray4: "#C8C8D6",
    gray5: "#B0B0BF",
    gray6: "#9797A8",
    gray7: "#878795",
    gray8: "#6D6D7D",
    gray9: "#4C4C57",
    gray10: "#1F1F23",
    dimmed: "#00000066"
  },
  layout: {
    width: {
      large: "1020px",
      medium: "760px",
      small: "360px"
    }
  },
  borderRadius: {
    default: "0.75rem"
  },
  headingSize: {
    T1: "32px",
    T2: "28px",
    T3: "24px",
    T4: "22px",
    T5: "20px",
    T6: "20px",
    T7: "20px"
  },
  bodySize: {
    B1: "18px",
    B2: "18px",
    B3: "16px",
    B4: "14px"
  },
  snbSchema: {
    default: {
      color: "#fff",
      background: "rgba(255,255,255,0)"
    },
    hover: {
      color: "#fff",
      background: "rgba(255,255,255,0.10)"
    },
    selected: {
      color: "#7467FF",
      background: "rgba(255,255,255,0.90)"
    }
  }
};

export default theme;
