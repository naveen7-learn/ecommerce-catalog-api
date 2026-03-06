import categoryRepository from "../repositories/category.repository.js";
import Category from "../models/Category.js";

class CategoryService {

  async createCategory(data) {

    const category = await categoryRepository.create({
      name: data.name,
      parent: data.parentId || null
    });

    if (data.parentId) {
      await Category.findByIdAndUpdate(
        data.parentId,
        { $push: { subcategories: category._id } }
      );
    }

    return category;
  }

  async getCategory(id) {
    return await categoryRepository.findById(id);
  }

  async listCategories() {
    return await categoryRepository.list();
  }

}

export default new CategoryService();
