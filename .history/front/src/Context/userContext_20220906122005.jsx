import React from "react";
import { createContext, useState } from "react";

const userContext = createContext();

function ContexProviderWrapper(props) {
  return (
    <userContext.Provider value={{}}>{props.children}</userContext.Provider>
  );
}
export { ContexProviderWrapper, userContext };
