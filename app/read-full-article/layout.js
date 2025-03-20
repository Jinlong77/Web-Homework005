import DetailProvider from "@/components/detail/detailprovider";

export default function LayoutDetailPage({ children }) {
  return (
    <>
      <DetailProvider>{children}</DetailProvider>
    </>
  );
}
