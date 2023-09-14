import React from "react";
import { Link } from "react-router-dom";

function SeviceLinkOne() {
    
}

export default function SeviceLinkOne() {
    const listItems = people.map(person =>
      <li key={person.id}>
         <Link to="/"> Software Development </Link>
      </li>
    );
    return <ul>{listItems}</ul>;
  }
  
