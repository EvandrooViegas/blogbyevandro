import { getBlog } from "@/data";
import React from "react";

export async function generateMetadata({ params }: { params: { blog: string } }) {
  const b = params.blog
  const blog = getBlog(b)
  return {
    title: blog?.title,
    description: blog?.body[0].text
  }
}

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[3fr_1fr]">
      <div>{children}</div>
      <div className="relative">
        <div className="sticky top-20 inset-x-0 h-64 "></div>
      </div>
    </div>
  );
}
