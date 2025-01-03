import express from "express";
import * as cont from "../controllers/list.controller";

const router = express.Router();

router.get("/", cont.getLists);
router.post("/", cont.createList);
router.get("/:listId", cont.getList);
router.delete("/:listId", cont.deleteList);
router.patch("/:listId/items", cont.addItemToList);
router.patch("/:listId/clear", cont.clearList);
router.patch("/:listId/items/:itemId", cont.updateItemInList);

export default router;
