import { ReactNode } from "react"

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="min-w-full p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto rounded-lg bg-white p-1 sm:p-2 md:p-3 lg:p-4">{children}</div>
    </div>
  )
}

export default Card
