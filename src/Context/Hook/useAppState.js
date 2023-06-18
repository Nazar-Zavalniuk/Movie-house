import { useContext } from "react";
import { ContextApp } from "../ContextApp";

function useAppState() {
  return useContext(ContextApp);
}

export default useAppState;
