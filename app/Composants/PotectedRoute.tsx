"use client"
import { useRouter } from 'next/navigation'
export default function ProtectedRoute({children}:{children:React.ReactNode})
{ const router = useRouter();
    if(!localStorage.getItem("token"))
    {
        router.push("/redirection");
    }
    return children;
}