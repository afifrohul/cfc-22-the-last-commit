type Mergeable = {
  id: string
  [key: string]: string
}

export function mergeById(...arrays: Mergeable[][]): Mergeable[] {
  const result: Record<string, Mergeable> = {}

  arrays.flat().forEach((item) => {
    if (!result[item.id]) {
      result[item.id] = { id: item.id }
    }

    Object.assign(result[item.id], item)
  })

  return Object.values(result)
}
