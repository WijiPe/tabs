import React, {useState} from 'react';
import TabContent from './TabContent';
import TabHeader from './TabHeader';
import styles from './style1.module.css';


const Tab = (props) => {
    const [text, setText] = useState("");
    
    const changeText = (index) => {
        setText(props.TabInput[index].content)
    }

    return (

        <div >
            <div className = {styles.header1}>
                {
                    props.TabInput.map((item, i) => { 
                        return (
                            <TabHeader name = {item.header} key= {i} changeText = {changeText} />
                        )
                    })
                }
            </div>
            <div>
                <TabContent content = {text}  />
            </div>
            

        </div>

    )
}

    



export default Tab