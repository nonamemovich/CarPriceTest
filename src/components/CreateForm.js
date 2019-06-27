import React, {Component} from "react"

import store from "../store/index"

class CreateForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Attributs:[""],
            title: "",
            description: "",
            
        }
    }
    changeAttr(e, i) {
        let Attributs = this.state.Attributs.slice()
        Attributs[i] = e.target.value
        this.setState( Object.assign(this.state, { 
            Attributs: Attributs
        }) )
    }
    addAttribut() {
        let Attributs = this.state.Attributs.slice()
        Attributs.push("")
        this.setState( Object.assign(this.state, { 
            Attributs: Attributs
        }))
    }
    changeTitle(e) {
        this.setState( Object.assign(this.state, { 
            title: e.target.value
        }))
    }
    changeDescription(e) {
        this.setState( Object.assign(this.state, { 
            description: e.target.value
        }))
    }
    onAddObjectt () {
        let valid = true
        this.state.Attributs.map((attr)=> { if(attr=="") valid=false  } )
        if (this.state.title&&this.state.description&&valid) valid = true
        
        if(valid) {
            let List = store.getState().Objects
            var newObj = {
                title: this.state.title,
                attributes: this.state.Attributs,
                description: this.state.description
            }
            this.props.onAddObjectt(List, newObj)
        }
    }
    render () {
        let Attributs = this.state.Attributs
        let attributsEl = Attributs.map((attr, i) => {
            let notValidAttr = "none"
            if (attr=="") notValidAttr="block"
            return (<div key={i}>
                    <input type="text" className="form-control" onKeyUp={ e => { this.changeAttr(e, i)} }/>
                    <div className="invalid-feedback" style={ { display: notValidAttr } }>
                        обязательно к заполнению 
                    </div>
                </div>
            )
        })

        let notValidTitle = "none"
        if (this.state.title=="") notValidTitle="block"
        
        let notValidDesc = "none"
        if (this.state.description=="") notValidDesc="block"

        return (
            <form>
                <div className="form-group">
                    <label className="">Заголовок</label>
                    <input type="text" className="form-control"
                        onKeyUp={ e => { this.changeTitle(e)} }
                    />
                    <div className="invalid-feedback" style={ { display: notValidTitle } }>
                        обязательно к заполнению 
                    </div>
                </div>
                <div className="form-group">
                    <label className="">Добавить пункт(ы)<span onClick={ e=>{ this.addAttribut(e) }}>+</span></label>
                    {attributsEl}
                </div>
                <div className="form-group">
                    <label className="">Описание</label>
                    <input type="text" className="form-control"
                        onKeyUp={ e => { this.changeDescription(e)} }
                    />
                    <div className="invalid-feedback" style={ { display: notValidDesc } }>
                        обязательно к заполнению 
                    </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={ e=> { this.onAddObjectt(e) } }>Добавить объект</button>
            </form>
        )
    }
}

export default CreateForm