import axios from "axios";
import {useState, useEffect} from 'react';

const API_BASE_URL ="http://localhost:8080";
export function Pizzas( props ) {
  const [pizza, setPizza] = useState([]);
  function addToCart(cartItems){
    const updateCartItems = props.updateCartItems;
    const cartItemsProps = props.cartItems;
    updateCartItems((cartItemsProps) => [...cartItemsProps, cartItems]);
    alert("Pizza is added successfully");
  }
  async function getFoodItems(){
    const pizzaData = await axios.get(`${API_BASE_URL}/foodItems/getPizza`);
    console.log(pizzaData.data.results);
    const dataFromAPI = pizzaData.data.results;
    setPizza(dataFromAPI); 
  }
  useEffect(() => {
    getFoodItems();
  }, [])

  function renderFoodItems(){
    return pizza.map((item) => {
      return (
        <div className="card mb-3 mx-auto border-2" style={{maxWidth: "800px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={item.image} alt="..." height="200" width="240" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p>&#8377;{item.price}</p>
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
      <div className="conatiner flex">
      <p className="mt-4 fs-3 mx-auto text-center">Tasty Pizzas</p>
      <div className="row">
        {renderFoodItems()}
      </div>
    </div>
    )
}
