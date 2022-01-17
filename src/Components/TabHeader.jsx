import React, {useState} from 'react'
import styles from './TabHeader.module.css';

const TabHeader = (props) => {
    
    return (
        <div className={styles.button}>
            <button className ="w3-bar-item w3-button tablink" onClick = { () =>  props.changeText(props.key) }> {props.name} </button>
        </div>

    )
}

    



export default TabHeader