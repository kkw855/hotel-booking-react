import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { ComponentProps } from 'react'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { cn } from '@/utils/cn'

import { Label } from './label'

type CheckboxProps<T extends FieldValues> = ComponentProps<
  typeof CheckboxPrimitive.Root
> &
  UseControllerProps<T> & {
    label?: string
  }

const Checkbox = <T extends FieldValues>({
  className,
  label,
  ...props
}: CheckboxProps<T>) => {
  const { field } = useController(props)

  return (
    <Label className="flex items-end gap-2">
      <CheckboxPrimitive.Root
        className={cn(
          'peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
          className,
        )}
        checked={field.value}
        onCheckedChange={field.onChange}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn('flex items-center justify-center text-current')}
        >
          <CheckIcon className="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label}
    </Label>
  )
}
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
