import { ReactNode } from 'react'

interface CustomLinkProps {
  children: ReactNode;
  className?: string;
  href: string;
}

export default function CustomLink({
  children,
  className,
  href,
}: CustomLinkProps) {
  return (
    <a
      href={href}
      className={`w-fit text-sm text-gray-400 underline hover:text-gray-300 ${className}`}
    >
      {children}
    </a>
  )
}
