import React, {Component} from "react"

import Attributs from './Attributs'

import store from '../../store/index'

import style from '../style.css'

class Cards extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        let storeState = store.getState()
        let numb = 1
        let Objects = storeState.Objects.map((Obj)=>{
            numb
            return (
            <div className={"card m-3 mt-3 mb-3 p2"+" "+style.grow+" "+style.width30} key={Obj.title}>
                <div className="card-body ">
                    <h5 className="card-title d-flex justify-content-between align-items-center">
                        <span>{Obj.title}</span>
                        <span className={"badge text-primary"+" "+style.fonts}>{numb++}</span>
                    </h5>
                    <div className="p-2">
                        <Attributs attr={Obj.attributes}/>
                    </div>
                </div>
                <hr className="half-rule"/>
                <p className="card-text p-2">
                    {Obj.description}
                </p>
                
            </div>
            )
        })
        return (
            <div className={"card-columns"+" "+style.fonts+" "+style.wrap}>
                {Objects}
            </div>
        )
    }
}

export default Cards