"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";  
import DarkModeToggle from "./dark-mode-toggle";

const Navbar = () => {

  const pathname = usePathname();


  return (
    <header className="top-0 w-full h-20 sticky z-10">
      <div className="flex gap-4 justify-between items-center pl-6 pr-4 max-w-screen-xl rounded-b-xl border border-b h-full mx-auto border-transparent bg-background/50 backdrop-blur-2xl">
        <Link href="/" className="font-alexana text-primary">
          AI Grader
        </Link>
        <div className="flex w-auto gap-4 flex-row-reverse md:flex-row items-center">
          <nav className="hidden md:flex justify-evenly items-center gap-12 p-2 font-poppins font-medium">
            <Link
              href="/"
              className={`text-foreground/70 hover:text-primary/70 ${
                pathname == "/" ? "text-primary" : ""
              }`}
            >
              Accueil
            </Link>           
            <Link
              href="/post"
              className={`text-foreground/70 hover:text-primary/70 ${
                pathname == "/projects" ? "text-primary" : ""
              }`}
            >
              Post
            </Link>
            <Link
              href="/about"
              className={`text-foreground/70 hover:text-primary/70 ${
                pathname == "/about" ? "text-primary" : ""
              }`}
            >
              A propos
            </Link>
          </nav>
          <nav className="md:hidden">
            <Dialog>
              <DialogTrigger asChild className="cursor-pointer">
                <Menu />
              </DialogTrigger>
              <DialogContent className="top-20 w-[90%] rounded-xl translate-y-0 ">
                <DialogHeader>
                  <DialogTitle className="mb-4 sr-only">Menu</DialogTitle>
                  <DialogDescription className="flex flex-col gap-2 font-medium text-lg">
                    <Link
                      href="/"
                      className={`text-foreground/70 hover:text-primary/70 ${
                        pathname == "/" ? "text-primary" : ""
                      }`}
                    >
                      Accueil
                    </Link>
                    <Link
                      href="/projects"
                      className={`text-foreground/70 hover:text-primary/70 ${
                        pathname == "/projects" ? "text-primary" : ""
                      }`}
                    >
                      Projets
                    </Link>
                    <Link
                      href="/about"
                      className={`text-foreground/70 hover:text-primary/70 ${
                        pathname == "/about" ? "text-primary" : ""
                      }`}
                    >
                      A propos
                    </Link>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </nav>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
