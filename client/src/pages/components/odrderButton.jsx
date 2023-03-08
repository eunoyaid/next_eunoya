import React from "react";

const OrderButton = () => {
    return (
        <div className="button-order w-[80%] mx-auto border border-border-card p-2 bg-white rounded-lg flex gap-x-3">
            <button className="btn-order w-[80%] bg-primary rounded-lg px-3 py-2 text-white"> pesan sekarang</button>
            <button className="btn-order w-auto bg-primary rounded-lg px-3 py-2 text-white"> keranjang</button>
      </div>
  );
};

export default OrderButton;
