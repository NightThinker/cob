const Footer = ({ children }) => {
  return (
    <div className='flex flex-col justify-center items-center px-100 bg-green h-54'>
      <span className='text-white font-normal'>
        {children}
      </span>
    </div>)
}
export default Footer