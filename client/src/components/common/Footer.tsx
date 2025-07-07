import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 User Management App. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
            <Button variant="link" size="sm" className="text-muted-foreground">
              Privacy Policy
            </Button>
            <Button variant="link" size="sm" className="text-muted-foreground">
              Terms of Service
            </Button>
            <Button variant="link" size="sm" className="text-muted-foreground">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
