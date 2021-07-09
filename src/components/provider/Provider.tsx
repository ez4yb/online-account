import React, {FC, createContext, Dispatch} from "react";
import { ActionType } from './reducer/action';
import {State} from './reducer/reducer';
import { useCustomizedReducer } from "./reducer/useCustomizedReducer";

export const Context = createContext<{
    state: State;
    dispatch: Dispatch<ActionType>;
}>(null as any)

export const Provider: FC = ({children}) => {
    const store = useCustomizedReducer();

    return(
        <Context.Provider value = {store}>{children}</Context.Provider>
    )
}