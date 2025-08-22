import { NextResponse } from "next/server";

// In-memory storage for products (replace with a database in production)
let products = [];
let nextId = 1; // Auto-incrementing ID counter

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      const product = products.find((p) => p.id === parseInt(id));
      if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });
      return NextResponse.json(product);
    }

    return NextResponse.json(products);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { title, price, description } = await request.json();

    if (!title || !price || !description) {
      return NextResponse.json({ error: "Title, price, and description are required" }, { status: 400 });
    }

    if (isNaN(price) || price <= 0) {
      return NextResponse.json({ error: "Price must be a valid positive number" }, { status: 400 });
    }

    const newProduct = {
      id: nextId++,
      title,
      price: parseFloat(price),
      description,
    };

    products.push(newProduct);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
  }
}