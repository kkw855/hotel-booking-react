import { ReactNode } from 'react'

import { cn } from '@/utils/cn'

type DescriptionProps = {
  className?: string
  children?: ReactNode
}

export const Description = ({ className, children }: DescriptionProps) => {
  if (!children) return null

  return (
    <div className={cn('text-[0.8rem] text-muted-foreground', className)}>
      {children}
    </div>
  )
}
