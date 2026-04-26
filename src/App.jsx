import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import Navbar from "./components/navbar/Navbar";  

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import React from 'react';
// import {Bookmark} from 'lucide-react';
// import './index.css';
// function App() {
//   return (
//     <div className='parent'>
//       <div className="card">
//         <div className="top">
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQZwfIF1UdjlMBtjg4fmlfdGU0suXMgG5qA&s" />
//           <button>Save <Bookmark size={12}/></button>
//         </div>
//         <div className="center">
//           <h3>Amazon <span>5 days ago</span></h3>
//           <h2>Senior UI/UX Designer</h2>
//           <div className='tag'>
//             <h4>Part time</h4>
//             <h4>Senior Level</h4>
//           </div>
//         </div>
//         <div className="bottom">
//           <div>
//             <h3>$120/hr</h3>
//             <p>Mumbai,India</p>           
//           </div>
//           <button>Apply Now</button>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default App