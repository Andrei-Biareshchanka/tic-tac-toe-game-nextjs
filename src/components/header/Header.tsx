import Image from "next/image";
import logo from "./logo.png";
import Profile from "../profile/Profile";
import Button from "../uikit/button/Button";

export default function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logo} alt="logo" width={78} className="mr-10" />
      <Button className="w-44" size="lg" variant="primary">
        Play
      </Button>
      <button className="ml-auto flex items-center gap-2 mr-4 text-start text-teal-600 hover:text-teal-500 transition-colors">
        <Profile name="Paromovevg" rating="1243" />
      </button>
    </header>
  );
}
