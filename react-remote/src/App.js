import "./App.css";
import { Route, Routes, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "./components/layout";
import { FirstReactPage } from "./pages/FirstReactPage";
import { SecondReactPage } from "./pages/SecondReactPage";

const routerConfig = {
  firstPage: <FirstReactPage />,
  secondPage: <SecondReactPage />,
};

function App() {
  useEffect(() => {
    console.log("react-mount");
    return () => {
      console.log();
    };
  }, []);

  const [params] = useSearchParams();
  const page = params.get("page");

  return (
    <Routes>
      <Route
        path="/reactPage"
        element={<Layout> {routerConfig[page] || null}</Layout>}
      />
    </Routes>
  );
}

export default App;

