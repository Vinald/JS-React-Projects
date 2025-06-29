import React from "react";
import styles from "./RecipeDetails.module.css";

function RecipeDetails({ food, loading }) {
    return (
        <>
            <div className={styles.recipeCard}>
                <h1>{food.title}</h1>
                <img src={food.image} alt={food.name} />
                <span>
                    <strong>{food.readyInMinutes} Minutes</strong>
                </span>
                <span>
                    <strong>Serves {food.servings}</strong>
                </span>
                <span>{food.vegetarian ? "Vegetarian" : "Non Vegetarian"}</span>
                <span>{food.vegan ? "Vegan Meal" : ""}</span>
            </div>
            <div>
                <span>${food.pricePerServing / 100}</span>
            </div>
            <div>
                <h3>Ingredients</h3>
                <ol>
                    {food.extendedIngredients &&
                        food.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                </ol>
            </div>
            <div>
                (<h3>Instructions</h3>
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
