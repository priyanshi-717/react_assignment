import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="card">
      
      <img
        src={product.image}
        alt={product.name}
        className="card-image"
      />

      <h3 className="card-title">{product.name}</h3>

      <p className="card-price">₹{product.price}</p>

      <p className="card-rating">
        {product.rating} ({product.reviews} reviews)
      </p>

      <p className={product.inStock ? "in-stock" : "out-of-stock"}>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>

      <Link to={`/products/${product.slug}`} className="card-button">
        View Details
      </Link>
    </div>
  );
}