import { cn } from "@/lib/utils"

interface NavbarProps {
    className?: string
}

const Navbar: React.FC<NavbarProps> = ({className}) => {
    return (
        <section className={cn("hidden fixed backdrop-blur-sm top-0 left-0 right-0 h-20 border-b bg-slate-500 shadow-sm", className)}>
            <h1>Harmonic Hues</h1>
        </section>
    )
}

export default Navbar;