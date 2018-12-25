import { ProductModel } from "./product.model";

export class CategoryModel  {

    public id: number;
    public name: string;
    public description: string;
    public image: string;
    public products: ProductModel[] ;


    constructor(name: string, desciption: string, image: string = null, products: ProductModel[], id: number) {
        this.id = id;
        this.name = name;
        this.description = desciption;
        this.image = image;
        this.products = products;
    }

}