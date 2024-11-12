export type ErrorProps = {
  errorMessage?: string
}

export const Error = ({ errorMessage }: ErrorProps) => {
  if (!errorMessage) return null

  return (
    <div
      role="alert"
      aria-label={errorMessage}
      className="mt-1 text-[0.8rem] font-medium text-destructive"
    >
      {errorMessage}
    </div>
  )
}
