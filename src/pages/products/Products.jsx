import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import ProductCard from "../../components/card/ProductCard";
import './products.css'
export default function Products() {
  const { products } = useContext(ProductContext);

  if (!products.length) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1> Shop All Products</h1>
      <div className="both">
        <div className="bar">
          <h2>Filter by category</h2>
          <ul>
            <li><input type="checkbox" /><label htmlFor="check-es"> Electronics</label></li>
            <li><input type="checkbox" /><label htmlFor="check-es"> Home Decor</label></li>
            <li><input type="checkbox" /><label htmlFor="check-es"> Apparel</label></li>
            <li><input type="checkbox" /><label htmlFor="check-es"> Accessories</label></li>
          </ul>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }} className="cards">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}