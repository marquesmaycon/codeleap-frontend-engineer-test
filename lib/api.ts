import ky from "ky"

export const api = ky.create({
  prefixUrl: "https://dev.codeleap.co.uk/"
})

export type Pagination<T> = {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}
