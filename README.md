# 🛍️ NextBrand - Product Management App

NextBrand is a  **Next.js 15+** and **MongoDB** based product management system।  

---

##  Features
-  Add / View products  
-  Public product list 
-  MongoDB persistent database (no data loss)  
-  Auto-incrementing Product ID  
-  API Routes with Next.js 15+ `app/` router  
-  Intigrate Next-auth for authentication

---

## 🛠️ Tech Stack
- **Frontend & Backend:** Next.js 15+ (App Router)  
- **Database:** MongoDB Atlas  
- **Deployment:** Vercel  

---

## 📂 Project Structure

nextbrand/
├── app/
│ └── api/
│ └── products/
│ └── route.js # API routes for products
├── lib/
│ └── mongodb.js # MongoDB connection helper
├── .env.local # Environment variables
└── README.md

# install 
```
git clone https://github.com/moshiurrahmandeap11/nextbrand
cd nextbrand
```

# Install dependencies
```
npm i
```

# Setup environment variables

# Run the project locally

```
npm run dev
```

# API Endpoints
```
GET /api/products
```

# Get single product

```
GET /api/products?id=1
```

# Add new product

```
POST /api/products
Content-Type: application/json

{
  "title": "iPhone 16 Pro",
  "price": 1299,
  "description": "Apple’s latest beast."
}

```