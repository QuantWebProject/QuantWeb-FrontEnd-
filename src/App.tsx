import Login from "@/pages/Login";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient";
import { Provider } from "react-redux";
import store from "./store";
import Test from "./pages/Test";
import BackTesting from "./pages/BackTesting";
import MockInvestment from "./pages/MockInvestment";
import Market from "./pages/Market";
import MyDashboard from "./pages/MyDashboard";

const routeList = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
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
