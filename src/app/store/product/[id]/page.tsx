import DetailPage from "./page.client";

export const metadata = { title: "Product Detail" };


export default function Page({ params }: any) {
  return <DetailPage params={params} />;
}