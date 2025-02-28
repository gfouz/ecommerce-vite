import { Button } from '@nextui-org/button';
import Close from '../icons/Close.tsx';
import { removeFromCart } from '../../store/useDispatch.ts';
import { IActionsButton } from './types.ts';

export default function MinusButton({ product, dispatch }: IActionsButton) {
  return (
    <Button
      className='text-tiny text-white bg-slate-800 w-[40%]'
      variant='flat'
      color='default'
      radius='lg'
      size='sm'
      onClick={() => {
        removeFromCart(dispatch, product);
      }}
    >
      <Close color='orange' size={15} />
    </Button>
  );
}
