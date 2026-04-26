import './home.css';
import {Link} from "react-router-dom";
export default function Home() {
  return (
    <div>
      <div className="Hero">
        <h1>Welcome to React E-Store!</h1>
        <h2>Discover our range of products.</h2>
        <button><Link to="/products" className='links'>Shop All Products</Link></button>
      </div>
      <div className="section">
        <h1>Why shop with Us?</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam placeat deserunt ea, vero rerum! Autem officiis nostrum quis minus libero numquam impedit facere quod, magni, praesentium sed deserunt odit repudiandae aliquam. Ipsa minima perferendis, nihil tempore atque dicta natus!</p>
      </div>
      <div className="footer">
        <hr />
        <p>@2026 React E-Store | All rights reserved.</p>

      </div>

    </div>
  )
  ;
}