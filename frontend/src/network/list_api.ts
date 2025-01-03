import { ListItem, ListDocument } from "../models/list.model";

async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);
  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMsg = errorBody.error;
    throw Error(errorMsg);
  }
}

export type ItemDetails = {
  name?: string;
  marked?: boolean;
  quantity?: number;
  link?: string;
};

export type FormData = {
  title: string;
  list: object; // change this to an array, as list in the document is actually an array not an object
};

export async function fetchLists(): Promise<ListDocument[]> {
  const response = await fetchData("/api/lists", { method: "GET" });

  return response.json();
}

export async function fetchList(listId: string): Promise<ListDocument> {
  const response = await fetchData(`/api/lists/${listId}`, { method: "GET" });

  return response.json();
}

export async function createList(list: FormData): Promise<ListDocument> {
  const response = await fetchData("/api/lists", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(list),
  });

  return response.json();
}

// export async function updateList(itemInfo: object, listId: string) {
//   const response = await fetchData(`/api/lists/${listId}`, {
//     method: "PATCH",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(itemInfo),
//   });

//   return response.json();
// }

export async function addItemToList(itemData: ListItem, listId: string) {
  const response = await fetchData(`/api/lists/${listId}/items`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(itemData),
  });

  return response.json();
}

export async function clearList(listId: string) {
  const response = await fetchData(`/api/lists/${listId}/clear`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
  });

  return response.json();
}

export async function updateItemInList(
  listId: string,
  itemId: string,
  itemDetails: ItemDetails,
) {
  const response = await fetchData(`/api/lists/${listId}/items/${itemId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(itemDetails),
  });

  return response.json();
}
