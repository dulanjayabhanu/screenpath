import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel,
    DropdownMenuPortal, DropdownMenuSeparator,
    DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Menu} from "lucide-react";
import {useNavigate} from "react-router";
import {useTheme} from "@/components/theme-provider.tsx";

const MobileNavigationMenu = () => {
    const { setTheme } = useTheme()
    const navigate = useNavigate()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="dark:bg-gray-950 dark:hover:bg-gray-950">
                    <Menu />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="start">
                <DropdownMenuGroup>
                    <DropdownMenuLabel className="text-xs text-muted-foreground">ScreenPath</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() =>
                        navigate("/actors")
                    }>
                        Actors
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {
                        navigate("/crews")
                    }}>
                        Directors & Crew
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuLabel className="text-xs text-muted-foreground">Theme</DropdownMenuLabel>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Choose Theme</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem onClick={() =>
                                    setTheme("light")
                                }>
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() =>
                                    setTheme("dark")
                                }>
                                    Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() =>
                                    setTheme("system")
                                }>
                                    System
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuLabel className="text-xs text-muted-foreground">Community</DropdownMenuLabel>
                        <a href="https://github.com/dulanjayabhanu/screenpath" target="_blank" rel="noopener noreferrer">
                            <DropdownMenuItem>GitHub</DropdownMenuItem>
                        </a>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default MobileNavigationMenu