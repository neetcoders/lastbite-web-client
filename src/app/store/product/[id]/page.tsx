import { useCallback, useEffect, useState } from "react";
import EditProductModal from "@/components/StoreComponents/EditProductModal";
import { IProduct, deleteProductById, editProduct, getProductDetails } from "@/app/services/productService";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ButtonDangerLarge, ButtonSuccessLarge } from "@/components/Button/Button";

export const metadata = { title: "Product Detail" };


interface IProductCategory {
  slug: string;
  display_name: string;
}

interface IProductDetails {
  display_name: string;
  description: string;
  price_before: string;
  price_after: string;
  expiration_date: string;
  stock: number;
  category: IProductCategory;
  image_url?: string;
}

interface IProductFormData {
    name: string;
    description: string;
    price_before: number;
    price_after: number;
    exp_date: string;
    // stock: number;
    category: string;
    image_id?: string;
  }

function DetailPage({ params }: any) {

  const router = useRouter()

  const [productDetails, setProductDetails] = useState<IProduct | null>(null);
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);

  const editProductModalHandler = async () => {
    setIsEditProductModalOpen(!isEditProductModalOpen);
  };

  const handleEditProductSubmit = useCallback(async (formData: IProductFormData) => {
    await editProduct(params.id, formData);
    setIsEditProductModalOpen(false);
    window.location.reload();
  }, [params.id]);

  const deleteProductHandler = useCallback( async () => {
        await deleteProductById(params.id);
        router.push('/store/product')
  }, [params.id, router]);

  const fetchProductDetails = useCallback(async () => {
    const product = await getProductDetails(params.id);
    setProductDetails(product);
  }, [params.id]);

  useEffect(() => {
    fetchProductDetails();
  }, [fetchProductDetails]);

  return (
    <div className="flex flex-col px-[7%] gap-14">
      <EditProductModal
        isOpen={isEditProductModalOpen}
        onClose={editProductModalHandler}
        onSubmit={handleEditProductSubmit}
        productDatas={productDetails}
      />

      <h1 className="text-h5 font-bold text-success-main">Product Detail</h1>
      <div className="flex flex-col gap-14">
        <Image
          src={productDetails?.image_url || "https://placehold.co/100x100"}
          width={150}
          height={150}
          alt="Product Image"
          className="w-[150px] h-[150px] mx-auto"
        />

        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col gap-2 lg:w-1/2">
            <div className="flex flex-col gap-1">
              <p className="text-title font-bold text-success-main">Name</p>
              <p className="text-title font-bold text-typo-main">
                {productDetails?.display_name}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-title font-bold text-success-main">
                Description
              </p>
              <p className="text-title font-bold text-typo-main">
                {productDetails?.description}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-title font-bold text-success-main">
                Price Before
              </p>
              <p className="text-title font-bold text-typo-main">
                Rp{productDetails?.price_before}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-title font-bold text-success-main">
                Price After
              </p>
              <p className="text-title font-bold text-typo-main">
                Rp{productDetails?.price_after}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:w-1/2">
            <div className="flex flex-col gap-1">
              <p className="text-title font-bold text-success-main">Exp Date</p>
              <p className="text-title font-bold text-typo-main">
                {productDetails?.expiration_date.substring(0, 10)}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-title font-bold text-success-main">Stock</p>
              <p className="text-title font-bold text-typo-main">
                {productDetails?.stock}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-title font-bold text-success-main">Category</p>
              <p className="text-title font-bold text-typo-main">
                {productDetails?.category.display_name}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <ButtonSuccessLarge
            text="Edit Product"
            onClick={editProductModalHandler}
          />
          <ButtonDangerLarge text="Delete Product" onClick={deleteProductHandler}/>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return <DetailPage />;
}