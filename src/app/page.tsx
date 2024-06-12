"use server"

import Banner from "@/components/Banner"
import Header from "@/components/Header"
import ProductFeed from "@/components/server/ProductFeed"
import { Suspense } from "react"
import { auth } from "../../auth"

export default async function Home() {

  return (
    <div>
      

      <main className="max-w-screen-2xl mx-auto bg-gray-200">
        {/* banner */}
        <Banner />
        <Suspense fallback={<p>Loading feed...</p>}>
          <ProductFeed />
        </Suspense>
      </main>
    </div>
  )
}
