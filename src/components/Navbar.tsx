import { ModeToggle } from "@/components/ModeToggle";

export default function Navbar() {
  return (
    <header className="p-4 border-b flex justify-between items-center bg-white dark:bg-black">
      <h1 className="text-xl dark:text-white">Ticket Platform</h1>
      <ModeToggle />
    </header>
  );
}
