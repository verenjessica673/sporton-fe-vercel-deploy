export interface Category {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
    _id: "string";
    name: "string";
    description: "string";
    category: Category;
    stock: number;
    price: number;
    imageUrl: "string";
    createdAt: "string";
    updatedAt: "string"
  }

  export interface Bank {
  _id: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  createdAt: string;
  updatedAt: string;
}