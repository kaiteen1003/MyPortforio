import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#434242] text-white p-4 text-center">
        <div className="flex justify-between items-center gap-4 mb-4 w-full">
          <img
            src="images//HeaderIcon.png"
            alt="Logo 1"
            className="h-15 w-auto"
          />
          <div className="flex-1 flex justify-center">
            <img
              src="images//TeckStack.png"
              alt="Logo 2"
              className="h-15 w-auto mr-8"
            />
          </div>
          <div className="h-15 w-15"></div>
        </div>

        <p className="text-sm"> Copyright © 2025 my portfolio</p>
      </footer>
    </div>
  );
};

export default Footer;
