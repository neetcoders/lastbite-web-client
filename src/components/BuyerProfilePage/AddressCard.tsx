import { useState } from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FiTrash2 } from "react-icons/fi";
import { editAddress } from "@/app/services/addressService";
import { useCallback } from "react";
import EditAddressModal from "./EditAddressModal";
import { IAddress } from "@/app/services/addressService";
import { getAllAddress, getUserActiveAddress } from "@/app/services/addressService";
import { useEffect } from "react";
import { deleteAddressById } from "@/app/services/addressService";
import { setUserActiveAddress } from "@/app/services/addressService";

interface IAddressDetails {
  street: string;
  longitude: number;
  latitude: number;
}

interface IAddressCardProps {
  id: string;
  street: string;
  longitude: number;
  latitude: number;
}

interface IAddressFormData {
  street: string;
  longitude: number;
  latitude: number;
}

export default function AddressCard(props: IAddressCardProps) {
  const { id, street, longitude, latitude } = props;
  const [isEditAddressModalOpen, setIsEditAddressModalOpen] = useState(false);
  const [addressDetails, setAddressDetails] = useState<IAddress[] | null | undefined>([]);
  const [isActiveAddress, setIsActiveAddress] = useState(false);

  const editAddressModalHandler = async () => {
    setIsEditAddressModalOpen(!isEditAddressModalOpen);
  };

  const handleEditAddressSubmit = useCallback(async (formData: IAddressFormData) => {
    await editAddress(id, formData);
    setIsEditAddressModalOpen(false);
    window.location.reload();
  }, [id]);

  const fetchaddressDetails = useCallback(async () => {
    const product = await getAllAddress();
    setAddressDetails(product);
  }, [id]);

  const deleteAddressHandler = useCallback( async () => {
    await deleteAddressById(id);
    window.location.reload();
  }, [id]);

  const setActiveAddressHandler = useCallback(async () => {
    try {
      const selectedAddress = addressDetails?.find(address => address.id === id);
      if (selectedAddress) {
        await setUserActiveAddress(selectedAddress.id);
        fetchaddressDetails();
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  }, [addressDetails, fetchaddressDetails, id]);
  
  const fetchActiveAddress = async () => {
    try {
      const activeAddress = await getUserActiveAddress();
      setIsActiveAddress(activeAddress?.id === id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchaddressDetails();
    fetchActiveAddress();
  }, [id]);

  return (
    <div className="flex flex-col gap-2">
      <EditAddressModal
        isOpen={isEditAddressModalOpen}
        onClose={editAddressModalHandler}
        onSubmit={handleEditAddressSubmit}
      />
      <div className="flex justify-between text-caption text-typo-main border-[1px] border-typo-main rounded-[5px] p-2">
        <div className="flex flex-col justify-center">
          <p>{street}</p>
          <p>{longitude}</p>
          <p>{latitude}</p>
          {isActiveAddress ?
            <p className='text-warning-main underline underline-offset-4 font-semibold'>
            This address is the active address
            </p>
            :
            <p onClick={setActiveAddressHandler} className='hover:cursor-pointer text-success-main font-semibold'>
            Set this address to active address
          </p>
          }
        </div>

        <div className="flex flex-col justify-center gap-1">
          <div className="text-h6 text-typo-main hover:cursor-pointer" onClick={editAddressModalHandler}>
            <HiOutlinePencilAlt />
          </div>
          <button className="text-h6 text-typo-main">
            <FiTrash2 onClick={deleteAddressHandler}/>
          </button>
        </div>
      </div>
    </div>
  )
}