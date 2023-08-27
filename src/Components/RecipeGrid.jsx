import React from "react";
export default function Recipe({ name, recipe, imageUrl }) {
  return (
    <div className="recipe">
      <img src={imageUrl} alt="" className="recipe-img" />
      <h3 className="recipe-name">{recipe}</h3>
      <p className="recipe-by">By {name}</p>
    </div>
  );
}
