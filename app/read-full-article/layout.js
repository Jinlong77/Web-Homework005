import DetailProvider from "@/components/ui/detailprovider";



export default function LayoutDetailPage({children}) {
  return (
    <>
      <DetailProvider>
        {children}
      </DetailProvider>
    </>
  );
}
