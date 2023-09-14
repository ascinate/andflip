import React from "react";
import { Link } from "react-router-dom";

const handleClick = (title) => {
  console.log(`You clicked me! ${title}`);
};

export const columns = [
  {
    name: "Product",
    selector: "Product",
    sortable: true,
    cell: (d) => (
        <div className="img-box012">
           <img src={d.Product}/>
        </div>
      )
  },
  {
    name: "Date of sale",
    selector: "director",
    sortable: true,
    cell: (d) => (
      <a href="https://google.com" target="_blank" className="dlink">
        {d.director}
      </a>
    )
  },
  
  {
    name: "Pricing",
    sortable: true,
    selector: "price",
  },
  {
    name: "Action",
    sortable: false,
    selector: "null",
    cell: (d) => [
       <Link to="/billing" className="btn btn-rem"> See Billing </Link>
    ]
  }
];

export const data = [
  {
    id: 1,
    Product: "images/productsimo.png",
    director: "10/05/2023",
   
    price:
      "$150"
  },
  {
    id: 2,
    Product: "images/productsimo.png",
    director: "12/05/2023",
    price:
      "$150"
  },
  {
    id: 3,
    Product: "images/productsimo.png",
    director: "20/05/2023",
    price:
      "$120"
  },

];
