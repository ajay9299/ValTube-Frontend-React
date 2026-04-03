export async function fetcher(url: string, options?: RequestInit) {
  const res = await fetch(url, options)
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}
