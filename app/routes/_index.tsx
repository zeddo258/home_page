import { MetaFunction } from "@remix-run/node";
import { AnimatedPinDemo } from "~/components/ui/animated-card";
import { HeroParallaxDemo } from "~/components/ui/parellel-hero";
import { Navbar } from "~/components/ui/navbar";
import { FloatingDockDemo } from "~/components/ui/floating-dock-demo";
import { FloatingNavDemo } from "~/components/ui/navbar-demo";
import { Header, HeroParallax } from "~/components/ui/hero-parralel";
import { SparklesCore } from "~/components/ui/sparkles";


export const meta: MetaFunction = () => {
  return [
    { title: "Mandarin Learning Center in CYCU" },
    { name: "description", content: "Welcome to Remix-Acertenity" },
  ];
};

export default function Index() {
  
  return (
    <div>
      <FloatingDockDemo/>
      <HeroParallaxDemo/>
    </div>
  );
    ;
  }



