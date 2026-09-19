"use client";

import { useActionState } from "react";
import { submitSellerForm } from "../actions/sellerActions";

export default function SellerFormPage() {

    const [state, formAction] = useActionState(
        submitSellerForm,
        {
            success: false,
            message: "",
        }
    );

  return (
    <main>

      <h3 className="section-title">
        Join Our Artisan Community
      </h3>

      <p className="section-description">
        Are you a passionate artisan or maker? We'd love to learn more about you and your craft.
      </p>

      <form className="seller-form" action={formAction}>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
        />

        <input
          type="text"
          name="craft"
          placeholder="Craft Type"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
        />

        <textarea
          name="bio"
          placeholder="Tell us about yourself"
          rows={3}
        />

        <button type="submit">
          Submit Application
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