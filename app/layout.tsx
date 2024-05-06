"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import MyContext from "@/app/Composants/MyContext"
import { useState} from "react";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children,}: Readonly<{children: React.ReactNode}>) 
{
 const [user,setUser] = useState<object>()
  return (
    <MyContext.Provider value={{user,setUser}}>
        <html lang="en">
          <body className={inter.className}>{children}</body>
       </html>
    </MyContext.Provider>
  );
}
