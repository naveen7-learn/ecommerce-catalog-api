import Category from "../models/Category.js";

class CategoryRepository {

  async create(data) {
    const category = new Category(data);
    return await category.save();
  }

  async findById(id) {
    return await Category.findById(id)
      .populate("subcategories")
      .populate("products");
  }

  async update(id, data) {
    return await Category.findByIdAndUpdate(id, data, { new: true });
  }

  async list() {
    return await Category.find();
  }

}

export default new CategoryRepository();
