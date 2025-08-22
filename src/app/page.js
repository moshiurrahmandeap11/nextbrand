import Image from "next/image";
import Banner from "./components/Banner/Banner";
import ProductsPage from "./components/ProductsPage/ProductsPage";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <ProductsPage></ProductsPage>
    </div>
  );
}
