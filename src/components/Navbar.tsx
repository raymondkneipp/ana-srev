import Image from "next/image";
import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar bg-base-300">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          <Image src="/logo.svg" width="100" height={48} alt="Anaïs" />
        </Link>
      </div>
      <div className="navbar-end"></div>
    </nav>
  );
};
