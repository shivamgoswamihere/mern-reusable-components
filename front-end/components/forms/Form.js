import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Form = ({ fields, onSubmit }) => {
  // Dynamically generate validation schema based on fields
  const schema = yup.object(
    fields.reduce((acc, field) => {
      if (field.validation) acc[field.name] = field.validation;
      return acc;
    }, {})
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">{field.label}</label>
          <input
            type={field.type || "text"}
            {...register(field.name)}
            placeholder={field.placeholder || ""}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors[field.name] && <p className="text-red-500 text-sm mt-1">{errors[field.name]?.message}</p>}
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
