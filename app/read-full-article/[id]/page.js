import DetailContent from "@/components/detail/detailcontent";

export default async function DetailPage({ params }) {
  const { id } = await params;

  return (
    <>
      <DetailContent id={id} />
    </>
  );
}
