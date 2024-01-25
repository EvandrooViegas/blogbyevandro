import { getBlog } from "@/data";
import React from "react";
import { Button } from "@/components/ui/button";
export async function generateMetadata({
  params,
}: {
  params: { blog: string };
}) {
  const b = params.blog;
  const blog = getBlog(b);
  return {
    title: blog?.title,
    description: blog?.body[0].text,
  };
}

export default function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { blog: string };
}) {
  const blog = getBlog(params.blog);
  const blogLink = blog?.links[0];
  return (
    <div className=" md:grid md:grid-cols-[3fr_1fr]">
      <div>{children}</div>
      <div className="relative">
        <div className="sticky top-20 inset-x-0">
          <div className="space-y-4 p-6 shadow bg-zinc-100">
            <span className="font-semibold text-2xl">{blogLink?.name}</span>
            <img className="w-full aspect-video object-cover object-center" src={blogLink?.image} />
              <Button asChild>
            <a href={blogLink?.link} target="_blank">
            Comprar Agora!
            </a>
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
