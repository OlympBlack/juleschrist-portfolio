import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        if (!isHome) return;
        // If not home, the Link helper usually handles redirection to /#id, 
        // but smooth scroll needs element presence.
        // We rely on standard anchor behavior for now or handled by a useEffect in Home.
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border h-[70px]' : 'bg-transparent h-[80px]'}`}>
            <div className="container mx-auto px-6 h-full flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-primary tracking-tighter hover:opacity-80 transition-opacity">
                    OlympBlack
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {/* Use hash links which work well with React Router if handled correctly or just standard <a> for same-page anchors if on home */}
                    <a href="/#about" onClick={() => scrollToSection('about')} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">À Propos</a>
                    <a href="/#skills" onClick={() => scrollToSection('skills')} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Compétences</a>
                    <a href="/#projects" onClick={() => scrollToSection('projects')} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Projets</a>
                    <a href="/#contact" onClick={() => scrollToSection('contact')} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Contact</a>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};
