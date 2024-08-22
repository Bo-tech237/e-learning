'use client';

import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from './ui/sheet';
import { Menu } from 'lucide-react';
import { navLinks } from '@/constant/constant';
import Image from 'next/image';

export default function Navbar() {
    const pathname = usePathname();
    return (
        <header className="sticky top-0 z-50 w-full bg-indigo-700">
            <div className="flex h-20 gap-1 items-center justify-between w-4/5 mx-auto">
                <div>
                    <Link className="block" href="/">
                        <span className="sr-only">Home</span>
                        <Image
                            src={'/images/logo.png'}
                            alt="logo"
                            width={120}
                            height={120}
                            priority
                        />
                    </Link>
                </div>
                <section className="hidden md:block">
                    <nav className="flex items-center justify-center gap-2 text-white">
                        {navLinks.map((navLink) => (
                            <Link
                                key={navLink.id}
                                href={navLink.url}
                                className={cn(
                                    buttonVariants({
                                        variant:
                                            pathname === `${navLink.url}`
                                                ? 'default'
                                                : 'ghost',
                                    }),
                                    'default' && '',
                                    'justify-start text-sm lg:text-xl'
                                )}
                            >
                                {navLink.label}
                            </Link>
                        ))}
                    </nav>
                </section>

                {/* mobile */}
                <section className="flex items-center gap-2">
                    <nav>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="shrink-0 md:hidden"
                                >
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">
                                        Toggle navigation menu
                                    </span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side={'left'}
                                className="w-[300px] sm:w-[540px] flex flex-col items-center"
                            >
                                <SheetHeader>
                                    <SheetTitle>E LEARNING</SheetTitle>
                                    <SheetDescription>
                                        THE BEST LEARNING WEB APP.
                                    </SheetDescription>
                                </SheetHeader>

                                <nav className="flex flex-col items-center justify-center gap-5 mt-20">
                                    {navLinks.map((navLink) => (
                                        <SheetClose key={navLink.id} asChild>
                                            <Link
                                                href={navLink.url}
                                                className={cn(
                                                    buttonVariants({
                                                        variant:
                                                            pathname ===
                                                            `${navLink.url}`
                                                                ? 'default'
                                                                : 'ghost',
                                                    }),
                                                    'default' && '',
                                                    'justify-start text-sm lg:text-xl'
                                                )}
                                            >
                                                {navLink.label}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </nav>
                </section>
            </div>
        </header>
    );
}
