import { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'

import Layout from '../../shared/theme/Layout/Layout'
import ProductItems from './container/ProductItems/ProductItems'

import { onGetProduct } from '../../shared/api/product.api'

const Product = () => {
  const [prpducts, setPrpducts] = useState([])

  useEffect(() => {
    (async () => {
      const { data } = await onGetProduct();
      console.log('data', data)
      // const tt = data.map(o => ({ ...o, price: <NumberFormat value={o.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /> }))
      // console.log('tt', tt)
      setPrpducts(data)
    })()
  }, [])
  return (
    <Layout>
      <div className='grid  grid-cols-4 gap-x-22 gap-y-25'>
        {prpducts.map(i => (
          <ProductItems key={i._id} name={i.name} img={i.image_url} price={i.price} />
        ))}
      </div>
      {/* <div class="grid grid-cols-3  gap-4">
        {prpducts.map(i => (
          <div>1</div>
        ))}
      </div> */}
    </Layout>
  )
}

export default Product