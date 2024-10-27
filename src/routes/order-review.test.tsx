import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import OrderReview from './order-review.tsx';

describe('OrderReview Component', () => {
  const items = [
    { name: 'Product 1', price: 50.0, quantity: 2 },
    { name: 'Product 2', price: 30.0, quantity: 1 },
    { name: 'Product 3', price: 20.0, quantity: 3 },
  ];


  

  it('displays the correct total', () => {
    render(<OrderReview />);

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = subtotal >= 100 ? 0 : 5.75;
    const Total = subtotal + shipping;
    expect(screen.getByText(`$${Total}`)).toBeTruthy();
  });
});
