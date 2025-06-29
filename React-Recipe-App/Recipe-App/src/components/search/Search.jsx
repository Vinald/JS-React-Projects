import { useEffect, useState } from "react";
import styles from "./Search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "8a5a67a5122d40f19966abd293f1d468";

console.log("API_KEY", API_KEY);

function Search({ foodData, setFoodData }) {
    const [query, setQuery] = useState("pizza");
    useEffect(() => {
        const fetchFood = async () => {
            const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await response.json();
            setFoodData(data.results);
        };
        // fetchFood();
    }, [query, setFoodData]);

    return (
        <div className={styles.searchContainer}>
            <input className={styles.input} type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={"Search for a recipe ...."} />
        </div>
    );
}

export default Search;
