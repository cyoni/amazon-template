"use server";

import Banner from "@/components/Banner";
import Header from "@/components/Header";
import ProductFeed from "@/components/server/ProductFeed";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div>
      <Header />

      <main className="max-w-screen-2xl mx-auto bg-gray-200">
        {/* banner */}
        <Banner />
        <Suspense fallback={<p>Loading feed...</p>}>
          <ProductFeed />
        </Suspense>
      </main>
    </div>
  );
}
