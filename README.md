# Microfrontends with React 🔬

A small starter learning project to gain some introduction to the incredible world of Microfrontends.

There are two microfrontends in this project: ProductsList (products) and Cart. There is also the host or Container app. 

In this project, I focus on the Run-Time integration (client side) approach with Webpack Module Federation. Therefore the Container gets access to the Products and Cart source code after it loads in the browser. 

## Running in isolation

You can run either of the microfrontends in isolation by navigating to the products or cart folders inside of ecommerce and running the command `npm start`.
- Products runs on http://localhost:8081/
- Cart runs on http://localhost:8082/

## Running together

For the complete experience of the microfrontends, you will need to run all three parts (cart, product and container) on three separate terminals using the command `npm start`.

Navigate to http://localhost:8080/ in your browser to see the container app holding both microfrontends.

