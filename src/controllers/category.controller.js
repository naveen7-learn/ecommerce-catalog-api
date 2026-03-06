import categoryService from "../services/category.service.js";

class CategoryController {

  async create(req, res) {
    try {

      const category = await categoryService.createCategory(req.body);

      res.status(201).json(category);

    } catch (error) {

      res.status(500).json({ message: error.message });

    }
  }

  async get(req, res) {
    try {

      const category = await categoryService.getCategory(req.params.id);

      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }

      res.json(category);

    } catch (error) {

      res.status(500).json({ message: error.message });

    }
  }

  async list(req, res) {
    try {

      const categories = await categoryService.listCategories();

      res.json(categories);

    } catch (error) {

      res.status(500).json({ message: error.message });

    }
  }

}

export default new CategoryController();
