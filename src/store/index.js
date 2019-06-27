import { createStore } from 'redux'
import data from '../../Task/data.json'
import {ShowCONST} from '../const'

let initialState = {
    Objects: data.data,
    ShowComponent: ShowCONST.List,
    ShowForm: null
}

var store = createStore((state = initialState, action)=>{
    switch (action.type) {
        case 'SHOW_COMPONENT':
            return Object.assign({}, state, {
                ShowComponent: action.payload
            })
        case 'SHOW_FROM':
            return Object.assign({}, state, {
                ShowForm: action.payload
            })
        case 'ADD_OBJECT':  
            return Object.assign({}, state, {
                Objects: action.payload,
                ShowForm: null
            })
        
        case 'REMOVE_OBJECT':
            return Object.assign({}, state, {
                Objects: action.payload
            })

        case 'RECALC_OBJECTS':
            return Object.assign({}, state, {
                Objects: action.payload
            })

        default:
            return state
    }
});

export default store