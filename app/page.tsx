import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js Tutorial",
  description: "Learn Next.js in one hour",
};

export default function Home() {
  return (
    <main>Home

      {/* <a href="/dashborder">Go To Dashboard</a> */}
      <Link href="/dashboard">Go To Dashboard</Link>
    </main>
  );
}

