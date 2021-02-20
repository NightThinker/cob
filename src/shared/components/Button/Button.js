
const Button = ({ children, className, ...other }) => {
  const { width, disable } = other
  return (
    <button
      className={`flex justify-center gap-4  focus:outline-none 
      transition duration-500 ease-in-out transform hover:opacity-90
      items-center rounded-10 h-48 font-semibold text-sm bg-orange text-white ${disable ?
          'cursor-not-allowed' : 'cursor-pointer'} ${width || 'btn'} ${className}`}
      {...other}>
      {children}
    </button>
  )
}

export default Button