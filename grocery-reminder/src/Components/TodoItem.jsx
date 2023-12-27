/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../App.css';
import { useEffect } from 'react';

const TodoItem = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const [style, setStyle] = useState({});

    function updateCheckBox(){
        setIsChecked(!isChecked);
    }

    useEffect(()=>{
        if(isChecked) setStyle({textDecoration:"line-through"});
        else setStyle({textDecoration:"none"});
    },[isChecked])

  return (
    <div className="grocery_list_wrapper">
      <div className="checkbox_wrapper">
        <input type="checkbox" checked={isChecked} onClick={updateCheckBox}/>
        <label style={style}>{props.groceryName}</label>
      </div>
      <div>
        <button onClick={props.deleteItem}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
