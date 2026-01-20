import { type ReactNode } from 'react';
import { Navbar } from '../components/Navbar';
import { MobileNav } from '../components/MobileNav';
import { Footer } from '../components/Footer';

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />
            <main className="flex-grow pt-[80px]">
                {children}
            </main>
            <Footer />
            <MobileNav />
        </div>
    );
};
