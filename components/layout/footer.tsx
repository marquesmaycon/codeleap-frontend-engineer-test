import { ThemeSwitcher } from "../theme-switcher"

export default function Footer() {
  return (
    <footer className="bg-primary mt-10 space-y-4 border-t px-4 py-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-white">© {new Date().getFullYear()} CodeLeap Network</span>
          <ThemeSwitcher />
        </div>
        <small className="text-white">
          This is a coding test for CodeLeap Frontend Engineer position.
        </small>
        <p className="text-sm text-white">
          <span>Build by </span>
          <a
            href="https://github.com/marquesmaycon"
            target="_blank"
            className="font-bold underline"
          >
            Maycon Silva
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
