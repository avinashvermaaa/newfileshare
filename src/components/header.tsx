"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-wetransfer-dark text-white dark:bg-wetransfer-dark py-4">
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <svg width="40" height="24" viewBox="0 0 40 24" className="fill-white">
            <path d="M16.41 8.53a1.009 1.009 0 00-1.383-.386c-.513.292-.693.956-.401 1.47l8.272 14.624a1.009 1.009 0 001.383.386c.513-.292.693-.956.401-1.47L16.41 8.53zm-5.263-.134a1.009 1.009 0 011.383.386l8.272 14.625c.292.513.112 1.177-.401 1.47a1.009 1.009 0 01-1.383-.387L10.746 9.866c-.292-.513-.112-1.177.401-1.47z"></path>
            <path d="M24.715 0a12.92 12.92 0 100 25.842 12.92 12.92 0 000-25.842zm0 2.013c6.02 0 10.906 4.886 10.906 10.907 0 6.021-4.886 10.907-10.906 10.907-6.022 0-10.907-4.886-10.907-10.907 0-6.021 4.885-10.907 10.907-10.907z"></path>
          </svg>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <div className="relative group">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Features
              <svg width="12" height="12" viewBox="0 0 24 24" className="ml-1">
                <path
                  fill="currentColor"
                  d="M7 10l5 5 5-5z"
                />
              </svg>
            </Button>
          </div>
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Pricing
          </Button>
          <div className="relative group">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Use cases
              <svg width="12" height="12" viewBox="0 0 24 24" className="ml-1">
                <path
                  fill="currentColor"
                  d="M7 10l5 5 5-5z"
                />
              </svg>
            </Button>
          </div>
          <div className="relative group">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Resources
              <svg width="12" height="12" viewBox="0 0 24 24" className="ml-1">
                <path
                  fill="currentColor"
                  d="M7 10l5 5 5-5z"
                />
              </svg>
            </Button>
          </div>
        </nav>

        {/* Auth Buttons & Theme Toggle */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Log in
          </Button>
          <Button className="bg-white text-wetransfer-dark hover:bg-gray-200">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}
