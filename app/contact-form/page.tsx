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

      <h2>
        Contact Us
      </h2>

      <p className="section-description">
        Do you have questions or want to order something special? We'll be happy to help.
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
          placeholder="Write your message here..."
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