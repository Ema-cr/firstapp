import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

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

const products: Product[] = [
  {
    name: "Laptop Dell XPS",
    brand: "Dell",
    quantity: "1 unidad",
    price: 5000,
    currency: "USD",
    isActive: true,
    category: "Electronics",
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_912794-MLA82638808441_022025-O.webp",
    createdAt: new Date(),
    tags: ["premium", "lightweight"],
    dimensions: { width: 30, height: 20, depth: 2 }
  },
  {
    name: "Camiseta Deportiva",
    brand: "Nike",
    quantity: "2 unidades",
    price: 180000,
    currency: "COP",
    isActive: true,
    category: "Ropa",
    imageUrl: "https://i.pinimg.com/736x/a2/c2/43/a2c2431d7da3106cb15173a89273ec3a.jpg",
    createdAt: new Date(),
    tags: "fitness",
    dimensions: "Talla M"
  },
  {
    name: "Smartphone Galaxy S22",
    brand: "Samsung",
    quantity: "1 unidad",
    price: 4200,
    currency: "USD",
    isActive: true,
    category: "Electronics",
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_651731-MLU75081570841_032024-O.webp",
    createdAt: new Date(),
    tags: ["android", "5G"],
    dimensions: { width: 7, height: 15 }
  },
  {
    name: "Zapatos Running",
    brand: "Adidas",
    quantity: "1 par",
    price: 350000,
    currency: "COP",
    isActive: true,
    category: "Calzado",
    imageUrl: "https://assets.adidas.com/images/w_600,f_auto,q_auto/be8e415f3b93413c8cfd0eb2a0e7263c_9366/Tenis_de_Running_Runfalcon_5_Blanco_IH7757.jpg",
    createdAt: new Date(),
    tags: "deporte",
    dimensions: "Talla 42"
  },
  {
    name: "Auriculares Bluetooth",
    brand: "Sony",
    quantity: "1 unidad",
    price: 200,
    currency: "USD",
    isActive: true,
    category: "Electronics",
    imageUrl: "https://m.media-amazon.com/images/I/41lArSiD5hL._AC_SL1200_.jpg",
    createdAt: new Date(),
    tags: ["audio", "wireless"],
    dimensions: { weight: "250g" }
  },
  {
    name: "Televisor 55''",
    brand: "LG",
    quantity: "1 unidad",
    price: 3000,
    currency: "USD",
    isActive: false,
    category: "Electronics",
    imageUrl: "https://www.lg.com/content/dam/channel/wcms/co/images/televisores/55ur7800psb_awc_escb_co_c/gallery/large01.jpg",
    createdAt: new Date(),
    tags: "smartTV",
    dimensions: { width: 123, height: 72 }
  },
  {
    name: "Silla Gamer",
    brand: "Razer",
    quantity: "1 unidad",
    price: 1200000,
    currency: "COP",
    isActive: true,
    category: "Muebles",
    imageUrl: "https://compulago.b-cdn.net/wp-content/uploads/erp/productos/8503351082/1725551527843.jpg",
    createdAt: new Date(),
    tags: ["gaming", "ergonomic"],
    dimensions: { height: 120, width: 60 }
  },
  {
    name: "Tablet iPad Pro",
    brand: "Apple",
    quantity: "1 unidad",
    price: 1100,
    currency: "USD",
    isActive: true,
    category: "Electronics",
    imageUrl: "https://mac-center.com/cdn/shop/files/iPad_Pro_Wi-Fi_11_in_Silver_PDP_Image_Position-1a__ESES_72193b14-2770-4908-aaa9-1a14382e474b.jpg?v=1700282426&width=1445",
    createdAt: new Date(),
    tags: "tablet",
    dimensions: { width: 22, height: 28 }
  },
  {
    name: "Cámara Canon EOS",
    brand: "Canon",
    quantity: "1 unidad",
    price: 2500,
    currency: "USD",
    isActive: true,
    category: "Fotografía",
    imageUrl: "https://colombia.bioweb.co/cdn/shop/products/CANO-2727C002-2.jpg?v=1754675220",
    createdAt: new Date(),
    tags: ["dslr", "professional"],
    dimensions: { weight: "1.5kg" }
  },
  {
    name: "Reloj Inteligente",
    brand: "Xiaomi",
    quantity: "1 unidad",
    price: 800000,
    currency: "COP",
    isActive: true,
    category: "Electronics",
    imageUrl: "https://i02.appmifile.com/992_item_co/01/10/2024/16a27022adbe5d5b3c7fe733027629ff.png",
    createdAt: new Date(),
    tags: "smartwatch",
    dimensions: "45mm"
  },
  {
    name: "Microondas",
    brand: "Whirlpool",
    quantity: "1 unidad",
    price: 529900,
    currency: "COP",
    isActive: true,
    category: "Electrodomésticos",
    imageUrl: "https://whirlpoolco.vtexassets.com/arquivos/ids/155743/WM2811D_01.png?v=638237577185170000",
    createdAt: new Date(),
    tags: "kitchen",
    dimensions: { width: 50, height: 30, depth: 40 }
  },
  {
    name: "Impresora Multifuncional",
    brand: "HP",
    quantity: "1 unidad",
    price: 749900,
    currency: "COP",
    isActive: false,
    category: "Electronics",
    imageUrl: "https://co-media.hptiendaenlinea.com/catalog/product/1/f/1f3y4a_imagenprincipalsintexto.jpg",
    createdAt: new Date(),
    tags: ["office", "wifi"],
    dimensions: { width: 40, height: 25 }
  },
  {
    name: "Mesa de Comedor",
    brand: "HomeCenter",
    quantity: "1 unidad",
    price: 719900,
    currency: "COP",
    isActive: true,
    category: "Muebles",
    imageUrl: "https://902showroom.com/cdn/shop/products/QE-Mesa-comedor-Coba-madera-roble-_1_1024x.jpg?v=1658166432",
    createdAt: new Date(),
    tags: "wood",
    dimensions: { width: 150, height: 75 }
  },
  {
    name: "Bicicleta Montaña",
    brand: "GW",
    quantity: "1 unidad",
    price: 3500000,
    currency: "COP",
    isActive: true,
    category: "Deportes",
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_768575-MLA79482632662_102024-O.webp",
    createdAt: new Date(),
    tags: ["mountain", "sport"],
    dimensions: { width: 146, height: 78 }
  },
  {
    name: "Consola PlayStation 5",
    brand: "Sony",
    quantity: "1 unidad",
    price: 599,
    currency: "USD",
    isActive: true,
    category: "Videojuegos",
    imageUrl: "https://blog.latam.playstation.com/tachyon/sites/3/2023/10/e08941a3d4b8ac23d60cbf6304e829e2e7a775b7.png?resize=1088%2C612&crop_strategy=smart&zoom=0.99",
    createdAt: new Date(),
    tags: ["gaming", "next-gen"],
    dimensions: { width: 10, height: 39 }
  }
];

