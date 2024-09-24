import React from "react";
import { StoreProvider } from "./store/StoreProvider";
import Layout from "./Layout";

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Layout />
    </StoreProvider>
  );
};

export default App;
