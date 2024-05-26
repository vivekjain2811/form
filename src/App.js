import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { isVisible } from "@testing-library/user-event/dist/utils";

function App() {
  // function changeHandler(event) {
  //   console.log(event.target.value);
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    comments: "",
    isVisibl: true,
    mode: "",
    favcar: "",
  });
  console.log(formdata);
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setformdata((prevformdata) => {
      return { ...prevformdata, [name]: type === "checkbox" ? checked : value };
    });
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log(formdata);
  }
  return (
    // const [formdata,setformdata]=useState({firstname:"",lastname:""});
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="forstname"
          onChange={changeHandler}
          name="firstname"
          value={formdata.firstname}
        />
        <br />

        <input
          type="text"
          placeholder="enter your email here"
          onChange={changeHandler}
          name="lastname"
          value={formdata.lastname}
        />
        <br />
        <input
          type="email"
          placeholder="email"
          onChange={changeHandler}
          name="email"
          value={formdata.email}
        />
        <br />
        <br />
        <textarea
          placeholder="enter your comments here"
          onChange={changeHandler}
          name="comments"
          value={formdata.comments}
        ></textarea>
        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisibl"
          id="isVisibl"
          checked={formdata.isVisibl}
        />
        <label htmlFor="isVisibl">am i visible?</label>
        <br />
        <fieldset>
          <legend>vivek</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="online-mode"
            id="online-mode"
            checked={formdata.mode === "online-mode"}
          ></input>
          <br />
          <label htmlFor="online-mode">online mode</label>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="offline-mode"
            id="offline-mode"
            checked={formdata.mode === "offline-mode"}
          ></input>
          <label htmlFor="offline-mode">offline mode</label>
        </fieldset>
        <br />
        {/* drowdown mwnu */}

        <select
          onChange={changeHandler}
          name="favcar"
          id="favcar"
          value={formdata.favcar}
        >
          <option value="bmw">bmw</option>
          <option value="thar">z</option>
          <option value="x">z</option>
          <option value="y">z</option>
          <option value="z">z</option>
        </select>
        <label htmlFor="favcar"> tell me your fav car</label>
        <br />
        <br />
        {/* <input type="submit" value="submit"></input> */}
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
