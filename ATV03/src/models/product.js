class Product {
    constructor(id, name, category, price) {
        this._id = id;
        this._name = name;
        this._category = category;
        this._price = price;
    }

    // Id
    getId() {
        return this._id;
    }
    setId(value) {
        this._id = value;
    }

    // Name
    getName() {
        return this._name;
    }
    setName(value) {
        this._name = value;
    }

    // Category
    getCategory() {
        return this._category;
    }
    setCategory(value) {
        this._category = value;
    }

    // Price
    getPrice() {
        return this._price;
    }
    setPrice(value) {
        this._price = value;
    }
}

export default Product;