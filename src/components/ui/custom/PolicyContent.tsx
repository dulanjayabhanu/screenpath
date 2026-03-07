import {Separator} from "@/components/ui/separator.tsx";

const PolicyContent = () => {
    return (
        <section className="flex flex-col items-start gap-4 py-8 w-full max-w-3xl mx-auto">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight border-0 first:mt-0">
                Privacy Policy
            </h2>
            <p className="text-sm text-muted-foreground pt-2 pb-10">Last updated: March 2026</p>

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-foreground">
                Introduction
            </h3>
            <p className="leading-7 not-first:mt-2">
                Welcome to ScreenPath. Your privacy is important to us. This Privacy Policy explains how ScreenPath collects, uses, and protects information when you use our website.
            </p>

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6 text-foreground">
                Information We Collect
            </h3>
            <p className="leading-7 not-first:mt-2">
                ScreenPath is designed to provide a simple and distraction-free movie discovery experience. We do not require user accounts, and we do not collect personal information such as names, emails, or passwords.
            </p>
            <p className="leading-7 not-first:mt-2">
                However, limited information may be collected automatically by the technologies used to operate the website.
            </p>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
                Automatically Collected Information
            </h4>
            <p className="leading-7">
                When you use ScreenPath, some basic technical information may be collected automatically, including:
            </p>
            <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>Browser type</li>
                <li>Device type</li>
                <li>IP address (temporary network identification)</li>
                <li>Pages visited on the site</li>
                <li>Time spent on pages</li>
                <li>Basic interaction data</li>
            </ul>
            <p className="leading-7">
                This information is used only to improve the performance and stability of the application.
            </p>

            <h3 className="scroll-m-20 text-2xl text-start font-semibold tracking-tight mt-6 text-foreground">
                Movie Data and Third-Party Sources
            </h3>
            <p className="leading-7 not-first:mt-2">
                ScreenPath does not host or own movie data.
            </p>
            <p className="leading-7 not-first:mt-2">
                Movie information such as:
            </p>
            <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>Movie titles</li>
                <li>Descriptions</li>
                <li>Posters</li>
                <li>Cast and crew information</li>
                <li>Ratings</li>
                <li>Release dates</li>
            </ul>
            <p className="leading-7">
                is provided by The Movie Database (TMDB) through their public API.
            </p>
            <p className="leading-7 not-first:mt-2">
                This product uses the TMDB API but is not endorsed or certified by TMDB.
            </p>
            <p className="leading-7 not-first:mt-2">
                All movie data and images remain the property of their respective owners.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2">
                <p className="leading-7 not-first:mt-2">
                    For more information, please visit
                </p>
                <a href="https://www.themoviedb.org" className="font-semibold underline hover:invert-30">
                    themoviedb.org
                </a>
            </div>

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6 text-foreground">
                Embedded Content
            </h3>
            <p className="leading-7 not-first:mt-2">
                Some features of ScreenPath include embedded content from external platforms.
            </p>
            <p className="leading-7 not-first:mt-2">
                For example:
            </p>
            <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>YouTube is used to display official movie trailers.</li>
            </ul>
            <p className="leading-7 not-first:mt-2">
                These embedded services may collect information according to their own privacy policies. ScreenPath does not control how those services collect or use data.
            </p>
            <p className="leading-7 not-first:mt-2">
                Please review their policies for more information.
            </p>

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6 text-foreground">
                Cookies and Local Storage
            </h3>
            <p className="leading-7 not-first:mt-2">
                ScreenPath may use browser storage technologies such as:
            </p>
            <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>Cookies</li>
                <li>Local Storage</li>
            </ul>
            <p className="leading-7 not-first:mt-2">
                These may be used for purposes such as:
            </p>
            <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>Remembering interface preferences</li>
                <li>Maintaining application functionality</li>
                <li>Improving performance</li>
            </ul>
            <p className="leading-7 not-first:mt-2">
                ScreenPath does not use cookies for advertising or user profiling.
            </p>

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6 text-foreground">
                How We Use Information
            </h3>
            <p className="leading-7 not-first:mt-2">
                Any automatically collected information may be used to:
            </p>
            <ul className="ml-6 list-disc [&>li]:mt-2">
                <li>Improve website performance</li>
                <li>Monitor system stability</li>
                <li>Fix bugs or technical issues</li>
                <li>Enhance user experience</li>
            </ul>
            <p className="leading-7 not-first:mt-2">
                We do not sell, trade, or share personal data with third parties.
            </p>

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6 text-foreground">
                Data Security
            </h3>
            <p className="leading-7 not-first:mt-2">
                We take reasonable steps to protect the website and its infrastructure. However, no method of internet transmission or electronic storage is completely secure.
            </p>
            <p className="leading-7 not-first:mt-2">
                ScreenPath cannot guarantee absolute security of data.
            </p>

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6 text-foreground">
                Children's Privacy
            </h3>
            <p className="leading-7 not-first:mt-2">
                ScreenPath is intended for general audiences. We do not knowingly collect personal information from children.
            </p>
            <p className="leading-7 not-first:mt-2">
                If you believe a child has provided personal information through the site, please contact us and we will remove the information.
            </p>

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6 text-foreground">
                External Links
            </h3>
            <p className="leading-7 not-first:mt-2">
                ScreenPath may contain links to external websites or services. We are not responsible for the privacy practices or content of those external websites.
            </p>
            <p className="leading-7 not-first:mt-2">
                Users should review the privacy policies of any external services they visit.
            </p>

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6 text-foreground">
                Changes to This Privacy Policy
            </h3>
            <p className="leading-7 not-first:mt-2">
                We may update this Privacy Policy from time to time to reflect improvements to the application or changes in legal requirements.
            </p>
            <p className="leading-7 not-first:mt-2">
                Updates will be posted on this page with the revised "Last Updated" date.
            </p>

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6 text-foreground">
                Contact
            </h3>
            <p className="leading-7 not-first:mt-2">
                If you have questions about this Privacy Policy, you may contact us at:
            </p>
            <div className="flex flex-row items-center gap-2 mt-2">
                <p className="leading-7 not-first:mt-2">
                    Email:
                </p>
                <a href="mailto:dulanjayawebs@gmail.com" className="font-semibold underline hover:invert-30">
                    dulanjayawebs@gmail.com
                </a>
            </div>
            <Separator className="my-6"/>
            <p className="text-sm text-muted-foreground pb-12">
                By using ScreenPath, you agree to this Privacy Policy.
            </p>
        </section>
    )
}

export default PolicyContent