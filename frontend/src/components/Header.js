import {FaCartArrowDown} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export function Header({ cartItems }) {
    return (
    <nav className="navbar navbar-light bg-danger flex">
    <div className="text-center w-100 text-light d-flex">
      <div className="w-100 fs-3">Food Ordering Portal</div>
      <div className="d-flex me-5 align-items-center ">
      <Link to="/checkout">
          <FaCartArrowDown className="ms-auto me-2 fs-3 text-light"/>
      </Link>
        {cartItems.length}
      </div>
    </div>
  </nav>
    )
}
