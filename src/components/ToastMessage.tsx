import clsxm from "@/lib/clsxm";
import { IoClose } from "react-icons/io5";

interface ToastMessageProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export default function ToastMessage({ isOpen, onClose, message }: ToastMessageProps) {

  return (
    <div className={clsxm(
      "w-full bg-danger-light flex justify-between py-2 px-4 mb-4 rounded",
      { "hidden": !isOpen }
    )}>
      <span>{message}</span>
      <button onClick={onClose}><IoClose/></button>
    </div>
  );
}