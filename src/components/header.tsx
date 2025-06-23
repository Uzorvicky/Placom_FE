import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  return (
    <header className="w-[90%] m-auto mt-10 rounded-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-teal-600">PLACOM</span>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            className="bg-green-400 text-white border-secondary hover:bg-green-500 rounded-full px-6"
          >
            Login
          </Button>
          <Button className="bg-primary hover:bg-teal-700 rounded-full px-6">Register</Button>
        </div>
      </div>
    </header>
  )
}
