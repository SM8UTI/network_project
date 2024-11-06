"use client";
import React, { useState } from "react";
import ToggleNav from "../toggle-nav";
import CreateAccountForm from "./create-account-form";
import RegisterAccountForm from "./register-account-form";

const CreateAccountModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const tabs = ["Create Account", "Registered Account"];

  const [activeTab, setActiveTab] = useState("Create Account");

  const tabsContent = {
    "Create Account": <CreateAccountForm onClose={onClose} />,
    "Registered Account": <RegisterAccountForm onClose={onClose}/>,
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-[#303531] p-8 rounded-lg relative shadow-lg">
        <button
          onClick={onClose}
          className=" absolute top-3 right-3  hover:text-gray-800"
        >
          &times;
        </button>
        <ToggleNav
          className="h-12 w-[50vw]"
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {tabsContent[activeTab]}
      </div>
    </div>
  );
};

export default CreateAccountModal;