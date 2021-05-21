import { Link } from "react-router-dom";

export function Checkout({ cartItems, updateCartItems }) {
  const removeFromCart = (itemToRemove) => {
    updateCartItems(cartItems.filter((item) => item !== itemToRemove));
  };

  return (
    <div
      className="container flex align-items-center"
      style={{ position: "absolute" }}
    >
      <p className="h4 mx-auto text-center mt-4 ">You have ordered:</p>
      {cartItems.map((item, index) => (
        <div
          className="card mb-3 mx-auto border-2"
          style={{ maxWidth: "800px" }}
        >
          <div className="row g-0" key={index}>
            <div className="col-md-4">
              <img src={item.image} alt="..." height="200" width="240" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p>&#8377;{item.price}</p>
                <p className="card-text">{item.description}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {cartItems.length > 0 ? (
        <Link to="/">
          <button className="place-order" onClick={() => updateCartItems(0)}>Place order</button>
        </Link>
      ) : (
        <p className="order-text">No items added</p>
      )}
    </div>
  );
}
