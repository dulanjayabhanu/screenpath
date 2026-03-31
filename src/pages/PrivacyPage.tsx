import GridPatternTop from "@/components/ui/custom/GridPatternTop.tsx";
import GridPatternBottom from "@/components/ui/custom/GridPatternBottom.tsx";
import NavBar from "@/components/ui/custom/NavBar.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import Footer from "@/components/ui/custom/Footer.tsx";
import PolicyContent from "@/components/ui/custom/PolicyContent.tsx";
import {useEffect} from "react";
import BackToTopFab from "@/components/ui/custom/BackToTopFab.tsx";
import {ContextMenu, ContextMenuTrigger} from "@/components/ui/context-menu.tsx";
import MainContextMenu from "@/components/ui/custom/MainContextMenu.tsx";

const PrivacyPage = () => {
    useEffect(() => {
        document.title = "Privacy Policy - ScreenPath"
    }, [])

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

            <ContextMenu>
                <ContextMenuTrigger>

                    <MainContextMenu
                        reloadPath={"/privacy"}
                    />

                    <div className="min-h-screen relative">
                        <GridPatternTop/>
                        <GridPatternBottom/>

                        <NavBar />
                        <BackToTopFab />

                        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-hidden">
                            <PolicyContent />
                            <Separator />
                            <Footer />
                        </div>
                    </div>

                </ContextMenuTrigger>
            </ContextMenu>

        </ThemeProvider>
    )
}

export default PrivacyPage