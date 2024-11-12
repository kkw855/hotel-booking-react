import { ReactNode } from 'react'
import { type FieldError } from 'react-hook-form'

import { cn } from '@/utils/cn'

import { Description } from './description'
import { Error } from './error'
import { Label } from './label'

type FieldWrapperProps = {
  label?: string
  description?: string
  error?: FieldError
  className?: string
  children: ReactNode
}

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'className' | 'children'
>

export const FieldWrapper = ({
  label,
  description,
  error,
  children,
}: FieldWrapperProps) => {
  return (
    <div>
      <Label>
        <span className={cn({ 'text-destructive': error })}>{label}</span>
        <Description className="mt-2">{description}</Description>
        <div className="mt-1">{children}</div>
      </Label>
      <Error errorMessage={error?.message} />
    </div>
  )
}
