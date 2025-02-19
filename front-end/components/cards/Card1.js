import React from "react";

const Card = ({ title, description, image, buttonText, onButtonClick }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200">
      {image && <img className="w-full h-48 object-cover" src={image} alt={title} />}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
        {buttonText && (
          <button
            onClick={onButtonClick}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
