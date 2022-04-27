import React from "react";

const Selection = ({selectionList,itemChanged}) =>{
  return(
          <div className="tc">
          <select name="select" onChange={itemChanged}>
          {selectionList.map((opts)=>{return <option key={opts} value={opts}>{opts}</option>})}
          </select>
        </div>
  )

}

export default Selection;