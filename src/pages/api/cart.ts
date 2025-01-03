import { NextApiRequest, NextApiResponse } from "next";

// Simulating fetching cart item count from a database
const cartHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const cartItemCount: number = 3; // Ensure this is a number
  res.status(200).json({ itemCount: cartItemCount });
};

export default cartHandler;
