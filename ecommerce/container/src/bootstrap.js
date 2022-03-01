import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

console.log("Container 👾");

const el = document.querySelector("#my-products");
productsMount(el);
cartMount(el);