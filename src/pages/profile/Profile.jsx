import './profile.css'
function Profile() {
  return (
    <div className='main'>
      <div className="name">
        <div className="round">JD</div>&nbsp;&nbsp;&nbsp;
        <h2>John Doe <p>johndoe@gmail.com</p></h2>
      </div>

      <div className="account">
        <h2>Acount Information</h2>
        <div className="lists">
          <ul>
            <li>Username: <p>jdoe</p></li>
            <li>Member Since: <p>January 2024</p></li>
            <li>Preferred Payment: <p>*****1234(Visa)</p></li>
          </ul>
          <ul>
            <li>Shipping Address: <p>123 Main St,Anytown</p></li>
            <li>Billing Address: <p>(Same as Shipping)</p></li>
            <li>Type of place: <p>Home</p></li>
          </ul>
        </div>
        
      </div>
      <div className="order">
          <h2>Order History</h2>
        </div>
    </div>
  );
}
export default Profile