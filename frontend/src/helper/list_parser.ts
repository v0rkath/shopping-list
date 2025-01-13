import { ListDocument, ListItem } from "../models/list.model";

export function getItemIndex(
  listDocument: ListDocument | undefined,
  identity: string,
): number {
  if (listDocument) {
    const index = listDocument.list.findIndex((item) => item._id === identity);

    if (index === -1) {
      throw new Error("Index of item could not be founded.");
    }
    return index;
  }

  return -1;
}

export function sortItems(items: ListItem[]) {
  items.sort((a, b) => {
    return a.marked === b.marked ? 0 : b.marked ? -1 : 1;
  });
}
