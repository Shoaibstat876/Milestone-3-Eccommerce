// pages/api/search.ts
import { NextApiRequest, NextApiResponse } from 'next';

// Example product data, ideally fetched from a database or external API
const products = [
  { id: 1, name: 'Smartphone', description: 'Latest model with high performance', price: 500, image: '/images/smartphone.jpg' },
  { id: 2, name: 'Laptop', description: 'Powerful laptop for professionals', price: 1000, image: '/images/laptop.jpg' },
  { id: 3, name: 'Headphones', description: 'Noise-canceling headphones', price: 200, image: '/images/headphones.jpg' },
  // Add more products as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query;

  if (query) {
    // Filter products by name or description
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query.toString().toLowerCase()) ||
      product.description.toLowerCase().includes(query.toString().toLowerCase())
    );

    return res.status(200).json(filteredProducts);
  }

  res.status(400).json({ message: 'Query parameter is missing' });
}
