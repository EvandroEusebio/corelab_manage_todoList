import Image from "next/image";

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex items-center gap-4">
        <Image src="/img/logo.png" alt="Logo" width={36} height={36} />
        <h1 className="text-2xl">CoreNotes</h1>
      </div>
    </header>
  );
}

export default Header;
