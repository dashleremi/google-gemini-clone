import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayParagraph = (index, nextWord) => {

    }

    const onSent = async (prompt) => {

        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)

        const response = await run(input)

        let responseArray = response.split("**");
        let newResponse;

        for(let i = 0; i < responseArray.length; i++)
        {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            } else {
                newResponse += "<b>" + responseArray[i] + "</b>"
            }
        }

        setResultData(newResponse)
        setLoading(false)
        setInput("")

    }

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired, // Specify the validation for children
  };

export default ContextProvider;