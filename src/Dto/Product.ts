export interface Price {
  amount: number;
  currency: 'COP' | 'USD';
}

export interface Product{
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


export interface Address{
    street:string;
    city:string;
    country:string
  };

export interface User{
    name:string;
    phone:number;
    cc:number;
    email:string;
    address:Address;
    birth:Date;
    isActive:boolean
  };
