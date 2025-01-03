// pages/api/products.ts

import { NextApiRequest, NextApiResponse } from 'next';

const products = [
  {
    id: 1,
    image: "/assets/images/laptop-1.png",
    name: "Gaming Laptop",
    price: 1200,
    badge: "New",
    priceStyle: "text-black font-medium",
    nameStyle: "text-lg font-medium text-[#007580]",
    cartColor: "bg-[#029fae] hover:bg-teal-700",
    iconColor: "text-white",
  },
  {
    id: 2,
    image: "/assets/images/headphones-1.png",
    name: "Wireless Headphones",
    price: 150,
    badge: "Sale",
    originalPrice: 200,
    priceStyle: "text-black font-medium",
    nameStyle: "text-lg font-medium",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
  },
  {
    id: 3,
    image: "/assets/images/smartwatch-1.png",
    name: "Smartwatch",
    price: 250,
    priceStyle: "text-black font-medium",
    nameStyle: "text-lg font-medium",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
  },
  {
    id: 4,
    image: "/assets/images/printer-1.png",
    name: "Printer",
    price: 100,
    priceStyle: "text-black font-medium",
    nameStyle: "text-lg font-medium",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(products);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
