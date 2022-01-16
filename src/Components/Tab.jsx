import React, {useState} from 'react'
import TabContent from './TabContent'
import TabHeader from './TabHeader'


const Tab = (props) => {
    const [text, setText] = useState("");
    
    const changeText = (index) => {
        setText(props.TabInput[index].content)
    }

    // 
    
    return (
        <div>

            {
               props.TabInput.map((item, i) => { 
                    return (
                            <TabHeader name = {item.header} index = {i} changeText = {changeText} />
                    )
                })
            }
            
            <TabContent  content = {text}  />




        </div>



    )
}

    



export default Tab