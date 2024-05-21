import React from "react";

export const Model = ({ shouldShow, onRequest, children }) => {
  return shouldShow ? (
    <div
      className=" flex items-center justify-center  h-screen w-screen bg-black/40 overflow-auto z-[9999999999999999999]  fixed top-0 left-0  "
      onClick={onRequest}
    >
      <div
        className="w-3/4 p-5 bg-slate-300 rounded-lg"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className="text-xl" onClick={onRequest}>
          X
        </button>
        {children}
      </div>
    </div>
  ) : null;
};
