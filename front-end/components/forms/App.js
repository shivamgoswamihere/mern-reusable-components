import React from "react";
import Form from "./Form";
import * as yup from "yup";

const App = () => {
  const fields = [
    { name: "name", label: "Full Name", placeholder: "Enter your name", validation: yup.string().required("Name is required") },
    { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email", validation: yup.string().email("Invalid email").required("Email is required") },
    { name: "password", label: "Password", type: "password", placeholder: "Enter your password", validation: yup.string().min(6, "Password must be at least 6 characters").required("Password is required") },
  ];

  const handleFormSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Form fields={fields} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
