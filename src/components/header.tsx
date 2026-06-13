import { FaGithubSquare } from "react-icons/fa"
export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 px-2 py-3">
        <div className="bg-zinc-700 p-2">
          <img src="/tlc.svg" alt="logo" className="h-5 w-5" />
        </div>
        <div className="font-medium">
          TheLastCommit — <span className="text-rose-500">Before We Go</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm italic">
          Built by{" "}
          <a
            href="https://github.com/afifrohul"
            target="_blank"
            className="underline"
          >
            Afif Rohul
          </a>
        </p>
        <a
          href="https://github.com/afifrohul/cfc-22-the-last-commit"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </div>
    </div>
  )
}
