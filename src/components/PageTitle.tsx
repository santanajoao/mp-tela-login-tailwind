import { ReactNode } from 'react'

interface PageTitleProps {
  children: ReactNode;
}

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className="text-center text-4xl font-bold leading-snug text-gray-200 sm:text-5xl">
      {children}
    </h1>
  )
}
