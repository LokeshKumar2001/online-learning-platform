import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-white text-gray-800">
        {/* Navbar */}
        <header className="w-full px-6 py-4 shadow-md bg-white fixed top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href={"/"}>
                <Image
                  src="/logo1.jpg"
                  alt="AI Illustration"
                  height={10}
                  width={30}
                  className=" w-20 rounded-2xl"
                />
              </Link>
              <span className="text-xl font-bold">AI Learn</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <Link href="/workspace/explore" className="hover:text-blue-600">
                Courses
              </Link>
              <Link
                href="/workspace/my-learning"
                className="hover:text-blue-600"
              >
                Features
              </Link>
              <a href="#" className="hover:text-blue-600">
                Contact
              </a>
            </nav>
            <Link
              href="/workspace"
              className="pl-2 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <UserButton className="nline-block px-6 py-2" />
          </div>
        </header>

        {/* Hero Section */}
        <main className="pt-32 pb-16 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Learn Smarter with AI
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Discover personalized learning paths, instant feedback, and
                smart tools to boost your knowledge.
              </p>
              <div className="mt-8 flex gap-4">
                <Link
                  href="/workspace"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Start Learning
                </Link>
                <Link
                  href="/workspace/explore"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-500"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/3784896.jpg"
                alt="AI Illustration"
                height={300}
                width={300}
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
