export default function Button(props) {
  const { variant, size, fullWidth, onClick, children } = props

  let style = "px-4 py-2 rounded-lg text-netural"

  if (fullWidth) {
    style += " w-full"
  }

  if (variant) {
    if (variant === "primary") {
      style += " bg-primary text-neutral"
    }

    if (variant === "secondary") {
      style += " bg-secondary text-neutral"
    }
    if (variant === "accent") {
      style += " bg-accent text-neutral"
    }
  }

  if (size) {
    if (size === "sm") {
      style += " text-sm"
    }
    if (size === "md") {
      style += " text-md"
    }
  }

  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  )
}
