"use client";

import Image from "next/image";
import { cartList } from "../ui/cart-popup";
import priceFormat from "@/app/utils/price";
import Button from "../ui/button";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";

const CartItems = () => {
    const {push} = useRouter();

    const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

    return (
        <div className="bg-white">
            <div className="px-5 py-4 border-gray-200">
              <h2 className="font-bold text-lg">Cart Items</h2>
            </div>
            <div className="overflow-auto max-h-[300px]">
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
        </div>

        <div className="border-t border-gray-200 p-4">
          <div className="flex justify-between font-semibold">
            <div className="text-sm">Total</div>
            <div className="text-primary text-xs">
              {priceFormat(totalPrice)}
            </div>
          </div>
          <Button
            variant="dark"
            className="w-full mt-4"
            onClick={() => push('/payment')}
          >
            <FiCreditCard />
            Proceed to Payment
          </Button>
        </div>
        </div>
    );
};

export default CartItems