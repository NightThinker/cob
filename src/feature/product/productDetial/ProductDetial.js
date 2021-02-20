import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import Layout from '../../../shared/theme/Layout/Layout'
import Img from '../../../shared/components/Img/Img'
import Text from '../../../shared/components/Text/Text'
import Star from '../../../shared/components/Star/Star'
import Button from '../../../shared/components/Button/Button'
import ButtonGroup from '../../../shared/container/ButtonGroup/ButtonGroup'
import Loading from '../../../shared/components/Loading/Loading'

import { onGetProductById } from '../../../shared/api/product.api'
import { addToCart } from '../../../store/actions/actionCart';

const ProductDetail = () => {
  const [product, setProduct] = useState()
  const [count, setCount] = useState(0)

  const { id } = useParams()
  const history = useHistory()
  const dispatch = useDispatch();

  const onAddToCart = (data) => dispatch(addToCart(data));

  useEffect(() => {
    (async () => {
      const { data } = await onGetProductById(id);
      setProduct(data)
    })()
  }, [])

  const onIncrement = () => {
    setCount(preCount => preCount + 1)
  }

  const onDecrement = () => {
    if (count) setCount(preCount => preCount - 1)
  }

  const onAddToCartHandler = () => {
    const payload = {
      id: product._id,
      name: product.name,
      img: product.image_url,
      price: product.price,
      qty: count,
      total: (count * product.price).toFixed(2)
    }
    onAddToCart(payload)
    !!count && history.push(`/cart`)
  }

  return (
    <Layout>
      <div className='flex bg-white-light rounded-10 pt-30 pl-20 pr-30 pb-28 gap-25'>
        {product ? (
          <div className='flex'>
            <div className='w-2/5'>
              <Img className='img-lg' src={product?.image_url} />
            </div>
            <div className='flex flex-col w-4/5'>
              <Text size='text-2xl' color='text-gray-dark'>{product?.name}</Text>
              <div className='flex gap-10 mt-10'>
                <Star rate={product?.review?.rating} />
                <Text color='text-gray-light'>{`(${product?.review.number} reviews)`}</Text>
              </div>
              <Text className='my-18'>{product.description}</Text>
              <Text>Price</Text>
              <div className='flex mb-15 mt-4'>
                <Text isNumber size='text-2xl' weight='font-medium' color='text-orange'>{product.price}</Text>
              </div>
              <div className='flex items-center  gap-40'>
                <Text color='text-black-light'>Quanititiy:</Text>
                <ButtonGroup number={count} onIncrement={onIncrement} onDecrement={onDecrement} />
              </div>
              <Button className='mt-16' disable={!count} onClick={onAddToCartHandler} >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.2499 6.75H9.74991V4.5H11.9999V3H9.74991V0.749996H8.2499V3H5.9999V4.5H8.2499V6.75ZM5.24989 13.5C4.42114 13.5 3.75739 14.1712 3.75739 15C3.75739 15.8287 4.42114 16.5 5.24989 16.5C6.07865 16.5 6.7499 15.8287 6.7499 15C6.7499 14.1712 6.07865 13.5 5.24989 13.5ZM12.7499 13.5C11.9212 13.5 11.2574 14.1712 11.2574 15C11.2574 15.8287 11.9212 16.5 12.7499 16.5C13.5787 16.5 14.2499 15.8287 14.2499 15C14.2499 14.1712 13.5787 13.5 12.7499 13.5ZM5.38114 11.0625C5.38114 11.0287 5.38864 10.9987 5.40364 10.9725L6.07865 9.75H11.6662C12.2287 9.75 12.7199 9.43875 12.9787 8.9775L15.8737 3.72L14.5612 3H14.5574L13.7287 4.5L11.6624 8.25H6.40115L6.30365 8.0475L4.61989 4.5L3.90739 3L3.19864 1.5H0.749878V3H2.24988L4.94989 8.68875L3.93364 10.5262C3.81739 10.7437 3.74989 10.9875 3.74989 11.25C3.74989 12.0787 4.42114 12.75 5.24989 12.75H14.2499V11.25H5.56864C5.46364 11.25 5.38114 11.1675 5.38114 11.0625Z" fill="#F9F9F9" />
                </svg>
                <Text color='text-white' weight='font-semibold' >ADD TO CART</Text>
              </Button>
            </div>
          </div>
        ) : <Loading />}

      </div>
    </Layout>
  )
}

export default ProductDetail