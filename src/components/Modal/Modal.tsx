import { HTMLAttributes } from "react";
import { createPortal } from "react-dom";
import Card from "../Card/Card";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  backdropDismiss?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({
  open = false,
  backdropDismiss = true,
  onClose,
  children,
  ...props
}: ModalProps) {
  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="fixed inset-0 z-10 flex items-center justify-center bg-black/10"
            onClick={backdropDismiss ? onClose : undefined}
          >
            <div
              className="z-20"
              aria-modal={open}
              role="dialog"
              onClick={(e) => e.stopPropagation()}
              {...props}
            >
              {children}
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.getElementById("root") as HTMLElement,
  );
}

export default Modal;
