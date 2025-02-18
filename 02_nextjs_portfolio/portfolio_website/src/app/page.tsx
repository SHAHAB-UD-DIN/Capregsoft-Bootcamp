import Image from "next/image";
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";


export default function Home() {
  return (
    <>
    <main>
      <div><HeroSection /></div>
      
      <div><About /></div>
    </main>
    </>
  );
}
