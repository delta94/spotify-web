import React, { createContext, useContext, useReducer } from "react";

export const initialState = {
  user: "",
  playlist: {},
  playing: false,
  item: "",
  token:
    "BQDFKs7batXj5gBBB9Qh9_ME5Fuxot2woTTAAJshYzoYD4G_-Pt2RvoCR9VN2ay3mL9niL_uvHlHkGG5c0yZkALDr5ALxZMuPD0ZQfe3nmrBUiR8ujmQc2pM8ixlgC-f4GI_4m9KPSr4ijxuaVTDyIVrlRGYhbsnLjB7fOsGVWNQkL7W",
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
