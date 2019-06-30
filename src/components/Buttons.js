import React from "react"

import style from './style.css'

import store from '../store/index'

const Buttons=function(props) {
    let List = store.getState().Objects || []
    let onRecalcObjects = function (type) {
        if (!List.length || List.length==0) return
        
        if (type=="addToEnd") {
            let NewList = List.slice()
            let firstObject = NewList.splice(0,1)
            NewList = [...NewList, ...firstObject]
            props.onRecalcObjects(NewList)
        } else {
            let NewList = List.slice()
            let lastObject = NewList.pop()
            NewList = [lastObject, ...NewList]
            props.onRecalcObjects(NewList)
        }
    }
    return (
        <div>
            <div className="row mb-3 mt-1">
                <div className="col-6">
                    <button type="button" className={"btn btn-lg btn-block"+" "+style.buttonColor}
                    onClick={ e => { onRecalcObjects("addInStart") } }
                    >Добавить в начало</button>
                </div>
                <div className="col-6">
                    <button type="button" className={"btn btn-lg btn-block"+" "+style.buttonColor}
                     onClick={ e => { onRecalcObjects("addToEnd") } }
                    >Добавить в конец</button>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-6">
                    <button type="button" className={"btn btn-lg btn-block"+" "+style.buttonColor}
                    onClick={ e => { props.onRemoveFirstObject(List) } }
                    >Удалить первый</button>
                </div>
                <div className="col-6">
                    <button type="button" className={"btn btn-lg btn-block"+" "+style.buttonColor}
                    onClick={ e => { props.onRemoveLastObject(List) } }
                    >Удалить последний</button>
                </div>
            </div>
        </div>
    )
}

export default Buttons