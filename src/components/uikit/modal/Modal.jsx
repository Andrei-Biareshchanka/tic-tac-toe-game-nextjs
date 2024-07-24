import clsx from "clsx";
import CloseIcon from "@mui/icons-material/Close";
import { createPortal } from "react-dom";

/**
 *
 * @param {{
 *    width: 'md' | 'full',
 *    className: string;
 *    isOpen: boolean,
 *    onClose: Function,
 * }}
 */

export default function Modal({
  width = "md",
  className,
  children,
  isOpen = false,
  onClose,
}) {
  const handleClick = (e) => {
    const inModal = e.target.closest('[data-id="modal"]');
    if (inModal) return;
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  const modal = (
    <div
      onClick={handleClick}
      className={clsx(
        "fixed inset-0 bg-slate-900/60 backdrop-blur pt-10 pb-10 ",
        "overflow-Y-auto",
        className,
      )}
    >
      <div
        data-id="modal"
        className={clsx(
          "bg-white rounded-lg min-h-[320px] mx-auto relative",
          "flex flex-col",
          {
            md: "max-w-[640px] w-full",
            full: "mx-5",
          }[width],
        )}
      >
        <button
          onClick={onClose}
          className="
            w-6 h-6 rounded flex items-center justify-center 
            bg-white/10 hover:bg-white/40 transition-colors
            absolute top-0 left-[calc(100%+12px)]"
        >
          <CloseIcon fontSize="medium" className="text-white" />
        </button>
        {children}
      </div>
    </div>
  );

  return createPortal(modal, document.getElementById("modals"));
}

Modal.Header = function ModalHeader({ children, className }) {
  return (
    <div className={clsx(className, "px-6 pt-6 pb-4 text-2xl")}>{children}</div>
  );
};
Modal.Body = function ModalBody({ children, className }) {
  return <div className={clsx(className, "px-6")}>{children}</div>;
};
Modal.Footer = function ModalFooter({ children, className }) {
  return (
    <div className={clsx(className, "mt-auto p-6 flex gap-4 justify-end")}>
      {children}
    </div>
  );
};
