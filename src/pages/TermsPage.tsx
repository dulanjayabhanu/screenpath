import GridPatternTop from "@/components/ui/custom/GridPatternTop.tsx";
import GridPatternBottom from "@/components/ui/custom/GridPatternBottom.tsx";
import NavBar from "@/components/ui/custom/NavBar.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import Footer from "@/components/ui/custom/Footer.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {useEffect} from "react";
import TermsContent from "@/components/ui/custom/TermsContent.tsx";
import BackToTopFab from "@/components/ui/custom/BackToTopFab.tsx";

const TermsPage = () => {
    useEffect(() => {
        document.title = "Terms of Service - ScreenPath"
    }, [])

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

            <div className="min-h-screen relative">
                <GridPatternTop/>
                <GridPatternBottom/>

                <NavBar />
                <BackToTopFab />

                <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-hidden">
                    <TermsContent />
                    <Separator />
                    <Footer />
                </div>
            </div>

        </ThemeProvider>
    )
}

export default TermsPage