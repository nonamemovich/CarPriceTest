import React, {Component} from "react"
import  { connect } from 'react-redux';
import store from '../store/index'
import dispatchers from '../store/dispatchers'
import {ShowCONST} from '../const'

import Cards from './Cards/index'
import List from './List/index'
import ObjectsTools from './ObjectsTools'
import Buttons from './Buttons'
import CreateForm from './CreateForm'

class App extends Component {
	constructor(props) {
		super(props);
    }
    render () {
        let state = store.getState()
        let ShowComponent
        
        if (state.ShowForm==ShowCONST.CreateFrom) {
            ShowComponent = <CreateForm onAddObjectt={this.props.onAddObjectt}/>
        } else if (state.ShowComponent==ShowCONST.Cards){
            ShowComponent = <Cards />
        } else {
            ShowComponent = <List />
        }
        return (
            <div className="container">
                <Buttons 
                    onRecalcObjects={this.props.onRecalcObjects}
                    onRemoveFirstObject={this.props.onRemoveFirstObject}
                    onRemoveLastObject={this.props.onRemoveLastObject}
                    />
                <hr className="half-rule"/>
                <ObjectsTools changeShowComponent={this.props.changeShowComponent} showCreateForm={this.props.showCreateForm} ShowComponent={state.ShowComponent}/>
                <hr className="half-rule"/>
                {ShowComponent}
            </div>
        )
    }
}

export default connect (
    state=>(state),
    dispatchers
)(App);