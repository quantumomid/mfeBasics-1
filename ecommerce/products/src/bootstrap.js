import faker from "faker";

const mount = (el) => {
    let products = "";

    for (let i=0; i<7; i++){
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }
    
    // console.log(products);
    el.innerHTML = products;
};

// Context/Situation #1 - running file in development in isolation
// First check to see in development
if (process.env.NODE_ENV === "development") {

    // Check to see we are indeed in isolation i.e. using local index.html file and NOT through Container app
    const el = document.querySelector("#dev-products") // Because dev-products <div> only exists in the local html file (ASSUMPTION)
    if(el) {
        mount(el);
    }
}

// Context/Situation #2 - when running through Container app
export { mount };