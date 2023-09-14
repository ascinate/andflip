import React from "react";
import { FiTrash2 } from "react-icons/fi";

const handleClick = (title) => {
  console.log(`You clicked me! ${title}`);
};

export const columns = [
  {
    name: "Picture",
    selector: "Product",
    sortable: true,
    cell: (d) => (
        <div className="img-box012">
           <img src={d.Product}/>
        </div>
      )
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
    name: "Stock Status",
    selector: "director",
    sortable: true,
    cell: (d) => (
      <a href="https://google.com" target="_blank" className="dlink">
        {d.director}
      </a>
    )
  },

  

  {
    name: "Action",
    sortable: false,
    selector: "null",
    cell: (d) => [
       <button type="button" className="btn btn-rem"> Delete <FiTrash2/> </button>
    ]
  }
];

export const data = [
  {
    id: 1,
    Product: "images/productsimo.png",
    name:"Ai Softech",
    director: "In Stock ",
    price:"$15",
   
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg"
  },
  {
    id: 2,
    Product: "images/productsimo.png",
    name:"Ai Softech",
    director: "In Stock",
    price:"$25",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
  },
  {
    id: 3,
    Product: "images/productsimo.png",
    name:"Ai Softech",
    director: "In Stock",
    price:"$35",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg"
  },

];
