import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      const product = await db.collection("products").findOne({ _id: parseInt(id) });
      if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });
      return NextResponse.json(product);
    }

    const products = await db.collection("products").find().sort({ createdAt: -1 }).toArray();
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

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    // Auto-incrementing ID
    const counter = await db.collection("counters").findOneAndUpdate(
      { _id: "productId" },
      { $inc: { seq: 1 } },
      { upsert: true, returnDocument: "after" }
    );

    const newProduct = {
      _id: counter.value.seq,
      title,
      price: parseFloat(price),
      description,
      createdAt: new Date(),
    };

    await db.collection("products").insertOne(newProduct);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
  }
}
