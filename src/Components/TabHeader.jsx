import React, {useState} from 'react'
import TabContent from './TabContent'


const TabHeader = (props) => {
    




    return (
        <div>
            <button onClick = { () =>  props.changeText(props.index) }> {props.name} </button>
        </div>



    )
}

    



export default TabHeader