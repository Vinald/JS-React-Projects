import React, { useEffect } from "react";
import RecipeDetails from "../recipeDetails/RecipeDetails.jsx";
import styles from "./FoodDetails.module.css";

function FoodDetails({ foodId }) {
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "8a5a67a5122d40f19966abd293f1d468";
    const [food, setFood] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const fetchFoodDetails = async () => {
            try {
                const response = await fetch(`${URL}?apiKey=${API_KEY}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                console.log("Food Details:", data);
                setFood(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching food details:", error);
            }
        };

        if (foodId) {
            fetchFoodDetails();
        }
    }, [foodId, URL, API_KEY]);

    return (
        <div >
            <RecipeDetails food={food} loading={loading} />
        </div>
    );
}

export default FoodDetails;
