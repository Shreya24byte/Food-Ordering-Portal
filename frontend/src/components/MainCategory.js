import { Link } from "react-router-dom";

export function MainCategory() {
  return (
    <div className="d-flex mt-5">
      <div className="mx-auto row">
        <div className="pizza col-sm-6">
            
          <div className="card main">
          <Link to="/pizza">
            <img
              className="rounded-circle m-2"
              src="https://res.cloudinary.com/dypubdmrm/image/upload/v1621511381/pizza-1428931_1920_b3sga3.png" 
              alt="pizza"
              height="150"
            />
            </Link>
            <div class="card-body">
              <h4 class="card-title">Pizza</h4>
            </div>
          </div>
          
        </div>
        <div className="burger col-sm-6">
        
          <div className="card main">
          <Link to="/burger">
            <img
              className="rounded-circle m-2"
              src="https://res.cloudinary.com/dypubdmrm/image/upload/v1621511660/burger-1674881_1280_ufxqis.png"
              height="150"
              alt="burger"
            />
            </Link>
            <div class="card-body">
              <h4 class="card-title">Burger</h4>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
