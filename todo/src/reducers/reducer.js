import React, { useReducer } from 'react'

const initialState = {}
function reducer(state, action) {
    switch (action.type) {
        case 'INCREASE':
            return { count: state.count + 1 }
        case 'DECREASE':
            return { count: state.count - 1 }
        default:
            return state
    }
}