import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { ListContextProvider } from "./context/listContext/ListContext";
import { MovieContextProvider } from "./context/movieContext/MovieContext";
import { UserContextProvider } from "./context/userContext/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <AuthContextProvider>
        <MovieContextProvider>
          <ListContextProvider>
            <App />
          </ListContextProvider>
        </MovieContextProvider>
      </AuthContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
