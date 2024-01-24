import React from "react";

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
