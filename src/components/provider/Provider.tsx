import React, {FC, createContext} from "react";
import {State} from './reducer/reducer';
import { useCustomizedReducer, EnhancedActionType } from "./reducer/useCustomizedReducer";
import { fetchRecordsAsync } from "./reducer/asyncActions";
import { useEffect } from "react";

export const Context = createContext<{
    state: State;
    dispatch: (action: EnhancedActionType) => void;
}>(null as any)

export const Provider: FC = ({children}) => {
    const store = useCustomizedReducer();

    useEffect(() => {
        store.dispatch(fetchRecordsAsync(store.state.month))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [store.state.month])

    return(
        <Context.Provider value = {store}>{children}</Context.Provider>
    )
}