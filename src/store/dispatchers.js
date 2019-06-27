export default (dispatch) => {
    return {
        changeShowComponent:(ShowComponent)=>{
            dispatch({
                type: 'SHOW_COMPONENT',
                payload: ShowComponent
            })
        },

        showCreateForm(Form) {
            dispatch({
                type: 'SHOW_FROM',
                payload: Form
            })
        },

        onAddObjectt: (List=[], NewObject)=>{
            let NewList = List.slice()
            NewList.push(NewObject)
            dispatch({
                type: 'ADD_OBJECT',
                payload: NewList
            })
        },

        onRemoveFirstObject:(List=[])=>{
            let NewList = List.slice()
            NewList.splice(0,1)
            dispatch({
                type: 'REMOVE_OBJECT',
                payload: NewList
            })
        },
        onRemoveLastObject: (List=[]) =>{
            let NewList = List.slice()
            NewList.pop()
            dispatch({
                type: 'REMOVE_OBJECT',
                payload: NewList
            })
        },

        onRecalcObjects: (NewList=[])=>{
            dispatch({
                type: 'RECALC_OBJECTS',
                payload: NewList
            })
        }
    }
}

