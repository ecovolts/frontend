import { ButtonHTMLAttributes } from 'react'
import Link from 'next/link'

import { cn } from '@/utils/helpers'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'Button' | 'Link'
  href?: string
  textSize?: string
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'lg' | 'md' | 'sm'
}

export function Button({
  as = 'Button',
  children,
  href = '',
  size = 'md',
  textSize,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <>
      {as === 'Button' ? (
        <button
          className={cn(
            `gap-2 rounded-md duration-150 text-${textSize} group
             text-white transition-colors ease-linear
             disabled:border-skin-button-muted disabled:bg-gray-100/50
             disabled:text-gray-300/50`,
            {
              'flex w-full items-center justify-center border border-skin-fill bg-skin-fill p-2 hover:border-skin-fill-hover hover:bg-skin-fill-hover':
                variant === 'primary',
              'flex w-full items-center justify-center border border-skin-button-muted bg-skin-button-accent p-2 text-gray-800 shadow-md hover:bg-skin-button-accent-hover':
                variant === 'secondary',
              'text-gray-600': variant === 'tertiary',
              'p-1': size === 'sm',
              'p-2': size === 'md',
              'p-3': size === 'lg',
            },
          )}
          {...props}
        >
          {children}
        </button>
      ) : (
        <Link
          href={href}
          className={cn(
            `gap-2 rounded-md duration-150 text-${textSize} group
             text-white transition-colors ease-linear
             disabled:border-skin-button-muted disabled:bg-gray-100/50
             disabled:text-gray-300/50`,
            {
              'flex w-full items-center justify-center border border-skin-fill bg-skin-fill hover:border-skin-fill hover:bg-skin-fill-hover':
                variant === 'primary',
              'flex w-full items-center justify-center border border-skin-button-muted bg-skin-button-accent text-gray-800 shadow-md hover:bg-skin-button-accent-hover':
                variant === 'secondary',
              'text-skin-base': variant === 'tertiary',
              'p-1': size === 'sm',
              'p-2': size === 'md',
              'p-3': size === 'lg',
            },
          )}
        >
          {children}
        </Link>
      )}
    </>
  )
}
