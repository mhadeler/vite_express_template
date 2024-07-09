import React, { createContext, useContext, useReducer } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return(
		<StateContext.Provider value={[state, dispatch]}>
			{children}
		</StateContext.Provider>
	)
};

export const useStateValue = () => useContext(StateContext);

const initialState = {
    current_page: 'home',
};

const reducer = (state, action) => {
    return {
        ...state,
        ...action
    };
};