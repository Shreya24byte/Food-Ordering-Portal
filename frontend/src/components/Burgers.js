import axios from "axios";
import {useState, useEffect} from 'react';

const API_BASE_URL ="http://localhost:8080";
export function Burgers(props) {
  function addToCart(cartItems){
    const updateCartItems = props.updateCartItems;
    const cartItemsProps = props.cartItems;
    updateCartItems((cartItemsProps) => [...cartItemsProps, cartItems]);
    alert("Burger is added successfully");
  }

  const [burgers, setBurgers] = useState([]);
  async function getFoodItems(){
    const burgersData = await axios.get(`${API_BASE_URL}/foodItems/getBurger`);
    console.log(burgersData.data.results);
    const dataFromAPI = burgersData.data.results;
    setBurgers(dataFromAPI); 
  }
  useEffect(() => {
    getFoodItems();
  }, [])
  function renderFoodItems(){
    return burgers.map((item) => {
      return (
        <div className="card mb-3 mx-auto" style={{maxWidth: "800px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={item.image} alt="..." height="200" width="240" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p>&#8377; {item.price}</p>
                <p className="card-text">
                  {item.description}
                </p>
                <button className="btn btn-danger" onClick={() => addToCart(item)}>Order Now</button>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }
    
    return (
      <div className="container flex">
      <p className="mt-4 fs-3 mx-auto text-center">Crispy Burgers</p>
      <div className="row">
        {renderFoodItems()}
      </div>
    </div>
    )
}