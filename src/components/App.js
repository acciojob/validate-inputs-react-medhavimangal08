import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  let aplhabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let aplhnumeric =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState({
    nameerror: "",
    emailerror: "",
    addresserror: "",
    numbererror: "",
  });

  function validateName(name) {
    for (let n of name) {
      if (!aplhabets.includes(n)) {
        return "Name should contain only letters";
      }
    }
    return ""; // No error
  }

  function validateAddress(address) {
    for (let a of address) {
      if (!aplhnumeric.includes(a)) {
        return "Address should not contain special characters";
      }
    }
    return ""; // No error
  }

  function validateEmail(email) {
    if (!email.includes(".com") || !email.includes("@")) {
      return "Email should contain @ and .com";
    }
    return ""; // No error
  }

  function validatePhone(number) {
    if (number.length !== 10) {
      return "Mobile number should be exactly 10 characters";
    }
    return ""; // No error
  }

  function handleClick() {
    const nameError = validateName(name);
    const addressError = validateAddress(address);
    const emailError = validateEmail(email);
    const numberError = validatePhone(number);

    // Update all errors at once
    setError({
      nameerror: nameError,
      addresserror: addressError,
      emailerror: emailError,
      numbererror: numberError,
    });
  }

  return (
    <div>
      <label>Name</label>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />
      {error.nameerror && (
        <p className="errorMessage" style={{ color: "red" }}>
          {error.nameerror}
        </p>
      )}
      <br />

      <label>Address</label>
      <input type="text" onChange={(e) => setAddress(e.target.value)} />
      <br />
      {error.addresserror && (
        <p className="errorMessage" style={{ color: "red" }}>
          {error.addresserror}
        </p>
      )}
      <br />

      <label>Email</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      {error.emailerror && (
        <p className="errorMessage" style={{ color: "red" }}>
          {error.emailerror}
        </p>
      )}
      <br />

      <label>Mobile</label>
      <input type="tel" onChange={(e) => setNumber(e.target.value)} />
      <br />
      {error.numbererror && (
        <p className="errorMessage" style={{ color: "red" }}>
          {error.numbererror}
        </p>
      )}
      <br />

      <button type="submit" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default App;
