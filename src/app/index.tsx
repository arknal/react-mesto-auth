import store from "./model/store";
import { Provider, useDispatch } from "react-redux";
import router from "../pages";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "shared/assets/styles/index.scss";

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  );
};

export default App;
