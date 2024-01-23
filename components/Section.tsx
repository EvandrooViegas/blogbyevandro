
import React from "react";
type Props = {
  children: React.ReactNode;
  backgroundClassName?: string
} & React.HTMLAttributes<HTMLElement>;

export default function Section(props: Props) {
  const { children, className, backgroundClassName } = props;

  return (
    <section  className={`${backgroundClassName}`}>
      <div className={`${className} max-app-width mx-auto`}>
        {children}
      </div>
    </section>
   
  );
}