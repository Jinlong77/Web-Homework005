
import DetailContent from "@/components/ui/detailcontent";

export default async function DetailPage({ params }) {

    const { id } = await params;

  return (
    <>
        <DetailContent id={id}/>
    </>
  );
}
