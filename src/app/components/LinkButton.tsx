import React from "react";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  label: string;
  customClasses?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-center bg-slate-600 text-lg text-white py-2 px-2 rounded-full h-16 text-center my-0 hover:bg-slate-700 ${customClasses}"
    >
      {label}
    </Link>
  );
};

export default LinkButton;
