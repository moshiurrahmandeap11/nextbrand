// components/ProtectedRoute.jsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login"); // redirect to login if not authenticated
    }
  }, [status, router]);

  if (status === "loading") return <div>Loading...</div>;

  if (!session) return null; // user not logged in, already redirecting

  return <>{children}</>;
}
