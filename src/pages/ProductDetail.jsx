import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function ProductDetail() {
  const { slug } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find((p) => p.slug === slug);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div>
      <h2>{product.name}</h2>

      <img src={product.image} alt={product.name} width="200" />

      <p><b>Price:</b> ₹{product.price}</p>
      <p><b>Brand:</b> {product.brand}</p>
      <p><b>Category:</b> {product.category}</p>
      <p><b>Rating:</b> {product.rating}</p>
      <p><b>Reviews:</b> {product.reviews}</p>
      <p><b>Description:</b> {product.description}</p>

      <p style={{ color: product.inStock ? "green" : "red" }}>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}