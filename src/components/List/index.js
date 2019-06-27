import React, {Component} from "react"

import Attributs from './Attributs'

import store from '../../store/index'

import style from '../style.css'

class List extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        let storeState = store.getState()
        let numb = 1
        let Objects = storeState.Objects.map((Obj)=>{
            numb
            return (
            <div className={"mt-3 mb-3 p2"+" "+style.grow} key={Obj.title}>
                <div className="row pt-4 pb-1 pl-2 pr-2">
                    <div className="col-1 pl-4 text-primary">{numb++}</div>
                    <div className="col-2 mt-1 mb-1">
                        {Obj.title}
                    </div>
                    <div className="col-sm">
                        <Attributs attr={Obj.attributes}/>
                    </div>
                </div>
                <hr className="half-rule"/>
                <div className="row pb-4 pl-3 pr-3">
                    <div className="col-sm">
                    {Obj.description}
                    </div>
                </div>
            </div>
            )
        })
        return (
            <div className={style.fonts}>
                {Objects}
            </div>
        )
    }
}
export default List