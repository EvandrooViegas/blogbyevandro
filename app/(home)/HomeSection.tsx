import { HTMLAttributes } from "react";


export default function HomeSection({
  children,
  backgroundClassName,
  title,
  subtitle,
  description,
  className,
  ...rest
}: {
  children?: React.ReactNode,
  backgroundClassName?: string,
  title?: string,
  description?: string,
  subtitle?: string
} & HTMLAttributes<HTMLElement>) {
  const hasText = title || description || subtitle
  return (
    <section {...rest} className={`${backgroundClassName} p-12 `}>
      <div className={` max-app-width mx-auto  h-full `}>
        <div className={`flex flex-col  ${hasText ? 'gap-12' : ''}`}>
          <div className="flex gap-4 flex-col text-center ">
            
            <div className='text-xs uppercase'>{title}</div>
            <div className='text-xl font-bold'>{subtitle}</div>
            <div className='text-neutral-800'>{description}</div>
          </div>
          <div className={className}>
            {children}

          </div>
        </div>
      </div>
    </section>
  );
}