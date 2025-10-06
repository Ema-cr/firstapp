import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ 
  reactStrictMode: true,
  images: {
    domains: [
      "http2.mlstatic.com",
      "i.pinimg.com",
      "assets.adidas.com",
      "m.media-amazon.com",
      "www.lg.com",
      "compulago.b-cdn.net",
      "mac-center.com",
      "colombia.bioweb.co",
      "i02.appmifile.com",
      "whirlpoolco.vtexassets.com",
      "co-media.hptiendaenlinea.com",
      "902showroom.com",
      "blog.latam.playstation.com"
    ],
  },
};

export default nextConfig;


