import Link from "next/link"

import { ThemeSwitcher } from "../theme-switcher"

export default function Header() {
  return (
    <header className="bg-primary px-9.25 py-6.75">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold text-white">CodeLeap Network</h1>
        </Link>
        <ThemeSwitcher />
      </div>
    </header>
  )
}
