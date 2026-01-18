const OrderInformation = () => {
  return (
    <div className="bg-white">
      <div className="px-5 py-4 border-gray-200">
        <h2 className="font-bold text-lg">Order Information</h2>
      </div>
      <div className="p-5">
        <div className="input-group">
          <label htmlFor="customerName">Full Name</label>
          <input
            type="text"
            placeholder="Type your full name"
            id="customerName"
            name="customerName"
          />
        </div>
        <div className="input-group">
          <label htmlFor="number">Whatsapp Number</label>
          <input
            type="text"
            placeholder="Type your Whatsapp number"
            id="number"
            name="number"
          />
        </div>
        <div className="input-group">
          <label htmlFor="shippingAddress">Full Name</label>
          <textarea
            placeholder="Type your shipping address"
            id="shippingAddress"
            name="shippingAddress"
            rows={7}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
