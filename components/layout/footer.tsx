import { ThemeSwitcher } from "../theme-switcher"

export default function Footer() {
  return (
    <footer className="bg-primary mt-10 border-t px-4 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <span className="text-white">© {new Date().getFullYear()} CodeLeap Network</span>
        <ThemeSwitcher />
      </div>
    </footer>
  )
}
