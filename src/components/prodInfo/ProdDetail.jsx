import React, { useState } from 'react'
import { postProductsThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'
import './styles/prodDetail.css'

const ProdDetail = ({product}) => {

  const [count, setCount] = useState(1)

  const dispatch = useDispatch()

  const handleLess = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const hanldePlus = () => {
    setCount(count + 1)
  }
  
  const handleAddCart = () => {
    dispatch(postProductsThunk({
      "quantity": count,
      "productId": product.id,
    }))
  }

  return (
    <div className='proddetail'>
      <span className='proddetail__brand'>{product?.brand}</span>
      <h3 className='proddetail__title'>{product?.title}</h3>
      <p>{product?.description}</p>
      <div className='proddetail__container'>
        <ul className='proddetail__list'>
          <li className='proddetail__item'>Price</li>
          <li className='proddetail__item'>$ {product?.price}</li>
        </ul>
      </div>
      <div className='proddetail__buttons'>
        <span className='proddetail__quantity' >Quantity</span>
        <button className='proddetail__less' onClick={handleLess}>-</button>
        <span className='proddetail__count'>{count}</span>
        <button className='proddetail__plus' onClick={hanldePlus}>+</button>
      </div>
      <button className='proddetail__btn' onClick={handleAddCart}>Add to cart</button>
    </div>
  )
}

export default ProdDetail
