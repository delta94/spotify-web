import React, { createContext, useContext, useReducer } from "react";

export const initialState = {
  user: "",
  playlist: {},
  playing: false,
  item: "",
  // token:
  //   "token",
};

interface IinitialState {
  user: string;
  playlist: object;
  playing: boolean;
  item: string;
}

export const DataLayerContext = createContext<any>(initialState);

interface IDataLayer {
  initialState: any;
  reducer: any;
}

export const DataLayer: React.FC<IDataLayer> = ({
  initialState,
  reducer,
  children,
}) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
