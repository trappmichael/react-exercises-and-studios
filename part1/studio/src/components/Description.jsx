import React from 'react';
import styles from "./Description.module.css";

function RecipeAuthor() {

    let authorLink = "https://alexandracooks.com/about/";
    let authorPhoto = "https://alexandracooks.com/wp-content/uploads/2022/08/ali-600x600.png";
    let authorName = "Alexandra Stafford";

    return (
        <div className = {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt = "Photo of blog author, Alexandra Stafford" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Alexandra's Kitchen</a> 
            </div>
        </div> 
    );
};

class RecipeDescription extends React.Component {
    render() {
        return(
            <div> 
                <div>
                    <h1>Sheet Pan Chicken and Cauliflower “Shawarma”</h1>
                    <p>An incredibly easy, weeknight chicken Shawarma recipe.</p>
                </div>
                <RecipeAuthor/>
            </div>
        );
    };
};

export default RecipeDescription;