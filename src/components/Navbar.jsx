import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span>
            <Link href="/" prefetch={false}>
              <span>Logo</span> {/* Replace with actual logo or content */}
            </Link>
          </span>
        </div>
        <div className="flex space-x-4">
          <Link href="/about" className="text-white" prefetch={false}>
            About
          </Link>
          <Link href="/services" className="text-white" prefetch={false}>
            Services
          </Link>
          <Link href="/contact" className="text-white" prefetch={false}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;