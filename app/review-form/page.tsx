import { Suspense } from "react";
import ReviewFormClient from "./ReviewFormClient";

export default function ReviewFormPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ReviewFormClient />
    </Suspense>
  );
}