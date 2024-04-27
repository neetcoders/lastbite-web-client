import { IProduct, addNewProduct, getMyProducts } from "@/app/services/productService";
import { uploadStoreImage } from "@/app/services/uploadService";
import AddProductModal from "@/components/StoreComponents/AddProductModal";
import StoreProductCard from "@/components/StoreProductCard";
import ToastMessage from "@/components/ToastMessage";
import { useCallback, useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";

interface IProductFormData {
  name: string;
  description: string;
  price_before: number;
  price_after: number;
  exp_date: string;
  stock: number;
  category: string;
  file: FileList;
}


function StoreProductPage() {
  const [storeProducts, setStoreProducts] = useState<IProduct[]>([]);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const addProductModalHandler = async () => {
    setIsAddProductModalOpen(!isAddProductModalOpen);
  };

  const handleAddProductSubmit = useCallback(async (formData: IProductFormData) => {
    let imageId = null;

    if (formData.file && formData.file[0]) {
      const upload = await uploadStoreImage(formData.file[0]);

      if (upload?.status === "success") {
        imageId = upload?.data.id;
      }
      else {
        setErrorMessage(upload?.message || "");
        setIsAddProductModalOpen(false);
        return;
      }
    }

    const addedProductData = {
      display_name: formData.name,
      description: formData.description,
      price_before: formData.price_before,
      price_after: formData.price_after,
      expiration_date: formData.exp_date,
      stock: formData.stock,
      category_slug: formData.category,
      image_id: imageId,
    };
    
    await addNewProduct(addedProductData);
    setIsAddProductModalOpen(false);
    window.location.reload();
  }, []);

  const getCurrentStoreProducts = useCallback(async () => {
    setLoading(true);
    const products = await getMyProducts();
    setStoreProducts(products || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    getCurrentStoreProducts();
  }, [getCurrentStoreProducts]);

  return (
    <div className="px-[7%] flex flex-col">
      <AddProductModal
        isOpen={isAddProductModalOpen}
        onClose={addProductModalHandler}
        onSubmit={handleAddProductSubmit}
      />

      <div className="flex justify-between my-4 items-center">
        <h1 className="text-h6 text-success-main font-bold">Products</h1>
        <button
          className="px-[18px] py-[12px] bg-success-main text-typo-white rounded-[12px] text-h6 font-bold"
          onClick={addProductModalHandler}
        >
          <FiPlus />
        </button>
      </div>

      <ToastMessage 
        onClose={() => setErrorMessage("")} 
        isOpen={errorMessage !== ""} 
        message={errorMessage}
      />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-2 gap-5 justify-center items-center lg:grid-cols-6">
          {storeProducts.map((data) => (
            <StoreProductCard
              key={data.id}
              productId={data.id}
              productImage={data.image_url}
              productName={data.display_name}
              originPrice={data.price_before}
              salePrice={data.price_after}
              stock={data.stock}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export const metadata = { title: "Product" };

export default function Page() {
  return <StoreProductPage />;
}
        