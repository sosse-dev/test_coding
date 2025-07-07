import { Home, User, UserPlus2, Users } from "lucide-react";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="md:text-xl font-bold md:flex items-center gap-2">
            <User className="hidden md:block h-5 w-5" />
            <span className="hidden md:block">User Management</span>
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/">
                  <Button
                    variant="ghost"
                    className="text-primary-foreground hover:bg-primary-foreground/10 cursor-pointer hover:text-white/80"
                  >
                    <Home className="md:mr-2 h-4 w-4" />
                    Home
                  </Button>
                </a>
              </li>
              <li>
                <a href="/user-list">
                  <Button
                    variant="ghost"
                    className="text-primary-foreground hover:bg-primary-foreground/10 cursor-pointer hover:text-white/80"
                  >
                    <Users className="md:mr-2 h-4 w-4" />
                    Users
                  </Button>
                </a>
              </li>
              <li>
                <a href="/add-user">
                  <Button
                    variant="ghost"
                    className="text-primary-foreground hover:bg-primary-foreground/10 cursor-pointer bg-white/30 hover:text-white/80"
                  >
                    <UserPlus2 className="md:mr-2 h-4 w-4" />
                    <span className="hidden md:block">Add User</span>
                  </Button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}
