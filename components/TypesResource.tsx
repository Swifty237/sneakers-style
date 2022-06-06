export interface productsProp {
    id: string,
    brand: string,
    title: string,
    desc: string,
    price: string,
    likes?: any,
    size: string,
    stocked: string,
    photo: any
}

export interface cardProp {
    prod: productsProp
}

export interface likeProp {
    prodLikes: productsProp
}

export interface sizeProp {
    prodSize: productsProp
}

export interface searchProp {
    searchedProduct: productsProp[]
}

export interface itemProp {
    item: productsProp
}

