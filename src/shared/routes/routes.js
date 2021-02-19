import { lazy } from 'react'

const Accessories = lazy(() => import('../../feature/accessories/Accessories'));
const Cart = lazy(() => import('../../feature/cart/Cart'));
const Kid = lazy(() => import('../../feature/kid/Kid'));
const Men = lazy(() => import('../../feature/men/Men'));
const NewProducts = lazy(() => import('../../feature/newProducts/NewProducts'));
const Women = lazy(() => import('../../feature/women/Women'));
const Product = lazy(() => import('../../feature/product/Product'));
const ProductDetial = lazy(() => import('../../feature/product/productDetial/ProductDetial'));


export const routes = [
  { path: '/', component: Product },
  { path: '/product', component: Product },
  { path: '/product/:id', component: ProductDetial },
  { path: '/cart', component: Cart },
  { path: '/accessories', component: Accessories },
  { path: '/kid', component: Kid },
  { path: '/men', component: Men },
  { path: '/newProducts', component: NewProducts },
  { path: '/women', component: Women },
]