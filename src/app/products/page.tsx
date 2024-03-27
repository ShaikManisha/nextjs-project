import Link from "next/link";
import React from "react";

export default function ProductList() {
  const productId = 100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <h1>
        <Link href="products/1">Product 1</Link>
      </h1>
      <h1>
        <Link href="products/2">Product 2</Link>
      </h1>
      <h1>
        <Link href={`products/${productId}`} replace>
          Product {productId}
        </Link>
      </h1>
    </>
  );
}
