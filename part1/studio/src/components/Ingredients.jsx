import styles from './Ingredients.module.css';

export default function RecipeIngredients() {

    let ingredients = ["1 large head Cauliflower", "1 large onion", "5 tbsp Olive Oil", "1 tbsp Cumin Seeds", "1 tbsp Coriander Seeds"];

    return (
        <div>
            <h3>Recipe Ingredients</h3>
                <ul className = {styles.ingredientList}>
                    <li>{ingredients[0]}</li>
                    <li>{ingredients[1]}</li>
                    <li>{ingredients[2]}</li>
                    <li>{ingredients[3]}</li>
                    <li>{ingredients[4]}</li>
                </ul>
        </div>
    );
};