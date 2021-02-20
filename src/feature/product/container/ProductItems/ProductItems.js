import Img from '../../../../shared/components/Img/Img'
import Text from '../../../../shared/components/Text/Text'
import Star from '../../../../shared/components/Star/Star'

import logo from '../../../../logo.svg';

const ProductItems = ({ img }) => {
  return (
    <div className='flex flex-col card bg-white-light rounded-15'>
      <Img src={logo} className='rounded-15' />
      <div className='flex gap-10 px-15 pt-10 pb-15'>
        <Img className='img-sm' src={logo} />
        <div className='flex flex-col'>
          <Text color='text-black-light' weight='font-semibold' className='h-40'>Girman</Text>
          <ul className='flex gap-6'>
            <li className='flex flex-col gap-4 '>
              <Text size='text-xs'>Price</Text>
              <Text weight='font-medium'>{`฿4,000.00`}</Text>
            </li>
            <li className='flex flex-col gap-4 '>
              <Text size='text-xs'>Reviews (15 reviews)</Text>
              <Star rate={4} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductItems