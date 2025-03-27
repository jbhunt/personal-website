import Head from "next/head";
import Link from "next/link";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Joshua B. Hunt | Portfolio</title>
        <meta name="description" content="Portfolio website for Joshua B. Hunt - software engineer & ML researcher." />
      </Head>

      {/* Navigation Bar */}
      <nav className="bg-gray-100 py-4 px-6 shadow-sm">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Joshua B. Hunt</h1>
          <ul className="flex space-x-4 text-sm text-gray-700">
            <li>
              <Link href="/">
                <span className="hover:underline">Home</span>
              </Link>
            </li>
            <li>
              <Link href="#projects">
                <span className="hover:underline">Projects</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="hover:underline">About</span>
              </Link>
            </li>
            <li>
              <a href="mailto:josh@example.com" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto p-6">
        <Hero />
        <Projects />

        <footer className="text-sm text-gray-500 mt-16">
          © {new Date().getFullYear()} Joshua B. Hunt • <a href="mailto:josh@example.com" className="underline">josh@example.com</a>
        </footer>
      </section>
    </main>
  );
}