import React from "react";
import CartItems from "./cartitems/CartItems";
import CartForm from "./cartfotm/CartForm";

const CartBox = () => {
  return (
    <div className="pb-[50px] md:pb-[100px] lg:pb-[150px] xl:pb-[200px]">
      <div className="container">
        <div className="CartBox bg-[#EDEDED] px-8 py-10 rounded-lg">
          <h5 className="text-[#5B5B5B] text-base uppercase font-bold mb-4">
            cart <span className="capitalize font-light">(50 item)</span>
          </h5>
          <div className="flex items-start flex-col lg:flex-row justify-center gap-16">
            <CartItems />
            <CartForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBox;
