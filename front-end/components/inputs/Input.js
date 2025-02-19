import React from "react";

const Input = ({ label, type = "text", name, value, onChange, placeholder, error }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-gray-700 font-semibold mb-2">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-3 border rounded-lg focus:outline-none ${
          error ? "border-red-500" : "border-gray-300"
        } focus:ring-2 focus:ring-blue-500`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
