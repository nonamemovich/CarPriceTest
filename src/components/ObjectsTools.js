import React from "react"

import {ShowCONST} from '../const'

const ObjectsTools=function(props) {
    let ShowComponent = props.ShowComponent
    let selectList = ""
    let selectCards = " select"
    if (ShowComponent==ShowCONST.List) {
        selectList = " select"
        selectCards = ""
    }
    return (
        <div className="row">
            <div className="col-6 d-flex mr-auto font-weight-bold" style={{alignItems: "center"}}>
                <span style={{fontSize: "22px"}}>Список Объектов</span>
                <img src="/assets/add.svg" className="size20 ml-2 mt-1" onClick={ e => { props.showCreateForm(ShowCONST.CreateFrom) } }/>
                
            </div>
            <div className="col-2 pl-2"> 
                <span className={"inlineDisplay p-2"+selectList} onClick={ e => { props.changeShowComponent(ShowCONST.List) } }> 
                    <img src="/assets/list.svg" className="rounded float-left size30"/>
                </span>
                <span className={"inlineDisplay p-2"+selectCards} onClick={ e => { props.changeShowComponent(ShowCONST.Cards) } }>
                    <img src="/assets/table-grid.svg" className="rounded float-left size30"/>
                </span>
            </div>
        </div>
    )
}

export default ObjectsTools