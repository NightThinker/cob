import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Layout from '../../shared/theme/Layout/Layout'
import ProductItems from './container/ProductItems/ProductItems'
import CardLoading from '../../shared/components/Loading/CardLoading'
import Text from '../../shared/components/Text/Text'

import { onGetProduct } from '../../shared/api/product.api'

const Product = () => {
  const [products, setProducts] = useState([])

  const history = useHistory()

  useEffect(() => {
    (async () => {
      const { data } = await onGetProduct();
      setProducts(data)
    })()
  }, [])

  return (
    <Layout>
      <Text size='text-base' weight='font-semibold' color='text-black-light'>{`Products (${products.length})`}</Text>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-22 gap-y-25 mt-20'>
        {products.length ? (
          products.map(i => (
            <ProductItems
              key={i._id}
              name={i.name}
              img={i.image_url}
              price={i.price}
              review={i.review}
              brand={i.brand_info}
              onClick={() => history.push(`/product/${i._id}`)}
            />
          ))
        ) : <CardLoading />}
      </div>
    </Layout>
  )
}

export default Product