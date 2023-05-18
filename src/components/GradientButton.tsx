import { ReactNode } from 'react'

interface GradientButtonProps {
  children: ReactNode;
}

export default function GradientButton({ children }: GradientButtonProps) {
  return (
    <button className="mt-9 w-full rounded-2xl bg-gradient py-3 text-xl font-bold leading-tight text-white transition-[filter] duration-200 hover:brightness-110 sm:text-2xl">
      {children}
    </button>
  )
}
