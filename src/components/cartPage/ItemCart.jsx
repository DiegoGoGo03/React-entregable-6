import React from 'react';
import './styles/itemCart.css';
import { useDispatch } from 'react-redux';
import { deleteProductThunk, updateProductThunk } from '../../store/slices/cart.slice';

const ItemCart = ({ prod }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProductThunk(prod.id));
  };

  const handleLess = () => {
    if (prod.quantity > 1) {
      dispatch(updateProductThunk(prod.id, {
        "quantity": prod.quantity - 1,
      }));
    }
  };

  const handlePlus = () => {
    dispatch(updateProductThunk(prod.id, {
      "quantity": prod.quantity + 1,
    }));
  };

  const imageUrl = prod.product && prod.product.image && prod.product.image.length > 0 ? prod.product.image[0].url : '';

  return (
    <article className='itemcart'>
      <h3 className='itemcart__title'>{prod.product?.title}</h3>
      <figure className='itemcart__img'>
        <img src={imageUrl} alt="product image" />
      </figure>
      <div className='itemcart__buttons'>
        <button onClick={handleLess}>-</button>
        <span>{prod.quantity}</span>
        <button onClick={handlePlus}>+</button>
      </div>
      <button onClick={handleDelete} className='itemcart__btn'>Delete</button>
      <p className='itemcart__total'>Total: $ <span>{prod.product && prod.product.price ? prod.product.price * prod.quantity : 'Calculating...'}</span></p>
    </article>
  );
};

export default ItemCart;
