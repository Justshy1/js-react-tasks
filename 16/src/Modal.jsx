import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
const Header = ({ children, toggle }) => (
  <div className="modal-header">
    <div className="modal-title">{children}</div>
    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
      onClick={toggle}
    ></button>
  </div>
);

const Body = ({ children }) => (
  <div className="modal-body">{children}</div>
);

const Footer = ({ children }) => (
  <div className="modal-footer">{children}</div>
);

const Modal = ({ isOpen, children }) => {
  const modalClass = cn('modal', {
    'fade show': isOpen,
  });

  const modalStyle = {
    display: isOpen ? 'block' : 'none',
  };

  return (
    <div className={modalClass} style={modalStyle} role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
// END
