import { useContext } from "react";
import { StateContext } from "./StateProvider";

export const useStateValue = () => useContext(StateContext);