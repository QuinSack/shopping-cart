import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { FormatCurrency } from '../utilities/FormatCurrency'
import { useShoppingCart } from '../contexts/ShoppingCartContext'

interface StoreItemProps{
    id: number,
    name: string,
    price: number,
    image: string
  }

const StoreItem = ({id, name, price, image}:StoreItemProps) => {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart();
    const quantity = getItemQuantity(id)
  return (
    <Card className='h-100'>
        <Card.Img variant='top' src={image} height='200px' style={{objectFit: 'fill'}} />
        <Card.Body className='d-flex flex-column'>
            <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                <span className='fs-2'>{name}</span>
                <span className='ms-2 text-muted'>{FormatCurrency(price)}</span>
            </Card.Title>
            <div className='mt-auto'>
                {
                    quantity === 0 ? (
                        <Button className='w-100' onClick={()=>increaseCartQuantity(id)}>Add to Cart</Button>
                    ): (
                        <div className='d-flex align-items-center flex-column' style={{gap: '0.5rem'}}>
                            <div className='d-flex align-items-center justify-content-center' style={{gap: '0.5rem'}}>
                                <Button onClick={()=>decreaseCartQuantity(id)}>-</Button>
                                <div>
                                    <span className='fs-3'>{quantity}</span> in cart
                                </div>
                                <Button onClick={()=>increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button variant='danger' size='sm' onClick={()=>removeFromCart(id)}>Remove</Button>
                        </div>
                    )
                }
            </div>
        </Card.Body>
    </Card>
  )
}

export default StoreItem