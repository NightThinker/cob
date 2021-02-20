import { useSelector } from 'react-redux';

import Layout from '../../shared/theme/Layout/Layout'
import Text from '../../shared/components/Text/Text'
import Img from '../../shared/components/Img/Img'

import Button from '../../shared/components/Button/Button'

const Cart = () => {
  const { carts } = useSelector((state) => state.cart);

  const total = carts.reduce((sum, number) => {
    return sum + parseFloat(number.total)
  }, 0)

  return (
    <Layout>
      <ul className='flex flex-col bg-white-light rounded-10 p-20 '>
        <Text size='text-2xl' color='text-black-light' weight='font-medium'>Cart</Text>
        <li className='flex flex-col mt-25 mb-30'>
          <div className='grid grid-cols-cart border-b pb-6 border-grey-border'>
            <Text size='text-lg' color='text-black'>PRODUCT NAME</Text>
            <Text size='text-lg' color='text-black'>PRICE</Text>
            <Text size='text-lg' color='text-black'>QUANTITY</Text>
            <Text size='text-lg' color='text-black'>TOTAL</Text>
          </div>
          {carts.map(({ id, img, name, price, qty, total }) => (
            <div key={id} className='grid grid-cols-cart py-20 items-center border-b border-grey-border'>
              <div className='flex gap-10 items-center'>
                <Img src={img} className='img-sm' />
                <Text color='text-black-light'>{name}</Text>
              </div>
              <Text isNumber color='text-grey-light'>{price}</Text>
              <Text color='text-black-light'>{qty}</Text>
              <Text isNumber color='text-grey-light'>{total}</Text>
            </div>
          ))}
        </li>
        <li className='flex justify-end gap-10 items-center'>
          <Text size='text-xl' weight='font-medium' color='text-black-light'>{`Subtotal (${carts.length} Product):`}</Text>
          <Text isNumber size='text-2xl' weight='font-medium' color='text-orange'>{total.toFixed(2)}</Text>
        </li>
        <li className='flex justify-end mt-15 '>
          <Button width='btn-md'>Proceed to check out</Button>
        </li>
      </ul>
    </Layout>
  )
}

export default Cart