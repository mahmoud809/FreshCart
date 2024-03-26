export interface Product {
    title: string,
    imageCover: string,
    category: Category,
    ratingsAverage: number,
    price: number,
    _id?:number
  }
  
  export interface Category {
    _id: string
    name: string
    slug: string
    image: string
  }
  