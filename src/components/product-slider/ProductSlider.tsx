import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

const products = Array.from(Array(5), (_, i) => ({
  id: i.toString(),
  name: 'Athletic mens walking sneakers',
  price: '$2,345.99',
  img: {
    src: 'images/coffee-tata.jpg',
    alt: 'White sneaker shoe',
  },
}));

function ButtonPrev({ disabled, ...attributes }: { disabled?: boolean }) {
  return (
    <Button
      className='absolute !rounded-full z-10 left-4 bg-white hidden md:block'
      variant="ghost"
      size="lg"
      {...attributes}
    >
      Left
    </Button>
  );
}

ButtonPrev.defaultProps = { disabled: false };

function ButtonNext({ disabled, ...attributes }: { disabled?: boolean }) {
  return (
    <Button
      className='absolute !rounded-full z-10 right-4 bg-white hidden md:block'
      variant="ghost"
      size="lg"
      {...attributes}
    >
      Right
    </Button>
  );
}

ButtonNext.defaultProps = { disabled: false };

export default function ProductSliderBasic() {
  return (
    <div
      className="relative m-auto gap-4 flex overflow-scroll py-4 items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      {products.map(({ id, name, price, img }) => (
        <div
          key={id}
          className="first:ms-auto last:me-auto ring-1 ring-inset ring-neutral-200 shrink-0 rounded-md hover:shadow-lg w-[148px] lg:w-[192px]"
        >
          <div className="relative">
            <Link href="#" className="block">
              <img
                src={img.src}
                alt={img.alt}
                className="block object-cover h-auto rounded-md aspect-square lg:w-[190px] lg:h-[190px]"
                width="146"
                height="146"
              />
            </Link>
          </div>
          <div className="p-2 border-t border-neutral-200 typography-text-sm">
            <Link href="#"  className="no-underline">
              {name}
            </Link>
            <span className="block mt-2 font-bold">{price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
