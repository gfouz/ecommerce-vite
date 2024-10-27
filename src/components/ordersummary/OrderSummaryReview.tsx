import React from 'react';
import { useCartStore } from '../../store/store.ts';
import Layout from '../../components/layout/Layout.tsx';
import { Button, Button as SfButton } from '@nextui-org/button';
import { Link as SfLink } from '@nextui-org/link';
import { Input } from '@nextui-org/input';

export default function OrderSummary() {
  const [shipping, setShipping] = React.useState(0);
  const cart = useCartStore((state) => state.cart);
  const subtotal = cart.reduce(
    (acc, product) => acc + product?.quantity * product?.price,
    0,
  );
  const quantity =
    cart.length > 0
      ? cart.reduce((acc, product) => acc + product?.quantity, 0)
      : 0;
  React.useEffect(() => {
    setShipping(() => (subtotal > 100 || cart.length == 0 ? 0 : 5.75));
  }, [cart]);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);

  return (
    <Layout>
      <div>
        <div className='md:shadow-lg md:rounded-md md:border md:border-neutral-100'>
          <div className='flex justify-between items-end bg-neutral-100 md:bg-transparent py-2 px-4 md:px-6 md:pt-6 md:pb-4'>
            <p className='typography-headline-4 font-bold md:typography-headline-3'>
              Order Summary
            </p>
            <p className='typography-text-base font-medium'>
              (Items: {quantity})
            </p>
          </div>
          <div className='px-4 pb-4 mt-3 md:px-6 md:pb-6 md:mt-0'>
            <div className='flex justify-between typography-text-base pb-4'>
              <div className='flex flex-col grow pr-2'>
                <p className='typography-text-xs text-neutral-500'>Subtotal</p>
                <p className='typography-text-xs text-secondary-700'>Total (Included Taxes)</p>
                <p className='my-2'>Shipping</p>
              </div>
              <div className='flex flex-col text-right'>
                <p className='typography-text-xs text-neutral-500'>
                  {formatPrice(subtotal)}
                </p>
                <p>{formatPrice( (subtotal + shipping ) / 0.95 ) }</p>
                <p className='my-2'>{formatPrice(shipping)}</p>
              </div>
            </div>
            <p className='px-3 py-1.5 bg-secondary-100 text-secondary-700 typography-text-sm rounded-md text-center mb-4'>
              You are saving ${Math.abs(shipping == 0 ? 5.75 : 0).toFixed(2)} on your order
              today!
            </p>
            <div className='flex justify-between typography-headline-4 md:typography-headline-3 font-bold pb-4 mb-4 border-b border-neutral-200'>
              <p>Total</p>
              <p>{formatPrice( (subtotal + shipping ) / 0.95 ) }</p>
            </div>
            <form
              className='flex gap-x-2 py-4 border-y border-neutral-200 mb-4'
            >
              <Input placeholder='Enter promo code' />
              <Button type='submit'>Apply</Button>
            </form>
            <SfButton size='lg' className='w-full'>
              Place Order And Pay
            </SfButton>
            <div className='typography-text-sm mt-4 text-center'>
              By placing my order, you agree to our{' '}
              <SfLink href='#'>Terms and Conditions</SfLink> and our{' '}
              <SfLink href='#'>Privacy Policy.</SfLink>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
