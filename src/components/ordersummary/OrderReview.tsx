export default function OrderReview() {
  return (
    <div
      id='webcrumbs'
      className='w-[320px] min-h-[400px] bg-neutral-50 shadow rounded-lg p-4'
    >
      <h2 className='font-title text-2xl mb-4'>Order Review</h2>
      <div className='mb-4'>
        <h3 className='font-semibold text-lg'>Delivery Address</h3>
        <p>John Doe</p>
        <p>123 Main Street</p>
        <p>City, State, 12345</p>
      </div>
      <div className='mb-4'>
        <h3 className='font-semibold text-lg'>Items</h3>
        <div className='flex items-center justify-between py-2'>
          <div className='flex items-center'>
            <img
              src='https://tools-api.webcrumbs.org/image-placeholder/50/50/shoes/1'
              alt='Item 1'
              width='50'
              height='50'
              className='object-cover rounded-md'
            />
            {/* Photo provided by Pexels */}
            <span className='ml-2'>Running Shoes</span>
          </div>
          <span>$50.00</span>
        </div>
        <div className='flex items-center justify-between py-2'>
          <div className='flex items-center'>
            <img
              src='https://tools-api.webcrumbs.org/image-placeholder/50/50/jacket/1'
              alt='Item 2'
              width='50'
              height='50'
              className='object-cover rounded-md'
            />
            {/* Photo provided by Pexels */}
            <span className='ml-2'>Winter Jacket</span>
          </div>
          <span>$120.00</span>
        </div>
        <div className='flex items-center justify-between py-2'>
          <div className='flex items-center'>
            <img
              src='https://tools-api.webcrumbs.org/image-placeholder/50/50/hat/1'
              alt='Item 3'
              width='50'
              height='50'
              className='object-cover rounded-md'
            />
            {/* Photo provided by Pexels */}
            <span className='ml-2'>Baseball Cap</span>
          </div>
          <span>$25.00</span>
        </div>
      </div>
      <div className='mb-4'>
        <h3 className='font-semibold text-lg'>Payment Information</h3>
        <p>Card ending in 1234</p>
      </div>
      <div className='mb-4'>
        <h3 className='font-semibold text-lg'>Total</h3>
        <p className='text-xl font-bold'>$195.00</p>
      </div>
      <div className='flex gap-2'>
        <button className='bg-primary text-white rounded-md px-4 py-2'>
          Edit Order
        </button>
        <button className='bg-primary text-white rounded-md px-4 py-2'>
          Confirm Order
        </button>
      </div>
    </div>
  );
}
