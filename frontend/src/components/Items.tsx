import { useRef } from "react";
import { updateItemInList } from "../network/list_api"; // change to updateItemInList (this needs updating in backend to handle the marked)
import { Link } from "react-router-dom";
import { Dialog } from "./common/Dialog";
import EditItemForm from "./forms/EditItemForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useListContext } from "../context/useList";
import { getItemIndex } from "../helper/list_parser";

type ItemProps = {
  name: string;
  identity: string;
  paramId: string;
  itemMarked: boolean;
  quantity: number;
  link: string;
  //move: (name: string, marked: boolean) => void;
};

export default function Items({
  name,
  identity,
  paramId,
  itemMarked,
  quantity,
  link,
}: ItemProps): JSX.Element {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { shoppingList, setShoppingList } = useListContext();

  function modifyShoppingList() {
    if (!shoppingList) {
      throw new Error("shoppingList is undefined.");
    }

    const index = getItemIndex(shoppingList, identity);

    const updatedItem = {
      ...shoppingList.list[index],
      marked: !itemMarked,
    };

    const newListDocument = {
      ...shoppingList,
      list: [
        ...shoppingList.list.slice(0, index),
        updatedItem,
        ...shoppingList.list.slice(index + 1),
      ],
    };

    newListDocument.list.sort((a, b) => {
      return a.marked === b.marked ? 0 : b.marked ? -1 : 1;
    });
    setShoppingList(newListDocument);
  }

  async function handleClick() {
    try {
      modifyShoppingList();
      const itemInfo = { marked: !itemMarked };
      await updateItemInList(paramId, identity, itemInfo);
    } catch (error) {
      console.error(error);
    }
  }

  function toggleDialog(): void {
    if (!dialogRef.current) {
      return;
    }

    if (dialogRef.current.hasAttribute("open")) {
      // refresh();
      return dialogRef.current.close();
    }

    return dialogRef.current.showModal();
  }

  return (
    <div
      className={`rounded-3xl ${itemMarked ? "bg-neutral-100" : "bg-sage"} mb-4 mr-4 flex min-w-36 cursor-pointer flex-col justify-around p-4 text-left md:inline-flex`}
      onClick={handleClick}
    >
      {itemMarked ? (
        <p className="select-none pb-14 pl-1 text-xl font-medium text-zinc-500">
          <s>{name}</s>{" "}
          <span className="select-none text-sm text-zinc-500">x{quantity}</span>
        </p>
      ) : (
        <>
          <p className="select-none pb-3 pl-1 text-xl font-medium">
            {name}{" "}
            <span className="select-none text-sm text-zinc-500">
              x{quantity}
            </span>
          </p>
          <div className="justify-right flex-end flex justify-end gap-3">
            <div
              className="select-none rounded-xl border border-zinc-100 bg-white px-4 py-2"
              onClick={(e) => {
                e.stopPropagation();
                toggleDialog();
              }}
            >
              Edit
            </div>
            <Dialog toggleDialog={toggleDialog} ref={dialogRef}>
              <p className="flex justify-between border-b border-solid border-zinc-200 pb-2 text-xl font-semibold text-neutral-700">
                Update Item{" "}
                <FontAwesomeIcon
                  icon={faXmark}
                  style={{ color: "#393939" }}
                  onClick={toggleDialog}
                />
              </p>

              <EditItemForm
                name={name}
                quantity={quantity}
                link={link}
                identity={identity}
                paramId={paramId}
                toggleDialog={toggleDialog}
              ></EditItemForm>
            </Dialog>
            {!link ? null : (
              <Link
                to={link}
                target="_blank"
                className="select-none rounded-xl border border-zinc-100 bg-white px-4 py-2"
                onClick={(e) => e.stopPropagation()}
              >
                Link
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  );
}
