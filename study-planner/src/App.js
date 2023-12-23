import "./App.css";
import "./Components/Planner.css";
import { useState, useEffect } from "react";

function App() {
  let [subject, setSubject] = useState("");
  let [hour, setHour] = useState("");
  let [planner, setPlanner] = useState([]);

  useEffect(() => {
    const loadPlannerFromLocalStorage = () => {
      const storedPlanner = JSON.parse(localStorage.getItem("planner"));
      if (storedPlanner && storedPlanner.length > 0) {
        setPlanner(storedPlanner);
      }
    };

    loadPlannerFromLocalStorage();
  }, []); // Empty dependency array to run the effect only once on mount

  useEffect(() => {
    localStorage.setItem("planner", JSON.stringify(planner));
  }, [planner]); // Update local storage whenever planner changes

  const addPlanner = (e) => {
    e.preventDefault();
    const newPlannerItem = { subjectValue: subject, hourValue: hour };
    if (subject && hour) {
      setPlanner([...planner, newPlannerItem]);
      setSubject("");
      setHour("");
    }
  };

  const deletePlanner = (index) => {
    const answer = window.confirm("Are you sure you want to delete planner?");
    if (answer) {
      const updatedPlanner = [...planner];
      updatedPlanner.splice(index, 1);
      setPlanner(updatedPlanner);
      updateLocalStorage(updatedPlanner);
    }
  };

  const onChangeHandler = (e, fn) => {
    fn(e.target.value);
  };

  function incrementHour(index) {
    setPlanner((currentPlanner) => {
      const updatedPlanner = [...currentPlanner];
      updatedPlanner[index] = {
        ...updatedPlanner[index],
        hourValue: parseInt(updatedPlanner[index].hourValue) + 1,
      };
      return updatedPlanner;
    });
    updateLocalStorage([...planner]);
  }

  function decrementHour(index) {
    setPlanner((currentPlanner) => {
      const updatedPlanner = [...currentPlanner];
      updatedPlanner[index] = {
        ...updatedPlanner[index],
        hourValue: parseInt(updatedPlanner[index].hourValue) - 1,
      };
      return updatedPlanner;
    });
    updateLocalStorage([...planner]);
  }

  const updateLocalStorage = (plannerArray) => {
    localStorage.setItem("planner", JSON.stringify(plannerArray));
  };

  return (
    <div className="App">
      <div className="main_wrapper">
        <h1>Study Planner</h1>
        <form className="input-form">
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => onChangeHandler(e, setSubject)}
          />
          <input
            type="number"
            placeholder="Hours"
            value={hour}
            onChange={(e) => onChangeHandler(e, setHour)}
          />
          <button className="add_planner" onClick={addPlanner}>
            Add
          </button>
        </form>
        <div className="plannerContainer">
          {planner.map((data, index) => (
            <div className="planner_wrapper">
              <div className="planner_left">
                <span className="planner_text" contentEditable>
                  {data.subjectValue} - {data.hourValue} hours
                </span>
              </div>
              <div className="cta_btn_wrapper">
                <button
                  className="add_btn"
                  onClick={() => incrementHour(index)}
                >
                  +
                </button>
                <button
                  className="subtract_btn"
                  onClick={() => decrementHour(index)}
                >
                  -
                </button>
                <button
                  className="delete_planner"
                  onClick={() => deletePlanner(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
