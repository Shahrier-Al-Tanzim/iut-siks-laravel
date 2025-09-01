import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Moon } from 'lucide-react';

interface NavigationProps {
  currentPage?: string;
}

export default function IutNavigation({ currentPage }: NavigationProps) {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'Prayer Times', href: '/prayer-times' },
  ];

  return (
    <nav className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 size-24" >
              <img src="https://play-lh.googleusercontent.com/PU95IkFmzARGddTMDY0NLDU5rwsZ4_w0SO1HdR2cFvDrAuRArkp2SCwyonCMVvQHvXI" alt="IUT SIKS" className="w-16 h-16" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.href
                      ? ' text-emerald-900 font-bold text-xl'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Dark mode toggle placeholder */}
            {/* <Button variant="ghost" size="sm">
              <Moon className="h-4 w-4" />
            </Button> */}
            
            {/* Auth buttons */}
            <Link href={route('dashboard')}>
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href={route('dashboard')}>
              <Button size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  currentPage === item.href
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}