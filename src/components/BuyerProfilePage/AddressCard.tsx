import { useState } from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FiTrash2 } from "react-icons/fi";
import { editAddress } from "@/app/services/addressService";
import { useCallback } from "react";
import EditAddressModal from "./EditAddressModal";
import { IAddress } from "@/app/services/addressService";
import { getMyAddress } from "@/app/services/addressService";
import { useEffect } from "react";
import { deleteAddressById } from "@/app/services/addressService";

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

  const editAddressModalHandler = async () => {
    setIsEditAddressModalOpen(!isEditAddressModalOpen);
  };

  const handleEditAddressSubmit = useCallback(async (formData: IAddressFormData) => {
    await editAddress(id, formData);
    setIsEditAddressModalOpen(false);
    window.location.reload();
  }, [id]);

  const fetchaddressDetails = useCallback(async () => {
    const product = await getMyAddress();
    setAddressDetails(product);
  }, [id]);

  const deleteAddressHandler = useCallback( async () => {
    await deleteAddressById(id);
    window.location.reload();
}, [id]);

  useEffect(() => {
    fetchaddressDetails();
  }, [fetchaddressDetails]);

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