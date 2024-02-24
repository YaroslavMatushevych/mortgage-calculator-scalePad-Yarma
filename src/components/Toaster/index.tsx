'use client';

import React from 'react';
import {
  Bounce,
  toast,
  ToastContainer,
  ToastContainerProps,
} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const invokeToastNotification = (error: string) => {
  return toast.error(error, {
    position: 'top-right',
    autoClose: 4500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    transition: Bounce,
  });
};

const ToastContainerComponent: React.FC<ToastContainerProps> = ({
  position = 'top-right',
  autoClose = 5000,
  hideProgressBar = false,
  newestOnTop = false,
  closeOnClick = true,
  rtl = false,
  pauseOnFocusLoss = true,
  draggable = true,
  pauseOnHover = true,
  transition: Bounce,
}) => {
  return (
    <ToastContainer
      position={position}
      autoClose={autoClose}
      hideProgressBar={hideProgressBar}
      newestOnTop={newestOnTop}
      closeOnClick={closeOnClick}
      rtl={rtl}
      pauseOnFocusLoss={pauseOnFocusLoss}
      draggable={draggable}
      pauseOnHover={pauseOnHover}
      transition={Bounce}
    />
  );
};

export default ToastContainerComponent;
