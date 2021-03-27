import "./card.css";
import { useHistory } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

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
        <span class="separator" />
        <span class="text">More details</span>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
};

export default Card;
