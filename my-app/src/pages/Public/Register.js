import React, { useState } from "react";
import Form1 from "./Register/Form1";
import Form2 from "./Register/Form2";
import Form3 from "./Register/Form3";

const Register = () => {
  const [index, setIndex] = useState(1);
  const [values, setValues] = useState();

  const forms = [
    <Form1 setIndex={setIndex} />,
    <Form2 setIndex={setIndex} />,
    <Form3 setIndex={setIndex} />,
  ];

  return <div>{forms[index]}</div>;
};

export default Register;
