import "./card.css";
import Layout from "./layout";
import { useHistory, useLocation } from "react-router-dom";

let Card = (props) => {
  let history = useHistory();
  return (
    <div class="card-container">
      <div class="container">
        <div class="img-container">
          <img src={props.pro_img} alt="" />
        </div>
        <div class="product_detail">
          <div class="product_brand">
            <p>{props.pro_brand}</p>
          </div>
          <div class="product_name">
            <p>{props.pro_name}</p>
          </div>
          <div class="product_cost">
            <p>$ {props.pro_price}</p>
          </div>
        </div>
      </div>
      <div
        class="btn-primary"
        onClick={() => {
          history.push("/product/" + props.pro_id);
        }}
      >
        Buy Now
      </div>
    </div>
  );
};

export default Card;
