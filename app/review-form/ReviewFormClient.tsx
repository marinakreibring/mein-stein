"use client";

import { useActionState } from "react";
import { submitReviewForm } from "../actions/reviewActions";
import { useSearchParams } from "next/navigation";

export default function ReviewFormClient() {

  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");

  const [state, formAction] = useActionState(
    submitReviewForm,
    {
      success: false,
      message: "",
    }
  );

  return (
    <main>

      <h3 className="section-title">
        Share Your Feedback
      </h3>

      <p className="section-description">
        Leave a review for a product you've purchased. <br />Your feedback helps our artisans grow and improve their craft.
      </p>

      <form className="seller-form" action={formAction}>

        <input
          type="hidden"
          name="productId"
          value={productId ?? ""}
        />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <p className="section-description">
          Your Rating
        </p>
        <select name="rating">            
            <option value="5">5 Stars ⭐⭐⭐⭐⭐</option>
            <option value="4">4 Stars ⭐⭐⭐⭐</option>
            <option value="3">3 Stars ⭐⭐⭐</option>
            <option value="2">2 Stars ⭐⭐</option>
            <option value="1">1 Star ⭐</option>
        </select>

        <textarea
          name="review"
          placeholder="Write your review here"
          rows={3}
        />

        <button type="submit">
          Submit Review
        </button>

        {state?.message && (
            <p className="message">
                {state.message}
            </p>
        )}

      </form>

    </main>
  );
}