import { RequestHandler } from "express";
import ListModel, { ListItem } from "../models/list.model";
import createHttpError from "http-errors";
import mongoose from "mongoose";

type CreateListBody = {
  _id: object;
  title: string;
  list: ListItem[];
};

type ListParams = {
  listId: string;
  itemId?: string;
};

type UpdateItem = {
  name?: string;
  marked?: boolean;
  quantity?: string;
  link?: string;
};

export const getLists: RequestHandler = async (req, res, next) => {
  try {
    const lists = await ListModel.find().exec();
    res.status(200).json(lists);
  } catch (error) {
    next(error);
  }
};

export const getList: RequestHandler = async (req, res, next) => {
  const listId = req.params.listId;

  try {
    if (!mongoose.isValidObjectId(listId)) {
      throw createHttpError(400, "Invalid list id");
    }

    const list = await ListModel.findById(listId);

    if (!list) {
      throw createHttpError(404, "List not found");
    }

    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

export const createList: RequestHandler<
  unknown,
  unknown,
  CreateListBody,
  unknown
> = async (req, res, next) => {
  try {
    const id = new mongoose.Types.ObjectId();
    const title = req.body.title;
    const list = req.body.list;

    if (!title || !list) {
      throw createHttpError(400, "List must have a title and list");
    }

    const newList = await ListModel.create({
      _id: id,
      title: title,
      list: [],
    });

    res.status(201).json(newList);
  } catch (error) {
    next(error);
  }
};

// interface ItemInfo {
//   itemId: string;
//   marked: boolean;
// }

export const addItemToList: RequestHandler<
  ListParams,
  unknown,
  ListItem,
  unknown
> = async (req, res, next) => {
  const listId = req.params.listId;
  const newItem = req.body;
  const newId = new mongoose.Types.ObjectId();
  newItem._id = newId;
  console.log(req.body);

  try {
    if (!mongoose.isValidObjectId(listId)) {
      throw createHttpError(400, "Invalid list id");
    }

    const doc = await ListModel.findByIdAndUpdate(
      listId,
      { $push: { list: newItem } },
      { new: true }
    );

    if (!doc) {
      throw createHttpError(404, "List not found");
    }

    res.status(200).json(doc);
  } catch (error) {
    next(error);
  }
};

// export const updatedMarked: RequestHandler<
//   ListParams,
//   unknown,
//   ItemInfo,
//   unknown
// > = async (req, res, next) => {
//   const listId = req.params.listId;
//   const itemId = req.body.itemId;
//   const itemMarked = req.body.marked;

//   try {
//     if (!mongoose.isValidObjectId(listId)) {
//       throw createHttpError(400, "Invalid list id");
//     }

//     if (!itemId) {
//       throw createHttpError(400, "List must have a title and list");
//     }

//     const listDoc = await ListModel.updateOne(
//       { _id: listId, "list._id": itemId },
//       { $set: { "list.$.marked": itemMarked } }
//     );

//     if (!listDoc) {
//       throw createHttpError(404, "List not found");
//     }

//     res.status(200).json(listDoc);
//   } catch (error) {
//     next(error);
//   }
// };

export const deleteList: RequestHandler<
  ListParams,
  unknown,
  unknown,
  unknown
> = async (req, res, next) => {
  const listId = req.params.listId;

  try {
    if (!mongoose.isValidObjectId(listId)) {
      throw createHttpError(400, "Invalid list id");
    }

    const deletedList = await ListModel.findByIdAndDelete(listId);

    if (!deletedList) {
      throw createHttpError(404, "List not found");
    }

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export const clearList: RequestHandler<
  ListParams,
  unknown,
  unknown,
  unknown
> = async (req, res, next) => {
  console.log("clearlist in controller");
  const listId = req.params.listId;

  try {
    if (!mongoose.isValidObjectId(listId)) {
      throw createHttpError(400, "Invalid list id");
    }

    const clearedList = await ListModel.findOneAndUpdate(
      { _id: listId },
      { $unset: { list: [] } },
      { new: true }
    );

    if (!clearedList) {
      throw createHttpError(404, "List not found");
    }

    res.status(200).json({ message: "List cleared successfully " });
  } catch (error) {
    next(error);
  }
};

export const updateItemInList: RequestHandler<
  ListParams,
  unknown,
  UpdateItem,
  unknown
> = async (req, res, next) => {
  const listId = req.params.listId;
  const itemId = req.params.itemId;

  console.log(`Req Body: ${req.body.quantity}`);

  try {
    if (
      !mongoose.isValidObjectId(listId) ||
      !mongoose.isValidObjectId(itemId)
    ) {
      throw createHttpError(400, "Invalid list id or item id passed");
    }

    const fieldsToUpdate: Record<string, unknown> = {};

    if (req.body.name !== undefined)
      fieldsToUpdate["list.$.name"] = req.body.name;
    if (req.body.quantity !== undefined)
      fieldsToUpdate["list.$.quantity"] = req.body.quantity;
    if (req.body.link !== undefined)
      fieldsToUpdate["list.$.link"] = req.body.link;
    if (req.body.marked !== undefined)
      fieldsToUpdate["list.$.marked"] = req.body.marked;

    if (!Object.keys(fieldsToUpdate).length) {
      throw createHttpError(400, "Request body is empty");
    }

    const updatedItem = await ListModel.findOneAndUpdate(
      { _id: listId, "list._id": itemId },
      { $set: fieldsToUpdate },
      { new: true }
    );

    if (!updatedItem) {
      throw createHttpError(404, "Item not found");
    }

    res.status(200).json({ message: "Item updated successfully." });
  } catch (error) {
    next(error);
  }
};
