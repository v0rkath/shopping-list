import { createContext, useContext, useState } from "react";
import { ListDocument } from "../models/list.model";

type ListContextVals = {
  shoppingList: ListDocument | undefined;
  setShoppingList: (value: ListDocument) => void;
};

type ProviderProps = {
  children?: React.ReactNode;
};

const ListContext = createContext<ListContextVals | undefined>(undefined);

export function useListContext() {
  const listVals = useContext(ListContext);

  if (listVals === undefined) {
    throw new Error("useListContext must be used with ListContextVals.");
  }

  return listVals;
}

export function ListProvider({ children }: ProviderProps) {
  const [shoppingList, setShoppingList] = useState<ListDocument | undefined>(
    undefined,
  );

  return (
    <ListContext.Provider value={{ shoppingList, setShoppingList }}>
      {children}
    </ListContext.Provider>
  );
}
