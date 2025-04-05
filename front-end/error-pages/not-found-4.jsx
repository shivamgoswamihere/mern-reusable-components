import React from "react";

const NotFound = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-white font-serif">
      <div className="container mx-auto text-center px-4">
        <div className="relative">
            <h3 className="text-2xl font-semibold text-gray-700">
              Looks like you're lost
            </h3>
            <p className="text-gray-600 mt-2">
              The page you are looking for is not available!
            </p>
          <div
            className="bg-cover bg-center h-80 flex items-center justify-center mx-70 "
            style={{
              backgroundImage:
                "url(https://cdn.dribbble.com/userupload/41930516/file/original-4ccfaaf514d03f6f6eb29fa6904cc68e.gif)",
            }}
          >
          </div>

          <div>
            <a
              href="/"
              className="mt-4 inline-block bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition duration-300"
            >
              Go to Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
