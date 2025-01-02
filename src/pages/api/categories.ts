// pages/api/categories.ts
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const categories = [
      { name: 'Laptops', href: '/products?category=laptops' },
      { name: 'Headphones', href: '/products?category=headphones' },
      { name: 'Smartwatches', href: '/products?category=smartwatches' },
      { name: 'Cameras', href: '/products?category=cameras' },
      { name: 'Monitors', href: '/products?category=monitors' },
      { name: 'Accessories', href: '/products?category=accessories' },
    ];
  
    res.status(200).json(categories);
  }
  