import { useEffect } from "react"

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | TheLastCommit — Before We Go`
  }, [title])
}
