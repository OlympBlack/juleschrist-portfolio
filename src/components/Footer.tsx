export const Footer = () => {
    return (
        <footer className="py-8 border-t border-border bg-background mt-20 pb-24 md:pb-8">
            <div className="container mx-auto px-6 text-center">
                <p className="text-muted-foreground text-sm">
                    &copy; {new Date().getFullYear()} GBASSI Jules-Christ. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
};
