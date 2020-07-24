// import React from 'react';
import {  toast } from 'react-toastify';

const ToastEmitter = () => (
  toast.success('🦄 Wow so easy!', {
    position: "top-center",
    autoClose: 15000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    })
)
export default ToastEmitter;
