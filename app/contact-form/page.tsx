"use client";

import { useActionState } from "react";
import { submitContactForm } from "../actions/contactActions";

export default function ContactFormPage() {

    const [state, formAction] = useActionState(
        submitContactForm,
        {
            success: false,
            message: "",
        }
    );

  return (
    <main>

      <h3 className="section-title">
        Contact Us
      </h3>

      <p className="section-description">
        Do you have questions? We'll be happy to tell you more about our craft.
      </p>

      <form className="review-form" action={formAction}>

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

        <textarea
          name="message"
          placeholder="What would you like to know?"
          rows={3}
        />

        <button type="submit">
          Submit Message
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