
const Text = ({ children, className, ...other }) => {
  const { color, weight, size, maxLength } = other
  const trimmedString = children.length > maxLength ? children.substring(0, maxLength - 3) + "..." : children;

  return (
    <span
      className={`flex  ${className} ${color || 'text-gray'} ${weight || 'font-normal'} ${size || 'text-sm'}`}
      {...other}>
      {trimmedString}
    </span>)
}

export default Text