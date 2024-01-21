import { useState, useRef, useEffect } from "react";
import "./App.css";
import { AiFillCloseCircle } from "react-icons/ai";

function App() {

  const [budget] = useState(2000);
  const [list, setList] = useState([]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("data"));
    if (localData !== null) {
      setList([...localData]);
    }
  }, []);

  const nameRef = useRef();
  const costRef = useRef();

  function calculateTotal() {
    const sum = list.reduce((acc, curr) => {
      acc += curr.rupee;
      return acc;
    }, 0);
    return sum;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const name = nameRef.current.value;
    const cost = Number.parseInt(costRef.current.value);
    setList([...list, { name: name, rupee: cost }]);
    const localData = JSON.parse(localStorage.getItem("data"));
    if (localData === null) {
      localStorage.setItem(
        "data",
        JSON.stringify([{ name: name, rupee: cost }])
      );
    } else {
      localStorage.setItem(
        "data",
        JSON.stringify([...localData, { name: name, rupee: cost }])
      );
    }
    nameRef.current.value = "";
    costRef.current.value = "";
  }

  function deletefn(delName) {
    const updateFn = list.filter((item) => item.name !== delName);
    localStorage.setItem("data", JSON.stringify([...updateFn]));
    setList([...updateFn]);
  }

  return (
    <>
      <div className="container mb-3">
        <h1>My Budget Planner</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex align-items-center justify-content-center">
            <h4 className="alert alert-secondary">Budget: Rs.{budget}</h4>
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <h4 className="alert alert-secondary text-success">
              Remaining: Rs.{budget - calculateTotal()}
            </h4>
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <h4 className="alert alert-info">
              Spant so far:{calculateTotal()}
            </h4>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------- */}
      <div className="container mb-3">
        <h3>Expenses</h3>
      </div>
      <div className="container">
        {list.length === 0 ? (
          <h3 className="text-success">No Expenses added yet...</h3>
        ) : (
          list.map((item) => {
            return (
              <div
                className="alert alert-secondary d-flex justify-content-between"
                role="alert"
                key={item.name}
              >
                {item.name}
                <span>
                  Rs.{item.rupee}
                  <AiFillCloseCircle onClick={() => deletefn(item.name)} />
                </span>
              </div>
            );
          })
        )}
      </div>
      {/* ------------------------------------------------------------------------------------------------- */}
      <div className="container mb-3">
        <h2>Add Expenses</h2>
      </div>
      <form className="container" onSubmit={(e) => handleSubmit(e)}>
        <div className="container d-flex justify-content-between">
          <div className="mb-3" style={{ width: "48%" }}>
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={nameRef}
            />
          </div>
          <div className="mb-3 " style={{ width: "48%" }}>
            <label className="form-label">Cost</label>
            <input
              type="Number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={costRef}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
      {/* ------------------------------------------------------------------------------------------------- */}
    </>
  );
}

export default App;
