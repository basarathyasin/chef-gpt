import React, { useEffect } from "react"
import IngredientsList from "./IngredientsList"
import { ChefRecipe } from "./ChefRecipe"
import OpenAI from "openai";
const client = new OpenAI({apiKey:import.meta.env.VITE_API_KEY, dangerouslyAllowBrowser:true});

export default function Main() {

    const[ingredients, setIngredients] = React.useState([])
    const [output , setOutput] = React.useState("");
    const [loading , setLoading] =React.useState(false);
    const[recipeShown, setRecipeShown] = React.useState(false);

    
    const recipeSection = React.useRef(null)

    useEffect(()=>{
        if(output !== "" && recipeSection.current !== null){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    },[output])









    const systemPrompt = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page , make sure the design of the ouput look good and professional with good spacing.
    Here are the Ingredients ${JSON.stringify(ingredients)}`



    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        if(newIngredient && newIngredient.trim()!==""){
            setIngredients(prev => [...prev, newIngredient])
        }else return alert("Please Add Ingredients")
        
    }


    async function getRecipe(){
        setLoading(true)
        setRecipeShown(true)
        try{
        const response = await client.responses.create({
            model: "gpt-5",
            input: systemPrompt
        })
        
        setOutput(response.output_text)
        
    }catch (error){
        console.error("Error generating recipe:", error)
        setOutput("⚠️ Sorry, I couldn’t generate a recipe. Please try again.")
    }finally{
        setLoading(false)
    }
}
    

    return (
        <main>
            <form onSubmit={(e) =>{
                e.preventDefault()
                const formData = new FormData(e.target)
                addIngredient(formData)
                e.target.reset()
            }}
            className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />  
                <button>Add ingredient</button>
            </form>
            {ingredients.length ? <IngredientsList 
            getRecipe ={getRecipe}
            ingredients ={ingredients}
            loading ={loading}
            ref = {recipeSection}
            /> : null}
            
            {recipeShown ? <ChefRecipe
            output ={output}
            loading ={loading}
            />: null}
        </main>
    )
}



// "2 potatoes","2 onions","1 tablespoon garlic paste", "some basic spicies","Vinegar"