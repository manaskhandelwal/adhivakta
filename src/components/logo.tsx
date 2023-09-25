import Link from "next/link";

interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <p className={`font-bold text-lg`}>
      <Link href={"/"}>Adhivakta</Link>
    </p>
  );
};
