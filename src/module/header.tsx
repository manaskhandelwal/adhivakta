import { Logo } from "../components/logo";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className={`py-4 px-10 border-b`}>
      <Logo />
    </header>
  );
};
