import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

import "./layout.css";

let Layout = (props) => {
  const location = useLocation();
  const history = useHistory();
  const productId = location.pathname.split("/")[2];
  useEffect(async () => {
    console.log("api called \n");
    await axios
      .get(`https://6037c52d54350400177235f5.mockapi.io/product/${productId}`)
      .then((res) => {
        setProduct(res.data);
      });
  }, []);

  const [Product, setProduct] = useState([]);
  return (
    <div class="box">
      <div
        class="btn btn-secondary"
        onClick={() => {
          history.replace("/");
        }}
      >
      </div>
      <div class="image">
        <img src={Product.productImage} height="200" width="200" />
      </div>
      <div class="info">
        <div class="name">{Product.productName}</div>
        <div class="brand">{Product.productBrand}</div>
        <div class="price">{Product.productCost}</div>
        <div class="description">{Product.productSummary}</div>
        <div class="avail">{Product.productAvailability}</div>
        <div class="material">{Product.productMaterial}</div>
      </div>
    </div>
  );
};

export default Layout;
