import Section from "@/components/Section";
import React from "react";
import HomeSection from "./HomeSection";
import blogs, { getRecentBlogs } from "@/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { categories } from "@/data/categories";
export default function page() {
  const recents = getRecentBlogs();
  return (
    <div>
      <Section
        backgroundClassName="bg-gradient-to-b from-neutral-200 to-neutral-100"
        className=" h-[50vh] flex items-center justify-center"
      >
        <p className="text-5xl font-bold text-center">
          <span className="text-neutral-800">BEM-VINDO AO</span>
          <br />
          <span className="text-primary">BLOG BY EVANDRO</span>
        </p>
      </Section>
      <HomeSection id="Recentes" className="grid grid-cols-3" title="Recentes" subtitle="Os blogs mais recentes">
        {recents.map((blog) => (
          <BlogCard blog={blog} key={blog.title} />
        ))}
      </HomeSection>
      <HomeSection id="Blogs" className="grid grid-cols-3" title="Blogs" subtitle="Lista de todos os blogs">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.title} />
        ))}
      </HomeSection>
      <HomeSection id="Recentes" className="grid grid-cols-3" title="Categorias" subtitle="Todas as categorias">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col gap-4 items-center">
            <img className="w-full h-[300px] rounded" src={category.image}  />
            <span className="font-semibold text-zinc-800">{category.name}</span>
          </div>
))}
      </HomeSection>

    </div>
  );
}
