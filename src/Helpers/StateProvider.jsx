import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types'

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return(
		<StateContext.Provider value={[state, dispatch]}>
			{children}
		</StateContext.Provider>
	)
};

StateProvider.propTypes = {
	children: PropTypes.node,
}

const initialState = {
    current_page: 'home',
};

const reducer = (state, action) => {
    return {
        ...state,
        ...action
    };
};