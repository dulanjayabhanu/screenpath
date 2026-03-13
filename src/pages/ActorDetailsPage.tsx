import {TooltipProvider} from "@/components/ui/tooltip.tsx";
import GridPatternTop from "@/components/ui/custom/GridPatternTop.tsx";
import GridPatternBottom from "@/components/ui/custom/GridPatternBottom.tsx";
import NavBar from "@/components/ui/custom/NavBar.tsx";
import BackToTopFab from "@/components/ui/custom/BackToTopFab.tsx";
import SubPageHero from "@/components/ui/custom/SubPageHero.tsx";
import Footer from "@/components/ui/custom/Footer.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";

const ActorDetailsPage = () => {

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

            <TooltipProvider>

                <div className="min-h-screen relative">
                    <GridPatternTop/>
                    <GridPatternBottom/>

                    <NavBar />
                    <BackToTopFab />

                    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-hidden">
                        <SubPageHero />
                        <Footer />
                    </div>
                </div>

            </TooltipProvider>

        </ThemeProvider>
    )
}

export default ActorDetailsPage