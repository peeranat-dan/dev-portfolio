import { Button } from '@/components/ui/button';
import { ThemeToggle } from '../../theme/theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-40 px-4 lg:px-0 w-full bg-background/95 backdrop-blur">
      <div className="max-w-3xl mx-auto flex h-14 items-center justify-between">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block text-primary">PD</span>
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Button>Get my resume</Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
