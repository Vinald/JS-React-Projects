import React from "react";
import styles from "./FoodItem.module.css";

function FoodItem({ food, setFoodId }) {
    return (
        <div className={styles.itemContainer}>
            <img className={styles.itemImage} src={food.image} alt={food.title} />
            <div className={styles.itemContent}>
                <p className={styles.itemTitle}>{food.title}</p>
            </div>
            <div className={styles.buttonContainer}>
                <button
                    className={styles.itemButton}
                    onClick={() => {
                        setFoodId(food.id);
                    }}
                >
                    View Recipe
                </button>
            </div>
        </div>
    );
}

export default FoodItem;
