import React from "react";
import {ToastContainer} from 'react-toastify'

function Notification() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="colored"
      />
    </>
  );
}

export default Notification;
