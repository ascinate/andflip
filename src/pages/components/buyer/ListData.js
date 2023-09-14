import React from "react";

const handleClick = (title) => {
  console.log(`You clicked me! ${title}`);
};

export const columns = [
  {
    name: "Photo",
    selector: "Product",
    sortable: true,
    cell: (d) => (
        <div className="img-box012">
           <img src={d.Product}/>
        </div>
      )
  },
  {
    name: "#Order",
    selector: "order",
    sortable: true,
  },
 
  {
    name: "Order Date",
    selector: "purchase",
    sortable: true,
  },
  
  {
    name: "Product Name",
    selector: "name",
    sortable: true,
  },
  {
    name: "Price",
    selector: "price",
    sortable: true,
  },
  {
    name: "Payment Status",
    selector: "director",
    sortable: true,
    cell: (d) => (
      <a href="https://google.com" target="_blank" className="dlink">
        {d.director}
      </a>
    )
  },

];

export const data = [
  {
    id: 1,
    Product: "images/productsimo.png",
    order:"12560",
    purchase:"16/05/2023",
    name:"Demoboost AI Soft",
    director: "Failed ",
    price:"$15",
   
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg"
  },
  {
    id: 2,
    Product: "images/productsimo.png",
    order:"12560",
    purchase:"16/05/2023",
    director: "Paid",
    name:"Consensus AI",
    price:"$25",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
  },
  {
    id: 3,
    Product: "images/productsimo.png",
    order:"12560",
    purchase:"16/05/2023",
    director: "Paid",
    name:"Vidcast SoftTech",
    price:"$35",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg"
  },

];
