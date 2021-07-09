import { useMemo, useReducer } from "react";
import reducer, {defaultState} from "./reducer";

export const useCustomizedReducer = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    return {state, dispatch};
}