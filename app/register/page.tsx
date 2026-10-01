"use client";

import { useActionState } from "react";
import { submitRegisterForm } from "../actions/registerAction";

export default function RegisterFormPage() {

    const [state, formAction] = useActionState(
        submitRegisterForm,
        {
            success: false,
            message: "",
        }
    );

    return (
        <main>

            <h2>
                Register
            </h2>

            <p className="section-description">
                Please fill out the form below to create an account.
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

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                />

                <button type="submit">
                    Register
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
         

       