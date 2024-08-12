import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { queryClient } from "./api/queryClient";
import BackTesting from "./pages/BackTesting";
import Callback from "./pages/Callback";
import Market from "./pages/Market";
import MockInvestment from "./pages/MockInvestment";
import MyDashboard from "./pages/MyDashboard";
import Test from "./pages/Test";
import store from "./store";

const routeList = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/test",
    element: <Test />
  },
  {
    path: "/backtesting",
    element: <BackTesting />
  },
  {
    path: "/mock-investment",
    element: <MockInvestment />
  },
  {
    path: "/market",
    element: <Market />
  },
  {
    path: "/my-dashboard",
    element: <MyDashboard />
  },
  // todo: 중첩 라우터로 분리
  {
    path: "/oauth2/callback/kakao",
    element: <Callback />
  },
  {
    path: "/oauth2/callback/naver",
    element: <Callback />
  },
  {
    path: "/oauth2/callback/google",
    element: <Callback />
  }
];

const router = createBrowserRouter(
  routeList.map((route) => {
    return {
      ...route,
      element: <Layout>{route.element}</Layout>,
      errorElement: <main>에러 페이지 구현 예정</main>
    };
  })
);

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
