import { usePageTitle } from "@/hooks/use-page-title"
import { Link } from "react-router-dom"

export default function NotFound() {
  usePageTitle("Not Found")
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="p-4 md:p-10">
        <h1 className="text-center text-9xl font-black">404</h1>
        <div className="mt-8 space-y-4">
          <p className="text-center font-semibold text-highlight">
            not found — empty here
          </p>
          <p className="text-center text-sm text-muted-foreground">
            The link might be broken or the page may have been removed. Try head
            back{" "}
            <Link
              className="font-semibold text-indigo-600 transition-all duration-200 hover:underline"
              to={"/"}
            >
              home
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
