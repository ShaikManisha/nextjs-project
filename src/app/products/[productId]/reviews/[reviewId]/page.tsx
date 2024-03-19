export default function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <h1>
      Review Details{params.reviewId} product Id {params.productId}
    </h1>
  );
}
