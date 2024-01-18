import { useState, useEffect, useRef } from "react";
import "../App.css";

const Center = () => {
  const [addBtn, setAddBtn] = useState(false);
  const [centerTitle, setCenterTitle] = useState("Add New Person");
  const [userName, setUserName] = useState("");
  const [dob, setDob] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [age, setAge] = useState("");
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [userDetail, setUserDetail] = useState(() => {
    const storedUserDetail = localStorage.getItem("userDetail");
    return storedUserDetail ? JSON.parse(storedUserDetail) : [];
  });
  const [retrieveData, setRetrieveData] = useState([]);
  const [newPersonTab, setNewPersonTab] = useState(true);
  const [retrieveInfoTab, setRetrieveInfoTab] = useState(false);

  const retrieveInputRef = useRef();

  let addNewPerson = "Add New Person";
  let retrieveInfo = "Retrieve Information";
  let keyVal = 100;

  useEffect(() => {
    // This useEffect will be triggered when userDetail changes
    // Update local storage whenever userDetail changes
    localStorage.setItem("userDetail", JSON.stringify(userDetail));
  }, [userDetail]);

  function saveDataToTable() {
    // console.log("fn called");
    // console.log(userName, dob, aadharNumber, mobileNumber, age);
    if (userName && dob && aadharNumber && mobileNumber && age) {
      const newUser = {
        user_name: userName,
        dob: dob,
        aadhar_number: aadharNumber,
        mobile_number: mobileNumber,
        age: age,
      };
      setUserDetail([...userDetail, newUser]);
      // Reset form fields or any other necessary state updates
      setUserName("");
      setDob("");
      setAadharNumber("");
      setMobileNumber("");
      setAge("");
      setAddBtn(false);
      // console.log(userDetail);
    }
  }

  function deleteUser(e) {
    const response = window.confirm("Do you really want to delete user ?");
    if (response) {
      const currentArray = [...userDetail];
      const filteredData = currentArray
        .map((data, i) => {
          if (i !== parseInt(e.target.parentElement.parentElement.id, 10)) {
            return data;
          }
          return null; // or any other value that you want to filter out
        })
        .filter(Boolean); // filter out the undefined/null values
      // console.log(filteredData);
      setUserDetail(filteredData);
      // console.log(e.target.parentElement.parentElement);
    }
  }

  function checkUserExist() {
    const currentData = [...userDetail];
    const filteredData = currentData.filter((data) => {
      // console.log( data.aadhar_number);
      // console.log(retrieveInputRef.current.value);
      return data.aadhar_number === retrieveInputRef.current.value;
    });
    // console.log(filteredData);
    setRetrieveData(filteredData);
    setIsBtnClicked(true);
  }

  return (
    <>
      <div className="Center">
        <div className="topBtnContainer">
          <button
            onClick={() => {
              setNewPersonTab(true);
              setCenterTitle("Add New Person");
              setRetrieveInfoTab(false);
            }}
            className="addNewPersonTab"
          >
            {addNewPerson}
          </button>
          <button
            onClick={() => {
              setRetrieveInfoTab(true);
              setCenterTitle("Retrieve Information");
              setNewPersonTab(false);
            }}
            className="retrieveInfoTab"
          >
            {retrieveInfo}
          </button>
        </div>
        <div className="centerWrapper">
          <p className="centerTopLabel">{centerTitle}</p>
          {newPersonTab && (
            <>
              <table className="centerTable">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Date of birth</th>
                    <th>Aadhar Number</th>
                    <th>Mobile Number</th>
                    <th>Age</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userDetail.map((data, i) => {
                    return (
                      <>
                        <tr key={keyVal++} id={i}>
                          <td>{data.user_name}</td>
                          <td>{data.dob}</td>
                          <td>{data.aadhar_number}</td>
                          <td>{data.mobile_number}</td>
                          <td>{data.age}</td>
                          <td>
                            <button onClick={deleteUser}>Delete</button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </>
          )}
          {retrieveInfoTab && (
              <div className="retireveInfoTab">
                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    ref={retrieveInputRef}
                    type="number"
                    placeholder="Search by user Aadhar Number"
                    min="100000000000"
                    max="999999999999"
                    required
                  />
                  <input onClick={checkUserExist} type="submit" value="Find" />
                </form>
                {!isBtnClicked && <div className="retrieveData">No Data</div>}
                <div className="userDataContainer">
                  {isBtnClicked &&
                    retrieveData.map((data) => (
                      <>
                        <div className="userDataCard">
                          <p>User Name : {data.user_name}</p>
                          <p>User DOB : {data.dob}</p>
                          <p>Aadhar Number : {data.aadhar_number}</p>
                          <p>Mobile Number : {data.mobile_number}</p>
                          <p>User Age : {data.age}</p>
                        </div>
                      </>
                    ))}
                </div>
              </div>
          )}

          {newPersonTab && addBtn && (
            <form
              className="addUserWrapper"
              onSubmit={(e) => e.preventDefault()}
            >
              <p>Fill below form for New Entry</p>
              <div className="addUserInputs">
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  required
                />
                <input
                  onChange={(e) => {
                    // console.log(e.target.value);
                    setDob(e.target.value);
                  }}
                  type="date"
                  required
                />
                <input
                  onChange={(e) => setAadharNumber(e.target.value)}
                  type="number"
                  placeholder="Aadhar Number"
                  min="100000000000"
                  max="999999999999"
                  required
                />
                <input
                  onChange={(e) => setMobileNumber(e.target.value)}
                  type="number"
                  placeholder="Mobile Number"
                  min="1000000000"
                  max="9999999999"
                  required
                />
                <input
                  onChange={(e) => setAge(e.target.value)}
                  type="number"
                  placeholder="Age"
                  required
                />
                <input
                  className="submitBtn"
                  type="submit"
                  value="Save"
                  onClick={saveDataToTable}
                />
              </div>
            </form>
          )}
          {newPersonTab && (
            <button className="centerAddBtn" onClick={() => setAddBtn(true)}>
              Add
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Center;
