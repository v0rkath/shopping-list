import { useEffect, FormEvent, useRef } from "react";
import Items from "../components/Items";
import { ListItem } from "../models/list.model";
import { fetchList, addItemToList, clearList } from "../network/list_api";
import { useParams } from "react-router-dom";
import AddItemForm, { AddItemInterface } from "../components/forms/AddItemForm";
import { Dialog } from "../components/common/Dialog";
import { useListContext } from "../context/useList";
import { ObjectId } from "bson";
import { sortItems } from "../helper/list_parser";

export default function List(): JSX.Element {
  const { shoppingList, setShoppingList } = useListContext();
  // const [shoppingList, setShoppingList] = useState<ListDocument | undefined>();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const paramId: string = useParams().id!;

  function toggleDialog(): void {
    if (!dialogRef.current) {
      return;
    }
    return dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

  useEffect(() => {
    async function loadList() {
      try {
        const lists = await fetchList(paramId);
        const items = lists.list;
        sortItems(items);
        setShoppingList(lists);
      } catch (error) {
        console.error(error);
      }
    }
    loadList();
  }, [paramId, setShoppingList]);

  // function updateShoppingList(id: string, document: ListDocument, toUpdate: object) {
  //   const index = document.list.findIndex(item => item._id === id);

  //   if (index !== -1 && toUpdate.) {
  //     document.list[index] = { ...document.list[index], }
  //   }
  // }

  async function addItem(
    event: FormEvent<HTMLFormElement>,
    data: AddItemInterface,
  ) {
    event.preventDefault();

    const newItem: ListItem = {
      name: data.name,
      marked: false,
      quantity: data.quantity,
      link: data.link,
      _id: new ObjectId().toString(),
    };
    try {
      await addItemToList(newItem, paramId);
      if (!shoppingList) {
        throw new Error("shoppingList is undefined.");
      }
      const updatedList = {
        ...shoppingList,
        list: [...shoppingList.list, newItem],
      };
      sortItems(updatedList.list);
      setShoppingList(updatedList);
    } catch (error) {
      console.error(error);
    }
  }

  async function clearItemList() {
    try {
      await clearList(paramId);
      if (!shoppingList) {
        throw new Error("shoppingList is undefined.");
      }
      const clearedList = {
        ...shoppingList,
        list: [],
      };
      setShoppingList(clearedList);
      // setListUpdated((prevListUpdated) => prevListUpdated + 1);
    } catch (error) {
      console.error(error);
    }
  }

  const itemArr = shoppingList?.list.map((item) => {
    const itemId: string = item._id!.toString();
    return (
      <Items
        key={itemId}
        name={item.name}
        identity={itemId}
        paramId={paramId}
        itemMarked={item.marked}
        quantity={item.quantity}
        link={item.link}
      />
    );
  });

  function convertTime() {
    if (!shoppingList) {
      return;
    }
    const dateObj = new Date(shoppingList.updatedAt);
    const date = dateObj.toISOString().split("T")[0];
    const time = dateObj.toISOString().split("T")[1].split(".")[0];

    return date + " " + time;
  }

  return (
    <>
      <div className="mx-auto mt-16 max-w-7xl px-12">
        <div className="mb-6 flex items-center justify-between border-b pb-6">
          <div>
            <h1 className="mx-w-sm text-left font-cormorant text-5xl font-bold italic md:max-w-xl md:text-6xl">
              {shoppingList?.title}
            </h1>
            <p className="mt-6 text-sm text-zinc-500">
              Last Update: {convertTime()}
            </p>
          </div>

          <button
            className="ml-2 max-h-12 rounded-md bg-rose-700 px-4 py-2 text-sm text-neutral-100 hover:bg-rose-900"
            onClick={toggleDialog}
          >
            Clear list
          </button>
        </div>
        <Dialog toggleDialog={toggleDialog} ref={dialogRef}>
          <p className="border-b border-solid border-zinc-200 pb-2 text-xl font-semibold text-neutral-700">
            Delete Confirmation
          </p>
          <p className="py-2 text-sm text-neutral-700">
            Are you sure you want to delete the contents of your shopping list?
          </p>
          <div className="mt-4 text-right">
            <button
              className="mr-2 rounded-md border border-solid border-zinc-200 px-2 py-1 text-sm text-neutral-700 hover:bg-neutral-200"
              onClick={toggleDialog}
            >
              Cancel
            </button>
            <button
              className="rounded-md bg-rose-700 px-2 py-1 text-sm text-neutral-100 hover:bg-rose-900"
              onClick={() => {
                clearItemList();
                toggleDialog();
              }}
            >
              Delete
            </button>
          </div>
        </Dialog>
        <AddItemForm addItem={addItem} />
        {itemArr}
      </div>
    </>
  );
}
