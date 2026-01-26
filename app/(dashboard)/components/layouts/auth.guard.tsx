"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AuthGuard = ({children}: {children: React.ReactNode}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/admin/login");
        } else {
            setIsLoading(false)
        }
    }, [router])
}