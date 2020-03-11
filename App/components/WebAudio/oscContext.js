import React, { createContext, useContext, useReducer } from 'react'

export const initialState = {
  osc: 0
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'NEW_OSC':
      console.log(state.osc + 1)
      return {
        osc: state.osc + 1
      }

    default:
      return state
  }
}

export const OscStateContext = createContext()

export const OscProvider = ({ children }) => (
  <OscStateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </OscStateContext.Provider>
)

export const useOscValue = () => useContext(OscStateContext)
