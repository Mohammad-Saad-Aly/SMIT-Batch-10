import React, { useState } from 'react'


function Todo() {

    let [list, setList ] = useState([])
    let [inputText, setInputText] = useState('')

    function updateText(e){
       setInputText(e.target.value)
    }

    function addItem(){
        // purpose: list me inpt se value get karni hai
        // maujod : list maujod, input maujod
        var copyList = [...list]
        copyList.push(inputText)
        setList(copyList)
    }

    function indexFunction(e){
        var copyList = [...list]
        copyList.splice(e,1)
        setList(copyList)
    }

    function deleteAll(){
        setList([])
    }

    return (
    <div>
      
      <h1>Todo App</h1>

      <input onChange={updateText} type="text" name="" id="" />
        <button onClick={addItem}>Add Item</button>
        <button onClick={deleteAll}>Delete All</button>

        {/* <ul>
            {
                list.map((value,index)=>{
                    return <li key={index}>{value} <button onClick={()=>indexFunction(index)}>Delete</button></li>
                })
            }
        </ul> */}


     </div>
  )
}


export default Todo