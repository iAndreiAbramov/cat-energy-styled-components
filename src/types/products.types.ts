export enum ProductType {
    Pro = 'PRO',
    Slim = 'Slim',
}

export enum TasteType {
    Chicken = 'Курица',
    Fish = 'Рыба',
    Buckwheat = 'Гречка',
    Rice = 'Рис',
}

export interface IProduct {
    id: number;
    name: string;
    type: ProductType;
    weight: number;
    taste: TasteType;
    price: number;
    imageSmall: string;
    imageSmallRetina: string;
    imageBig: string;
    imageBigRetina: string;
}
