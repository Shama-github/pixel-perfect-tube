import { Menu, Search, Mic, Video, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border h-14 flex items-center px-4 gap-4">
      <div className="flex items-center gap-4 flex-shrink-0">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          className="hover:bg-secondary"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-8 h-8 bg-youtube-red rounded flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
            </svg>
          </div>
          <span className="font-semibold text-xl hidden sm:inline">YouTube</span>
        </div>
      </div>

      <div className="flex-1 max-w-2xl mx-auto hidden md:flex items-center gap-2">
        <div className="flex-1 flex">
          <Input
            type="text"
            placeholder="Search"
            className="rounded-l-full rounded-r-none border-r-0 h-10 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary"
          />
          <Button
            variant="outline"
            className="rounded-r-full rounded-l-none h-10 px-6 border-l bg-muted hover:bg-accent"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-muted hover:bg-accent h-10 w-10"
        >
          <Mic className="h-5 w-5" />
        </Button>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="md:hidden hover:bg-secondary"
      >
        <Search className="h-5 w-5" />
      </Button>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-secondary">
          <Video className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-secondary">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
