# Microfrontends with React

In this project focus on Run-Time integration (client side) approach (with Webpack Module Federation) - therefore after container gets loaded in the browser - it gets access to the ProductsList source code. 


There are two microfrontends: ProductsList and Cart 

Products runs on http://localhost:8081/
Cart runs on http://localhost:8082/


There is also a Host, i.e. Container:

Container runs on http://localhost:8080/