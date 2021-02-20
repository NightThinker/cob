import Layout from '../../shared/theme/Layout/Layout'
import Text from '../../shared/components/Text/Text'
import Img from '../../shared/components/Img/Img'

import logo from '../../logo.svg'
import Button from '../../shared/components/Button/Button'

const Cart = () => {
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
          <div className='grid grid-cols-cart py-20 items-center border-b border-grey-border'>
            <div className='flex gap-10 items-center'>
              <Img src={logo} className='img-sm' />
              <Text color='text-black-light'>x NAME</Text>
            </div>
            <Text color='text-grey-light'>PRxICE</Text>
            <Text color='text-black-light'>PRxICE</Text>
            <Text color='text-grey-light'>PRxICE</Text>
          </div>
          <div className='grid grid-cols-cart py-20 items-center border-b border-grey-border'>
            <div className='flex gap-10 items-center'>
              <Img src={logo} className='img-sm' />
              <Text color='text-black-light'>x NAME</Text>
            </div>
            <Text color='text-grey-light'>PRxICE</Text>
            <Text color='text-black-light'>PRxICE</Text>
            <Text color='text-grey-light'>PRxICE</Text>
          </div>
        </li>
        <li className='flex justify-end gap-10 items-center'>
          <Text size='text-xl' weight='font-medium' color='text-black-light'>{`Subtotal (2 Product):`}</Text>
          <Text size='text-2xl' weight='font-medium' color='text-orange'  >100</Text>
        </li>
        <li className='flex justify-end mt-15 '>
          <Button width='btn-md'>Proceed to check out</Button>
        </li>
      </ul>
    </Layout>
  )
}

export default Cart