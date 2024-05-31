import React, { useState } from "react";

interface ToastProps {
  message: string;
  type: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const [showToast, setShowToast] = useState(true);

  const handleClose = () => {
    setShowToast(false);
    onClose();
  };

  return (
    <>
      {showToast && (
        <div className={`toast ${type}`} onClick={handleClose}>
          <span>{message}</span>
          <button className="close-button" onClick={handleClose}>x</button>
        </div>
      )}
    </>
  );
};

export default Toast;
