type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export const getProducts: () => Promise<[Product]> = async () => {
  const response: [Product] = await fetch(
    "https://fakestoreapi.com/products?limit=5",
  ).then((res) => res.json());
  return response;
};
