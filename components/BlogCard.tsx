import { iBlog } from '@/types/iBlog'
import Link from 'next/link'
import React from 'react'
import Badge from './Badge'

type Props = {
    blog: iBlog
}
export default function BlogCard(props: Props) {
    const { blog } = props
  return (
    <Link href={blog.blog} className="flex flex-col gap-2 border transitiona-all cursor-pointer border-neutral-200 hover:border-neutral-300 p-5 rounded shadow" key={blog.title}>
    <img src={blog.banner} className="aspect-video object-cover rounded" />
  <div className="flex justify-between items-center">
    <Badge>{blog.category?.name}</Badge>
  <span className="text-xs">{blog.date}</span>

  </div>
    <span className="text-2xl font-semibold text-neutral-700">{blog.title}</span>
  
  </Link>
  )
}
