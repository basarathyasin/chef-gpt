export default function IngredientsList(props){

    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li className="list-item" key={ingredient}>{ingredient}</li>
    ))
    return (
        <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>

                {props.ingredients.length > 3 ? <div className="get-recipe-container">
                    <div ref={props.ref}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button disabled={props.loading} onClick={props.getRecipe}>{props.loading ?"Loading":"Get A Recipie"}</button>
                </div> : null}
            </section> 
    )
}