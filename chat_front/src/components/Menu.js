import React from "react";

const Menu = ({ setIsRoom, setisIndividual }) => {
  return (
    <div className="flex justify-center align-middle min-w-screen min-h-screen bg-slate-50 h-1">
      <div className="flex h-96 lg:w-1/4 sm:w-2/4 mx-auto my-auto bg-white rounded-xl shadow-lg  py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="flex flex-col">
            <button
              className="mt-3 block bg-indigo-600 text-xl font-bold  text-white p-2"
              onClick={() => setIsRoom(true)}
            >
              Join Room
            </button>

            <button
              className="mt-3 block bg-indigo-600 text-xl font-bold  text-white p-2"
              onClick={() => setisIndividual(true)}
            >
              Individual Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
