import { ThemeToggle } from './ThemeToggle';
import { Link } from 'react-router-dom';

export const MobileNav = () => {
    return (
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-card border-t border-border z-50 px-6 py-3 flex justify-between items-center safe-area-bottom">
            <Link to="/" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                <i className="fas fa-home text-xl"></i>
                <span className="text-[10px] font-medium">Accueil</span>
            </Link>

            <a href="/#projects" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                <i className="fas fa-folder-open text-xl"></i>
                <span className="text-[10px] font-medium">Projets</span>
            </a>

            <div className="flex flex-col items-center gap-1">
                <ThemeToggle className="w-8 h-8 !p-0" />
                <span className="text-[10px] font-medium text-muted-foreground">Thème</span>
            </div>

            <a href="/#contact" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                <i className="fas fa-envelope text-xl"></i>
                <span className="text-[10px] font-medium">Contact</span>
            </a>
        </div>
    );
};
