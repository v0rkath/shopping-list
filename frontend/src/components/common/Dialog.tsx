import { forwardRef } from "react";

type DialogProps = {
  children: React.ReactNode;
  toggleDialog: () => void;
};

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ children, toggleDialog }, ref) => {
    return (
      <dialog
        className="rounded-xl bg-neutral-100 p-6"
        ref={ref}
        onClick={(event) => {
          event.stopPropagation();
          if (event.currentTarget === event.target) {
            toggleDialog();
          }
        }}
      >
        {children}
      </dialog>
    );
  },
);
