import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input,setinput] = useState(""); //Use to save input data
    const [recentPrompt,setrecentPrompt] = useState(""); // use when we click on send button in writing prompt area the input field data will be saved in recent prompt and we will display in main component(card)
    const [prevPrompt,setprevPrompt] = useState([]); // array to store all input history and display in recent tab in side bar
    const [showResult,setshowResult] = useState(false); // if it is true it will hide al the cards and greet text and show the result
    const [loading,setloading] = useState(false); // if this is true it will show the loading animation (loading text)after getting data we will make it false
    const [resultData,setresultData] = useState(""); // to display result on webpage


    const delayPara = (index,nextWord) => {
        setTimeout(function () {
            setresultData(prev => prev+nextWord)
        },75*index) // delay duration*index
    }

    const newChat = () => {
        setloading(false)
        setshowResult(false)

    }
    const onSent = async(prompt)=>{

        setresultData("") // prev result will remove from state variable or reset on running the command
        setloading(true)
        setshowResult(true)
        let response;
        if(prompt!== undefined){
            response = await run(prompt)
            setrecentPrompt(prompt)
        }
        else{
            setprevPrompt(prev=>[...prev,input]) // ...prev se prev jitne element hai uske aage ek jagah banegi usme input store ho jayega
            setrecentPrompt(input)
            response = await run(input)
        }
        
        let responseArray = response.split("**");
        let newResponse="";
        for(let i =0; i< responseArray.length;i++){
            if(i === 0 || i%2 !== 1){ //double star means bold and single star means new line
                newResponse += responseArray[i];
            }
            else{
                newResponse += "<b>"+responseArray[i]+"</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        let newResponseArray = newResponse2.split(" ");
        for(let i=0;i<newResponseArray.length;i++){
            const nextWord = newResponseArray[i];
            delayPara(i,nextWord + " ")
        }
        setloading(false)
        setinput("")

    }
    
    const contextValue = {
        prevPrompt,
        setprevPrompt,
        onSent,
        setrecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setinput,
        newChat
    }
    return (
        <Context.Provider value = {contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider