"use client";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useRef, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  street: string;
  longitude: number;
  latitude: number;
}

const AddAddressModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: FormData = {
        street: event.currentTarget.street.value,
        longitude: event.currentTarget.longitude.value,
        latitude: event.currentTarget.latitude.value,
    };
    onSubmit(formData)
    
};

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }; 
  }, [onClose]);

  return (
    isOpen && (
      <div
        className="px-8 py-8 border-[1px] border-typo-main rounded-[10px] absolute bg-typo-white w-[85vw] top-[60%] left-[50%] -translate-x-[50%] -translate-y-[50%] md:w-[40vw]"
        ref={modalRef}
      >
        <div className="flex justify-between items-center mb-[26px]">
          <p className="text-h6 font-bold text-typo-main">Add Product</p>
          <span className="text-h6 flex items-center">
            <button>
              <IoCloseOutline onClick={onClose} />
            </button>
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2.5">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="street"
                className="text-bodytext font-bold text-typo-main"
              >
                Street
              </label>
              <input
                className="border-[1px] outline-none p-2 border-typo-main rounded-[5px] text-caption text-typo-outline1"
                type="text"
                name="street"
                id="street"
                placeholder="Input name"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="longitude"
                className="text-bodytext font-bold text-typo-main"
              >
                Longitude
              </label>
              <input
                className="border-[1px] outline-none p-2 border-typo-main rounded-[5px] text-caption text-typo-outline1"
                type="text"
                name="longitude"
                id="longitude"
                placeholder="Input longitude"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="latitude"
                className="text-bodytext font-bold text-typo-main"
              >
                Latitude
              </label>
              <input
                className="border-[1px] outline-none p-2 border-typo-main rounded-[5px] text-caption text-typo-outline1"
                type="text"
                name="latitude"
                id="latitude"
                placeholder="Input latitude"
              />
            </div>

            <button
              className="px-4 py-2 text-bodytext font-bold text-typo-white bg-success-main rounded-[12px] mt-3"
              type="submit"
            >
              Add New Address
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default AddAddressModal;
