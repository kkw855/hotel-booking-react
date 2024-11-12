import { forwardRef, InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { cn } from '@/utils/cn'

import { FieldWrapper, FieldWrapperPassThroughProps } from './field-wrapper'

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  FieldWrapperPassThroughProps & {
    registration: Partial<UseFormRegisterReturn>
  }

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, label, description, error, registration, ...props },
    ref,
  ) => {
    return (
      <FieldWrapper label={label} error={error} description={description}>
        <input
          type={type}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className,
          )}
          ref={ref}
          {...registration}
          {...props}
        />
      </FieldWrapper>
    )
  },
)
Input.displayName = 'Input'

export { Input }
