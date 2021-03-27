import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import Header from "./header.js";
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
    <>
      <Header isBack={true} title={"Product Description"} />
      <div class="box">
        <div
          class="btn btn-secondary"
          onClick={() => {
            history.replace("/");
          }}
        ></div>
        <div class="layout-container">
          <div class="product-image">
            <img
              class="img-layout"
              src={Product.productImage}
              height="200"
              width="200"
            />
          </div>
          <div class="product-info">
            <div class="info-box">
              <table>
                <tr class="table-row">
                  <td>Name</td>
                  <td class="name">{Product.productName}</td>
                </tr>
                <tr class="table-row">
                  <td>Brand</td>
                  <td class="name">{Product.productBrand}</td>
                </tr>
                <tr class="table-row">
                  <td>Description</td>
                  <td class="name">{Product.productSummary}</td>
                </tr>
                <tr class="table-row">
                  <td>Material</td>
                  <td class="name">{Product.productMaterial}</td>
                </tr>
                <tr class="table-row">
                  <td>Price</td>
                  <td class="name">${Product.productCost}</td>
                </tr>
                <tr class="table-row">
                  <td>Availability</td>
                  <td class="name">{Product.productAvailability}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