const users: User[] = [
  {
    name: "Ricardo Harrison",
    phone: 3001234567,
    cc: 123456789,
    email: "ricarditoharry@hotmail.com",
    address: {
      street: "Cra 10 #20-30",
      city: "Bogotá",
      country: "Colombia"
    },
    birth: new Date("2000-01-15"),
    isActive: true
  },
  {
    name: "Ana Martínez",
    phone: 3109876543,
    cc: 987654321,
    email: "anïtta__@hotmail.com",
    address: {
      street: "Av. Guayabal # 42",
      city: "Medellin",
      country: "Colombia"
    },
    birth: new Date("1995-07-22"),
    isActive: true
  },
  {
    name: "Carlos López",
    phone: 3125554433,
    cc: 112233445,
    email: "carlostanke@gmail.com",
    address: {
      street: "Carrera 45 #12-34 Norte",
      city: "Cali",
      country: "Colombia"
    },
    birth: new Date("1988-03-10"),
    isActive: false
  },
  {
    name: "Laura Gómez",
    phone: 3152223344,
    cc: 998877665,
    email: "lala_3445@hotmail.com",
    address: {
      street: "Carrera 50 #22-10 Sur",
      city: "Barranquilla",
      country: "Colombia"
    },
    birth: new Date("1992-12-05"),
    isActive: true
  },
  {
    name: "Mateo Ramírez",
    phone: 3018897766,
    cc: 556677889,
    email: "theo30ramirez@gmail.com",
    address: {
      street: "Calle 8 #45-67",
      city: "Cartagena",
      country: "Colombia"
    },
    birth: new Date("2001-09-25"),
    isActive: false
  }
];

users.map((user, i) => {
  console.log(`User ${i + 1}:`, user);
});

products.map((product, i) => {
  console.log(`Product ${i + 1}:`, product);
});

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              src/pages/index.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
