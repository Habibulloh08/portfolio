import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-display font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-accent to-accent-2 text-background hover:shadow-[0_0_42px_color-mix(in_srgb,var(--accent)_45%,transparent)] hover:-translate-y-0.5',
        ghost:
          'glass text-foreground hover:border-accent-2/50 hover:bg-accent-2/10 hover:-translate-y-0.5',
        outline:
          'border border-accent/40 text-accent hover:bg-accent/10 hover:shadow-[0_0_28px_color-mix(in_srgb,var(--accent)_25%,transparent)]',
        link: 'text-accent underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-12 px-8 text-sm',
        sm: 'h-9 px-5 text-xs',
        lg: 'h-14 px-10 text-base',
        icon: 'size-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
