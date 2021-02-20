import Img from '../../../../shared/components/Img/Img'
import Text from '../../../../shared/components/Text/Text'
import Star from '../../../../shared/components/Star/Star'

const ProductItems = ({ img, name, price, review, brand, onClick, ...other }) => {
  return (
    <div className='flex flex-col card bg-white-light rounded-15' onClick={onClick}>
      <Img src={img} className='rounded-15 img-md' />
      <div className='flex gap-10 px-15 pt-10 pb-15'>
        <Img className='img-sm' src={brand.url} />
        <div className='flex flex-col gap-10'>
          <Text color='text-black-light' weight='font-semibold' className='h-40' maxLength={40}>{name}</Text>
          <ul className='flex gap-6'>
            <li className='flex flex-col gap-4 justify-between'>
              <Text size='text-xs'>Price</Text>
              <Text isNumber weight='font-medium' color='text-orange'>{price}</Text>
            </li>
            <li className='flex flex-col gap-4 '>
              <Text size='text-xs'>{`Reviews (${review.number} reviews)`}</Text>
              <Star rate={review.rating} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductItems