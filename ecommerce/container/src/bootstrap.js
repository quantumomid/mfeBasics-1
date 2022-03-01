import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

console.log("Container 👾");

productsMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));

// Note: although you are free to name above as you wish: ideally:
// 1) Do not name same as the <div> id of the local index.html files in the Products and Cart subfolders
// 2) Also do not give the same name as 'name' attribute used in the ModuleFederationPlugin in the webpack configs of the Products and Carts subfolders - as this creates a bizare bug that interferes with webpack in the background!