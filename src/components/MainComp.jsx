import React from "react"
import IngredientsList from "./IngredientsList"
import { ChefRecipe } from "./ChefRecipe"

export default function Main() {


    /**
     * 
     
     * 2. Move the list of ingredients <section> into its
     *    own IngredientsList component.
     * 
     * While you're considering how to structure things, consider
     * where state is, think about if it makes sense or not to
     * move it somewhere else, how you'll communicate between
     * the parent/child components, etc.
     * 
     * The app should function as it currently does when you're
     * done, so there will likely be some extra work to be done
     * beyond what I've listed above.
     */


    const[ingredients, setIngredients] = React.useState(["All the main spicies","pasta", "ground beef", "tomato paste"])

    const[recipeShown, setRecipeShown] = React.useState(false)

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(prev => [...prev, newIngredient]);
    }

    function getRecipe(){
        setRecipeShown(prev => !prev)

    }
    

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length ? <IngredientsList 
            getRecipe = {getRecipe}
            ingredients = {ingredients}
            /> : null}
            
            {recipeShown ? <ChefRecipe/>: null}
        </main>
    )
}