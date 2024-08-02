import React from 'react';

function ListItems(props) {
  return (
    <ul style={{backgroundColor:"red",margin:10}} >
      <li><b>Product Title :</b> {props.title}</li>
      <li><b>Product Description :</b> {props.description}</li>
      <li><b>Product Category :</b> {props.category}</li>
      <li><b>Product Rating :</b> {props.rating.rate}</li>
    </ul>
  );
}

export default ListItems;
