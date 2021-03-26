import react, { useState, useEffect } from "react";
import axios from "axios";
import "./main_page.css";
import Card from "./card";
import Layout from "./layout"


let Main_page = () => {
	useEffect(async () => {
		console.log("api called \n");
		await axios
			.get("https://6037c52d54350400177235f5.mockapi.io/product")
			.then((res) => {
				setProduct(res.data);
			});
	}, []);

	const [Product, setProduct] = useState([]);

	// console.log(Product);
	return (
		<div class="container_main">
			<div class = "row">
				{Product.map((pro) => {
					return (
						<div class="col-sm">
							<Card
                                pro_img={pro.productImage}
								pro_name={pro.productName}
								pro_brand={pro.productBrand}
								pro_price={pro.productCost}
								pro_id={pro.productId}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Main_page;
