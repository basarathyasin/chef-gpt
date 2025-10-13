export default function Main(){
    return(
        <main>
            <form className="add-ingredient-form">
                <input 
                type="text"
                placeholder="e.g. Potatoes"
                aria-label="Add ingredients"
                />
                <button>Add ingredients</button>
            </form>
        </main>
    )
}