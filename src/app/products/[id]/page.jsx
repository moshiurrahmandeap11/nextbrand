"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const ProductDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products?id=${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div className="p-6 text-white">Loading...</div>;

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
      <p className="mb-2">{product.description}</p>
      <p className="font-bold">{product.price}</p>
    </div>
  );
};

export default ProductDetails;
