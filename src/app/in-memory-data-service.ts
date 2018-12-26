import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CategoryModel } from './shared/models/category.model';
import { ProductModel } from './shared/models/product.model';


export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const cateogry = [
            {
                id: 1, name: 'iPhone', description: 'dasdad', image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG", products: [
                    { id: 0, name: 'Milos', description: "sdada", numberOfProduct: 1, price: 100,image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG' },
                ]



            },
            {
                id: 2, name: 'iPad', description: 'dasdad', image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG", products: [
                    { id: 0, name: 'Milos', description: "sdada", numberOfProduct: 1, price: 100,image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG' },
                    { id: 1, name: 'Somi', description: "haha", numberOfProduct: 1, price: 100, image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG' }
                ]
            },
            {
                id: 1, name: 'Samsung galaxy S', description: 'dasdad', image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG", products: [
                    { id: 0, name: 'Milos', description: "sdada", numberOfProduct: 1, price: 100,image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG' },
                ]



            },
            {
                id: 1, name: 'Samsung galaxy A', description: 'dasdad', image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG", products: [
                    { id: 0, name: 'Milos', description: "sdada", numberOfProduct: 1, price: 100,image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG' },
                ]



            },
            {
                id: 2, name: 'Samsung galaxy J', description: 'dasdad', image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG", products: [
                    { id: 0, name: 'Milos', description: "sdada", numberOfProduct: 1, price: 100,image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG' },
                  
                ]
            },
            {
                id: 1, name: 'Xperia', description: 'dasdad', image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG", products: [
                    { id: 0, name: 'Milos', description: "sdada", numberOfProduct: 1, price: 100,image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG' },
                ]



            }

        ];
        return { cateogry };
    }

    genId(cateogry: CategoryModel[]): number {
        return cateogry.length > 0 ? Math.max(...cateogry.map(hero => hero.id)) + 1 : 11
    }


}