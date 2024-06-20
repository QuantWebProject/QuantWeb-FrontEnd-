type ColorKey =
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

type BoxShadow = "shadow1" | "shadow2" | "shadow3";
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
  boxShadow: {
    [key in BoxShadow]: string;
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
  boxShadow: {
    shadow1: "1px 2px 16px 0px rgba(0, 0, 0, 0.08)",
    shadow2: "1px 2px 16px 0px rgba(0, 0, 0, 0.16)",
    shadow3: "1px 2px 16px 0px rgba(0, 0, 0, 0.30)"
  }
};

export default theme;
