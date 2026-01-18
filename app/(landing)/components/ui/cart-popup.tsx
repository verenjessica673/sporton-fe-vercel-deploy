import priceFormat from '@/app/utils/price';
import Image from 'next/image';
import Button from './button';
import { FiTrash2 } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from 'next/navigation';

export const cartList = [
    {
        name: "SportOn Product2",
        category: "Running",
        qty: 1,
        price: 250000,
        ImageUrl: "product-2.png",
    },

        {
        name: "SportOn Product4",
        category: "Running",
        qty: 2,
        price: 485000,
        ImageUrl: "product-4.png",
    },

        {
        name: "SportOn Product6",
        category: "Running",
        qty: 2,
        price: 650000,
        ImageUrl: "product-6.png",
    },
];

const CartPopup = () => {
  const {push} = useRouter();

  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.qty, 
    0
  );

  const handleCheckout = () => {
    push("/checkout");
  }

    return (
      <div className="absolute bg-white right-0 top-15 shadow-xl shadow-black/10 border border-gray-200 w-90 z-10">
        <div className="p-4 border-b border-gray-200 font-bold text-center">Shopping Cart</div>

      {cartList.map((item, index) => (
        <div key={index} className="flex gap-4 p-4 border-b border-gray-200">
          <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
            <Image
              src={'/img/Product/' + item.ImageUrl}
              width={63}
              height={63}
              alt={item.name}
              className="aspect-square object-contain"
            />
          </div>
          <div className="self-center">
              <div className="text-sm font-medium">{item.name}</div>
              <div className="flex gap-3 font-medium text-xs">
                <div>{item.qty}x</div>
                <div className="text-primary">{priceFormat(item.price)}</div>
              </div>
          </div>
            <Button
              size="small"
              variant="ghost"
              className="w-7 h-7 p-0! self-center ml-auto"
            >
              <FiTrash2 />
            </Button>
          </div>    
      ))}
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between font-semibold">
          <div className="text-sm">Total</div>
          <div className="text-primary text-xs">
            {priceFormat(totalPrice)}
          </div>
        </div>
        <Button
          variant="dark"
          size="small"
          className="w-full mt-4"
          onClick={handleCheckout}
        >
          Checkout Now <FiArrowRight />
        </Button>
      </div>
      </div>
    );
}

export default CartPopup;