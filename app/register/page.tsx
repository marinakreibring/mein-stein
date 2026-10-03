"use client";

import { useActionState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { submitRegisterForm } from "../actions/registerAction";

export default function RegisterFormPage() {
    const router = useRouter();

    const [state, formAction] = useActionState(
        submitRegisterForm,
        {
            success: false,
            message: "",
        }
    );

    useEffect(() => {
    if (state.success) {
        const timer = setTimeout(() => {
            router.push("/");
        }, 5000);

        return () => clearTimeout(timer);
    }
}, [state.success, router]);

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
         

       