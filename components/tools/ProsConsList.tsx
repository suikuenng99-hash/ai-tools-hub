interface ProsConsListProps {
  pros: string[]
  cons: string[]
}

export default function ProsConsList({ pros, cons }: ProsConsListProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {/* Pros */}
      <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
        <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-green-800">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Pros
        </h3>
        <ul className="space-y-2">
          {pros.map((pro) => (
            <li key={pro} className="flex items-start gap-2 text-sm text-green-900">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {pro}
            </li>
          ))}
        </ul>
      </div>

      {/* Cons */}
      <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
        <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-red-800">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          Cons
        </h3>
        <ul className="space-y-2">
          {cons.map((con) => (
            <li key={con} className="flex items-start gap-2 text-sm text-red-900">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
