'use client'

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'

const Tabs = TabsPrimitive.Root

const TabList = forwardRef<
  ElementRef<typeof TabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      `flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground`,
      className,
    )}
    {...props}
  />
))

TabList.displayName = TabsPrimitive.List.displayName

const TabButton = forwardRef<
  ElementRef<typeof TabsPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      `flex items-center justify-center whitespace-nowrap
      rounded-sm text-sm font-medium ring-offset-background transition-all
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500
      focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,
      className,
    )}
    {...props}
  />
))

TabButton.displayName = TabsPrimitive.Trigger.displayName

const TabContent = forwardRef<
  ElementRef<typeof TabsPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      `mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-ring focus-visible:ring-offset-2`,
      className,
    )}
    {...props}
  />
))

TabContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabList, TabButton, TabContent }
