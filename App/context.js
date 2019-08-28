import React, { createContext, useContext, useReducer } from 'react'

export const initialState = {
  osc: 0
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'NEW_OSC':
      return {
        osc: state.osc + 1
      }

    default:
      return state
  }
}

export const StateContext = createContext()

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)
