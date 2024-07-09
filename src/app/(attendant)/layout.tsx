import { Navbar } from "@/components/layouts/Navbar";
import React from "react";

export default function layout({children} : {children: React.ReactNode}) {
  return (
    <div>
        <header>
            <Navbar />
        </header>
        <main className="max-w-screen-xl p-4 m-auto">
            {children}
        </main>
        <footer></footer>
    </div>
  )
}
