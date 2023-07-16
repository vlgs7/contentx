'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import { buttonVariants } from './ui/button'

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-1 text-sm font-medium">
        <Link
          href="/"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/' ? 'text-foreground' : 'text-foreground/60',
            buttonVariants({ variant: 'ghost', size: 'default' })
          )}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/about')
              ? 'text-foreground'
              : 'text-foreground/60',
            buttonVariants({ variant: 'ghost', size: 'default' })
          )}
        >
          About
        </Link>
        <Link
          href={siteConfig.links.github}
          className={cn(
            'hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block',
            buttonVariants({ variant: 'ghost', size: 'default' })
          )}
        >
          GitHub
        </Link>
      </nav>
    </div>
  )
}
