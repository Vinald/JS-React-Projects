import React from "react";
import styles from "./RecipeDetails.module.css";
import Ingredient from "../ingredient/Ingredient.jsx";

function RecipeDetails({ food, loading }) {
    return (
        <>
            <div className={styles.recipeCard}>
                <h1 className={styles.recipeTitle}>{food.title}</h1>
                <img className={styles.recipeImage} src={food.image} alt={food.name} />
            </div>
            <div className={styles.recipeDetail}>
                <span>
                    <strong>{food.readyInMinutes} Minutes</strong>
                </span>
                <span>
                    <strong>Serves {food.servings}</strong>
                </span>
                <span>{food.vegetarian ? "Vegetarian" : "Non Vegetarian"}</span>
                <span>{food.vegan ? "Vegan Meal" : "Non Vegan Meal"}</span>
                <span>${food.pricePerServing} Per serving</span>
            </div>
            
            <h3>Ingredients</h3>
            <Ingredient food={food} />
            
            <h3>Instructions</h3>
            <div className={styles.instructions}>
                {loading ? (
                    <p>"Loading Instructions..."</p>
                ) : (
                    <ol>
                        {food.analyzedInstructions[0].steps.map((step) => (
                            <li key={step.id}>
                                <strong>Step {step.number}:</strong> {step.step}
                            </li>
                        ))}
                    </ol>
                )}
            </div>
        </>
    );
}

export default RecipeDetails;
