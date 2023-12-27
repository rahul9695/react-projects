import { useState, useEffect } from "react";
import "./App.css";
import TodoItem from "./Components/TodoItem";

function App() {

  let localData = JSON.parse(localStorage.getItem("array"));

  const [groceryList, setGroceryList] = useState(localData ? localData : []);
  const [inputValue, setInputValue] = useState("");

  function onChangeHandler(e) {
    setInputValue(e.target.value);
  }

  function addItem(e) {
    e.preventDefault();
    if (inputValue) setGroceryList([...groceryList, inputValue])
    else alert("Input is Empty! Write something and try again.");
    setInputValue("");
  }

  useEffect(() => {
    localStorage.setItem("array", JSON.stringify(groceryList));
  }, [groceryList]);

  function deleteItem(index) {
    const arrayCopy = [...groceryList];
    arrayCopy.splice(index, 1);
    setGroceryList(arrayCopy);
  }

  return (
    <>
      <div className="App">
        <h1 className="heading">Grocery Bud</h1>
        <form className="input_wrapper">
          <input
            className="search_input"
            type="text"
            placeholder="What grocery do you need today?"
            onChange={onChangeHandler}
            value={inputValue}
          />
          <button onClick={addItem}>Add Item</button>
        </form>
        <div className="to_buy_list">
          {groceryList.map((vegiName, index) => (
            <TodoItem
              key={index}
              groceryName={vegiName}
              deleteItem={() => deleteItem(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
