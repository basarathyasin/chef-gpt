import logo from "/Users/bbox/cheif-gpt/src/assets/chef gpt logo.png"

export function Header(){
    return(
        <header>
            <img src={logo} alt="logo"/>
           <h1>Chef GPT</h1> 
        </header>
    )
}