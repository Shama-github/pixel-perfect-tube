import { Home, Compass, PlaySquare, Clock, ThumbsUp, History, Film, Flame } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavLink } from "@/components/NavLink";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Compass, label: "Explore", path: "/explore" },
    { icon: Film, label: "Shorts", path: "/shorts" },
    { icon: PlaySquare, label: "Subscriptions", path: "/subscriptions" },
  ];

  const libraryItems = [
    { icon: Clock, label: "History", path: "/history" },
    { icon: PlaySquare, label: "Your videos", path: "/your-videos" },
    { icon: Clock, label: "Watch Later", path: "/watch-later" },
    { icon: ThumbsUp, label: "Liked videos", path: "/liked" },
  ];

  return (
    <>
      <aside
        className={cn(
          "fixed left-0 top-14 bottom-0 bg-background transition-all duration-300 z-40 overflow-y-auto border-r border-border",
          isOpen ? "w-60" : "w-0 md:w-20"
        )}
      >
        <div className="py-3">
          <div className="space-y-1 px-3">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-6 px-3 py-2.5 rounded-lg hover:bg-sidebar-hover transition-colors",
                  !isOpen && "md:justify-center md:gap-0"
                )}
                activeClassName="bg-sidebar-hover font-medium"
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span className={cn("text-sm", !isOpen && "md:hidden")}>
                  {item.label}
                </span>
              </NavLink>
            ))}
          </div>

          <div className="border-t border-border my-3" />

          <div className="space-y-1 px-3">
            {libraryItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-6 px-3 py-2.5 rounded-lg hover:bg-sidebar-hover transition-colors",
                  !isOpen && "md:justify-center md:gap-0"
                )}
                activeClassName="bg-sidebar-hover font-medium"
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span className={cn("text-sm", !isOpen && "md:hidden")}>
                  {item.label}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden top-14"
          onClick={() => {}}
        />
      )}
    </>
  );
};

export default Sidebar;
