import React from "react";
import FoodItem from "./FoodItem.jsx";

function FoodList({ foodData }) {
    return (
        <div className="food-list">
            {foodData.map((food) => (
                <div key={food.id} className="food-item">
                    <FoodItem food={food} />
                </div>
            ))}
        </div>
    );
}

export default FoodList;
