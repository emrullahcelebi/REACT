import React from "react";

import HomePage from "./pages/home-page";
import AppRouter from "./router";
import { StoreProvider } from "./store";

const App = () => {
  return (
    <StoreProvider>
      <AppRouter />
    </StoreProvider>
  );
};

export default App;
