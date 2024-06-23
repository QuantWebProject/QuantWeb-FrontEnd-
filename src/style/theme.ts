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

export type TButtonSchema =
  | "inactivated"
  | "inactivatedHover"
  | "error"
  | "activated"
  | "activatedHover"
  | "default"
  | "defaultHover"
  | "blackWhite"
  | "grayBlack";

export type TButtonSize =
  | "wideTall" // 160x68
  | "wideMedium" // 160x60
  | "wideShort" // 160x52
  | "narrowTall" // 140x68
  | "narrowMedium" // 140x68
  | "narrowShort" // 140x68
  | "small"; // 60x60

export type THeadingSize = "T1" | "T2" | "T3" | "T4" | "T5" | "T6" | "T7";
export type TBodySize = "B1" | "B2" | "B3" | "B4";
export type TSnbSchema = "default" | "hover" | "selected";

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

  buttonSize: {
    [key in TButtonSize]: {
      width: string;
      height: string;
    };
  };

  buttonSchema: {
    [key in TButtonSchema]: {
      color: string;
      background: string;
      borderColor?: string;
      borderWidth?: string;
    };
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
    default: ".75rem"
  },
  buttonSize: {
    wideTall: {
      width: "160px",
      height: "68px"
    },
    wideMedium: { width: "160px", height: "60px" },
    wideShort: { width: "160px", height: "52px" },
    narrowTall: {
      width: "140px",
      height: "68px"
    },
    narrowMedium: { width: "140px", height: "60px" },
    narrowShort: { width: "140px", height: "52px" },
    small: { width: "60px", height: "60px" }
  },
  buttonSchema: {
    inactivated: {
      color: "#878795",
      background: "#D7D7E3"
    },
    inactivatedHover: {
      color: "#878795",
      background: "rgba(215, 215, 227, 0.40)"
    },
    error: {
      color: "#878795",
      background: "#D7D7E3",
      borderColor: "#FF0000",
      borderWidth: "1.4px"
    },
    activated: {
      color: "#fff",
      background: "#7467FF"
    },
    activatedHover: {
      color: "#fff",
      background: "#948BFF"
    },
    default: {
      color: "#7467FF",
      background: "transparent",
      borderColor: "#7467FF",
      borderWidth: "1px"
    },
    defaultHover: {
      color: "#7467FF",
      background: "#F0EEFF",
      borderColor: "#7467FF",
      borderWidth: "1px"
    },
    blackWhite: {
      color: "#fff",
      background: "#1F1F23"
    },
    grayBlack: {
      color: "#1F1F23",
      background: "#E6E6ED"
    }
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
