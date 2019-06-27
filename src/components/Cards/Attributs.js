import React from "react"

const Attributs = function (props) {
    let attributList = props.attr
    return (
        <div>
            {
                attributList.map((attribut)=>{
                    return <div key={attribut} className="row mt-1 mb-1">{attribut}</div>
                })
            }
        </div>
    )
}
export default Attributs