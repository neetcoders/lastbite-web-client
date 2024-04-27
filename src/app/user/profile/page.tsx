"use client";

import React, { useContext, useState } from "react";
import { FiPlus } from "react-icons/fi";
import AddAddressModal from "@/components/BuyerProfilePage/AddAddressModal";
import { AuthContext } from "@/app/services/BuyerAuthContext";
import { useCallback } from "react";
import { IAddress } from "@/app/services/addressService";
import { addNewAddress } from "@/app/services/addressService";
import AddressCard from "@/components/BuyerProfilePage/AddressCard";
import { getAllAddress } from "@/app/services/addressService";
import { useEffect } from "react";

interface IAddressFormData {
  street: string;
  longitude: number;
  latitude: number;
}

function Page() {
  const { currentUser } = useContext(AuthContext);
  const [addresses, setAddresses] = useState<IAddress[]>([]);
  const [isAddAddressModalOpen, setIsAddAddressModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const addAddressModalHandler = async () => {
    setIsAddAddressModalOpen(!isAddAddressModalOpen);
  };

  const handleAddAddressSubmit = useCallback(async (formData: IAddressFormData) => {
    const addedAddressData = {
      street: formData.street,
      longitude: formData.longitude,
      latitude: formData.latitude,
    };
    
    await addNewAddress(addedAddressData);
    setIsAddAddressModalOpen(false);
    window.location.reload();
  }, []);

  const getAddressList = useCallback(async () => {
    setLoading(true);
    const addressList = await getAllAddress();
    setAddresses(addressList || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    getAddressList();
  }, [getAddressList]);

  return (
    <div className="flex flex-col px-[7%]">
      <AddAddressModal
        isOpen={isAddAddressModalOpen}
        onClose={addAddressModalHandler}
        onSubmit={handleAddAddressSubmit}
      />
      <h1 className="text-success-main text-h6 font-bold my-[30px]">Profile</h1>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-bodytext font-bold text-typo-main">Name</h2>
          <div className="text-caption text-typo-main border-[1px] border-typo-main rounded-[5px] p-2">
            {currentUser?.display_name}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-bodytext font-bold text-typo-main">Email</h2>
          <div className="text-caption text-typo-main border-[1px] border-typo-main rounded-[5px] p-2">
            {currentUser?.email}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-bodytext font-bold text-typo-main">Birth Date</h2>
          <div className="text-caption text-typo-main border-[1px] border-typo-main rounded-[5px] p-2">
            {currentUser?.birth_date.substring(0, 10)}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h2 className="text-bodytext font-bold text-typo-main">Address</h2>
            <div className="rounded-full bg-success-main p-2 hover:cursor-pointer hover:bg-success-hover active:bg-success-active">
              <FiPlus className="text-typo-white text-h6" onClick={addAddressModalHandler} />
            </div>
          </div>
          
          {loading ? (
            <p>Loading...</p>
          ) : (
            addresses?.map((address: IAddress) => (
              <AddressCard
                key={address.id}
                id={address.id}
                street={address.street}
                longitude={address.longitude}
                latitude={address.latitude}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
