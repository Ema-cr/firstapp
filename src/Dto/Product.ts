export interface Price {
  amount: number;
  currency: 'COP' | 'USD';
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  quantity: number;
  price: Price;
  isActive: boolean;
  specs?: {
    weightGr?: number;
    color?: string;
  };
}


  interface Product{
    name:string;
    brand:string;
    quantity:string;
    price:number;
    currency:'COP'|'USD';
    isActive:boolean;
    category:string;
    imageUrl:string;
    createdAt:Date;
    tags: unknown;
    dimensions: unknown;
  };


  interface Address{
    street:string;
    city:string;
    country:string
  };

  interface User{
    name:string;
    phone:number;
    cc:number;
    email:string;
    address:Address;
    birth:Date;
    isActive:boolean
  };
