import React from "react";
import { ToastContainer } from "react-toastify";
import type { IToastProps } from "../../types";

export const Toast: React.FC<IToastProps> = ({ theme }) => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
    />
  );
};
