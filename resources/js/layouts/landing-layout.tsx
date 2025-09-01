import IutNavigation from "@/components/iut-navigation";
import { Footer } from "@/components/ui/footer";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";



export default ({ children, currentPage }: { children: React.ReactNode; currentPage: string }) => (
    <>
        <IutNavigation currentPage={currentPage}/>
            {children}
        <Footer
            logo={
            <img 
                src="https://play-lh.googleusercontent.com/PU95IkFmzARGddTMDY0NLDU5rwsZ4_w0SO1HdR2cFvDrAuRArkp2SCwyonCMVvQHvXI" 
                alt="IUT SIKS Logo" 
                className="h-10 w-auto"
            />
            }
            brandName="IUT SIKS"
            socialLinks={[
            { icon: <Facebook className="h-4 w-4" />, href: "#", label: "Facebook" },
            { icon: <Twitter className="h-4 w-4" />, href: "#", label: "Twitter" },
            { icon: <Instagram className="h-4 w-4" />, href: "#", label: "Instagram" },
            { icon: <Linkedin className="h-4 w-4" />, href: "#", label: "LinkedIn" },
            ]}
            mainLinks={[
            { href: "#", label: "Home" },
            { href: "#events", label: "Events" },
            { href: "#about", label: "About Us" },
            { href: "#contact", label: "Contact" },
            { href: "#gallery", label: "Gallery" },
            ]}
            legalLinks={[
            { href: "#privacy", label: "Privacy Policy" },
            { href: "#terms", label: "Terms of Service" },
            { href: "#cookies", label: "Cookie Policy" },
            ]}
            copyright={{
            text: `© ${new Date().getFullYear()} IUT SIKS. All rights reserved.`,
            license: "All rights reserved"
            }}
        />
    </>
);
