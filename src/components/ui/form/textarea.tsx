import { forwardRef, TextareaHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { cn } from '@/utils/cn'

import { FieldWrapper, FieldWrapperPassThroughProps } from './field-wrapper'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  FieldWrapperPassThroughProps & {
    registration: Partial<UseFormRegisterReturn>
  }

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, description, error, registration, ...props }, ref) => {
    return (
      <FieldWrapper label={label} description={description} error={error}>
        <textarea
          className={cn(
            'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
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
Textarea.displayName = 'Textarea'

export { Textarea }
