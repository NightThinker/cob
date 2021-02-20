import { Children } from "react"

const Text = ({ children, className, ...other }) => {
  const { color, weight, size } = other
  return <span className={`flex  ${className} ${color || 'text-gray'} ${weight || 'font-normal'} ${size || 'text-sm'}`} {...other}>{children}</span>
}

export default Text