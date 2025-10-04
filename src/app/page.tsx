"use client";

import { Suspense } from "react";
import Header from "@/components/header";
import FileDropZone from "@/components/file-drop-zone";
import dynamic from "next/dynamic";

const TermsDialog = dynamic(() => import("@/components/terms-dialog"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-wetransfer-dark relative overflow-hidden transition-colors">
      <Header />

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-orange-300/20 to-transparent rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-300/20 to-transparent rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-4 pt-28 pb-16">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-center text-gray-900 dark:text-white mb-12">
            <h1 className="text-4xl md:text-5xl font-bold wetransfer-heading mb-4">
              Send files with ease
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Share large files with anyone, no account needed. Free to use, quick and secure.
            </p>
          </div>

          <Suspense fallback={<div className="w-full max-w-md h-[500px] bg-gray-100 dark:bg-white/10 animate-pulse rounded-xl"></div>}>
            <FileDropZone />
          </Suspense>

          <div className="mt-16 text-center text-gray-600 dark:text-white/70 text-sm max-w-2xl">
            <p>
              By using our services, you agree to our <a href="#" className="text-wetransfer-blue underline">Terms of Service</a> and <a href="#" className="text-wetransfer-blue underline">Privacy Policy</a>.
              All transfers are encrypted and files are automatically deleted after 7 days.
            </p>
          </div>
        </div>
      </div>

      <TermsDialog />
    </main>
  );
}
