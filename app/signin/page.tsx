"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { submitAccountForm } from "../actions/accountActions";

export default function AccountPage() {
    const router = useRouter();

    const [state, formAction] = useActionState(
        submitAccountForm,
        {
            success: false,
            message: "",
        }
    );

    useEffect(() => {
        if (state.success) {
            const timer = setTimeout(() => {
                router.push("/");
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [state.success, router]);

    return (
        <main>

            <h2>
                Sign In
            </h2>      

            <form className="review-form" action={formAction}>
            
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
                    Sign In
                </button>

                {state?.message && (
                    <p className="message">
                        {state.message}
                    </p>
                )}
            </form>

            <p className="section-description">
                You don't have an account?            
            </p>
            <h3 className="create-account-link">
                <Link href="/register">Create one here</Link>
            </h3>
            <br />

        </main>
    );
}