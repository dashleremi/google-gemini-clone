import { createContext } from "react";
import PropTypes from 'prop-types';

export const Context = createContext();

const ContextProvider = (props) => {

    const contextValue = {

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