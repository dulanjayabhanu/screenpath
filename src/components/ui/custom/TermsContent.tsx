import {Separator} from "@/components/ui/separator.tsx";
import {Link} from "react-router";

const TermsContent = () => {
    return (
        <section className="flex flex-col items-start gap-4 py-8 w-full max-w-3xl mx-auto">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight border-0 first:mt-0">
                Terms of Service
            </h2>
            <p className="text-sm text-muted-foreground pt-2 pb-10">Last updated: March 2026</p>

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-foreground">
                Introduction
            </h3>
            <p className="leading-7 not-first:mt-2">
                Welcome to ScreenPath. By accessing or using our website, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.
            </p>
            <p className="leading-7 not-first:mt-2">
                If you do not agree with these terms, please do not use this website.
            </p>

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6 text-foreground">
                About ScreenPath
            </h3>
            <p className="leading-7 not-first:mt-2">
                ScreenPath is a movie discovery platform designed to help users search and explore movies in a focused and distraction-free environment.
            </p>
            <p className="leading-7">
                The service allows users to:
            </p>
            <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>Search movies by title</li>
                <li>Filter movies using various criteria</li>
                <li>View movie details such as cast, crew, trailers, and recommendations</li>
            </ul>
            <p className="leading-7">
                ScreenPath is provided for informational and entertainment purposes only.
            </p>

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6 text-foreground">
                Use of the Service
            </h3>
            <p className="leading-7 not-first:mt-2">
                By using ScreenPath, you agree that you will:
            </p>
            <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>Use the service only for lawful purposes</li>
                <li>Not misuse or attempt to disrupt the website</li>
                <li>Not attempt to access restricted areas of the service</li>
                <li>Not attempt to reverse engineer or abuse the platform</li>
            </ul>
            <p className="leading-7">
                You must not use this website in any way that could damage, disable, or interfere with the service.
            </p>

            <h3 className="scroll-m-20 text-2xl font-semibold text-start tracking-tight mt-6 text-foreground">
                Movie Data and Third-Party Services
            </h3>
            <p className="leading-7 not-first:mt-2">
                ScreenPath uses the TMDB (The Movie Database) API to provide movie information.
            </p>
            <p className="leading-7 not-first:mt-2">
                Movie data including:
            </p>
            <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>Titles</li>
                <li>Posters</li>
                <li>Descriptions</li>
                <li>Production Companies</li>
                <li>Budget and Revenue</li>
                <li>Cast and crew information</li>
                <li>Trailers</li>
                <li>Recommendations</li>
            </ul>
            <p className="leading-7 not-first:mt-2">
                is sourced from TMDB.
            </p>
            <p className="leading-7 not-first:mt-2">
                This product uses the TMDB API but is not endorsed or certified by TMDB.
            </p>
            <p className="leading-7 not-first:mt-2">
                ScreenPath does not own the movie data provided through the TMDB API.
            </p>

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6 text-foreground">
                External Content
            </h3>
            <p className="leading-7 not-first:mt-2">
                Some media content such as trailers may be hosted by third-party platforms such as YouTube.
            </p>
            <p className="leading-7 not-first:mt-2">
                ScreenPath does not control these platforms and is not responsible for their content, policies, or availability.
            </p>
            <p className="leading-7 not-first:mt-2">
                Your use of those services may be subject to their own terms and policies.
            </p>

            <h3 className="scroll-m-20 text-2xl text-start font-semibold tracking-tight mt-6 text-foreground">
                No Accounts or User Data Collection
            </h3>
            <p className="leading-7 not-first:mt-2">
                ScreenPath currently does not require user accounts and does not collect personal user data.
            </p>
            <p className="leading-7 not-first:mt-2">
                The website may use basic browser technologies necessary for functionality, such as caching or session behavior.
            </p>
            <p className="leading-7 not-first:mt-2">
                For more information, please review our <Link to={"/privacy"} className="font-semibold underline hover:invert-20">Privacy Policy</Link>.
            </p>

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6 text-foreground">
                Availability of the Service
            </h3>
            <p className="leading-7 not-first:mt-2">
                ScreenPath is provided “as is” and “as available.”
            </p>
            <p className="leading-7 not-first:mt-2">
                We do not guarantee that:
            </p>
            <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>the service will always be available</li>
                <li>the service will be error-free</li>
                <li>all information will always be complete or accurate</li>
            </ul>
            <p className="leading-7 not-first:mt-2">
                The service may be modified, updated, or discontinued at any time without notice.
            </p>

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6 text-foreground">
                Intellectual Property
            </h3>
            <p className="leading-7 not-first:mt-2">
                The ScreenPath website, including its design, layout, and branding, is the intellectual property of the project creator unless otherwise stated.
            </p>
            <p className="leading-7 not-first:mt-2">
                Movie data, posters, and related materials belong to their respective owners and are provided through the TMDB API.
            </p>
            <p className="leading-7 not-first:mt-2">
                You may not copy, reproduce, or redistribute parts of this website without permission.
            </p>

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6 text-foreground">
                Limitation of Liability
            </h3>
            <p className="leading-7 not-first:mt-2">
                ScreenPath and its developer are not responsible for any direct or indirect damages resulting from:
            </p>
            <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>the use of this website</li>
                <li>reliance on information provided on the website</li>
                <li>temporary service interruptions</li>
            </ul>
            <p className="leading-7 not-first:mt-2">
                Use of the service is at your own risk.
            </p>

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6 text-foreground">
                Changes to These Terms
            </h3>
            <p className="leading-7 not-first:mt-2">
                We may update these Terms of Service from time to time.
            </p>
            <p className="leading-7 not-first:mt-2">
                When updates occur, the “Last updated” date will be revised.
            </p>
            <p className="leading-7 not-first:mt-2">
                Continued use of the service after changes means you accept the updated terms.
            </p>

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6 text-foreground">
                Contact
            </h3>
            <p className="leading-7 not-first:mt-2">
                If you have questions about these Terms of Service, you may contact the developer through the project repository or official project channels.
            </p>
            <Separator className="my-6"/>
            <p className="text-sm text-muted-foreground pb-12">
                By using ScreenPath, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
        </section>
    )
}

export default TermsContent