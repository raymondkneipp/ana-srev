import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content mt-12">
      <p className="inline">
        Made with ❤️ by{" "}
        <Link className="link" href="https://raymondkneipp.com" target="_blank">
          Raymond Kneipp
        </Link>
      </p>
    </footer>
  );
};
