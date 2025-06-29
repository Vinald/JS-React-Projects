import styles from "./Ingredient.module.css";
import React from "react";

const imageURL = "https://spoonacular.com/cdn/ingredients_100x100/";

function Ingredient({ food }) {
    return (
        <div className={styles.ingredients}>
            {food.extendedIngredients &&
                food.extendedIngredients.map((ingredient) => (
                    <div className={styles.ingredient} key={ingredient.id}>
                        <div>
                            <img className={styles.ingredientImage} src={imageURL + ingredient.image} alt={ingredient.name} />
                        </div>
                        <div className={styles.ingredientDetails}>
                            <span className={styles.name}>{ingredient.name}</span>
                            <span className={styles.amount}>{ingredient.amount} {ingredient.unit}</span>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default Ingredient;
