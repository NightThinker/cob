const Img = ({ src, alt, className, ...other }) => {
  return <img className={`${className}`} src={src} alt={alt || 'img'} {...other} />
}

export default Img