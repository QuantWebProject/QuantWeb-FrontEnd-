type TFactorStrategyType = "value" | "profit" | "technical";

interface TContent {
  id: number;
  name: string;
  info: string;
}

type TFactorStrategyList = {
  [key in TFactorStrategyType]: TContent[];
};

export const FACTOR_STRATEGY_LIST: TFactorStrategyList = {
  value: [
    {
      id: 0,
      name: "PBR(현재 가격 / 장부가치)",
      info: "본인이 매수/매도하고 싶은 종목과 수량을 한국투자증권에서 제공하는 API를 통해 주문을 실행하는 방식입니다."
    },
    {
      id: 1,
      name: "PER (현재 가격 / 순이익)",
      info: "본인이 매수/매도하고 싶은 종목과 수량을 한국투자증권에서 제공하는 API를 통해 주문을 실행하는 방식입니다."
    },
    {
      id: 2,
      name: "PSR (현재 가격 / 매출액)",
      info: "본인이 매수/매도하고 싶은 종목과 수량을 한국투자증권에서 제공하는 API를 통해 주문을 실행하는 방식입니다."
    },
    {
      id: 3,
      name: "P/CF (현재 가격 / 현금성 이익)",
      info: "본인이 매수/매도하고 싶은 종목과 수량을 한국투자증권에서 제공하는 API를 통해 주문을 실행하는 방식입니다."
    },
    {
      id: 4,
      name: "시가총액",
      info: "본인이 매수/매도하고 싶은 종목과 수량을 한국투자증권에서 제공하는 API를 통해 주문을 실행하는 방식입니다."
    }
  ],
  profit: [
    {
      id: 5,
      name: "매출총이익률",
      info: "본인이 매수/매도하고 싶은 종목과 수량을 한국투자증권에서 제공하는 API를 통해 주문을 실행하는 방식입니다."
    },
    {
      id: 6,
      name: "영업이익률",
      info: "본인이 매수/매도하고 싶은 종목과 수량을 한국투자증권에서 제공하는 API를 통해 주문을 실행하는 방식입니다."
    },
    {
      id: 7,
      name: "순이익률",
      info: "본인이 매수/매도하고 싶은 종목과 수량을 한국투자증권에서 제공하는 API를 통해 주문을 실행하는 방식입니다."
    },
    {
      id: 8,
      name: "ROE",
      info: "본인이 매수/매도하고 싶은 종목과 수량을 한국투자증권에서 제공하는 API를 통해 주문을 실행하는 방식입니다."
    },
    {
      id: 9,
      name: "ROA",
      info: "본인이 매수/매도하고 싶은 종목과 수량을 한국투자증권에서 제공하는 API를 통해 주문을 실행하는 방식입니다."
    }
  ],
  technical: [
    {
      id: 0,
      name: "Static Asset Allocation",
      info: "본인이 매수/매도하고 싶은 종목과 수량을 한국투자증권에서 제공하는 API를 통해 주문을 실행하는 방식입니다."
    },
    {
      id: 1,
      name: "Tactical Asset Allocation",
      info: "본인이 매수/매도하고 싶은 종목과 수량을 한국투자증권에서 제공하는 API를 통해 주문을 실행하는 방식입니다."
    },
    {
      id: 2,
      name: "MACD",
      info: "본인이 매수/매도하고 싶은 종목과 수량을 한국투자증권에서 제공하는 API를 통해 주문을 실행하는 방식입니다."
    },
    {
      id: 3,
      name: "Trend Following",
      info: "본인이 매수/매도하고 싶은 종목과 수량을 한국투자증권에서 제공하는 API를 통해 주문을 실행하는 방식입니다."
    },
    {
      id: 4,
      name: "RSI",
      info: "본인이 매수/매도하고 싶은 종목과 수량을 한국투자증권에서 제공하는 API를 통해 주문을 실행하는 방식입니다."
    },
    {
      id: 5,
      name: "볼린저 밴드",
      info: "본인이 매수/매도하고 싶은 종목과 수량을 한국투자증권에서 제공하는 API를 통해 주문을 실행하는 방식입니다."
    }
  ]
};
