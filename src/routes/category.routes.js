import express from "express";
import categoryController from "../controllers/category.controller.js";

const router = express.Router();

router.post("/", (req, res) => categoryController.create(req, res));

router.get("/", (req, res) => categoryController.list(req, res));

router.get("/:id", (req, res) => categoryController.get(req, res));

export default router;
