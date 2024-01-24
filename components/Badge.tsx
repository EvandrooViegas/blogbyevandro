import React from 'react'

export default function Badge({
    children
}: {
    children: React.ReactNode
}) {
  return (
    <div className="text-xs py-1 px-4 rounded-full bg-primary text-white">{children}</div>

  )
}
