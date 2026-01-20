import { useTheme } from '../hooks/useTheme';

export const ThemeToggle = ({ className }: { className?: string }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary text-foreground transition-all duration-300 ${className}`}
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? (
                <i className="fas fa-sun text-yellow-400 text-lg"></i>
            ) : (
                <i className="fas fa-moon text-slate-700 text-lg"></i>
            )}
        </button>
    );
};
