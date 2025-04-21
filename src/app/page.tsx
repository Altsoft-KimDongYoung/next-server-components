import Test from "@/components/Test";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "My App",
  description: "This is my app",
  openGraph: {
    title: "My App",
    description: "This is my app",
  },
};

export default function Home() {
  return <Test />;
}
