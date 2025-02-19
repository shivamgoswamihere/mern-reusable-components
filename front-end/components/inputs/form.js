import React, { useState } from "react";
import Input from "./inputs/Input";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form Submitted:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <Input label="Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} />
      <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} error={errors.email} />
      <Input label="Password" type="password" name="password" value={formData.password} onChange={handleChange} error={errors.password} />

      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
        Submit
      </button>
    </form>
  );
};

export default Form;
