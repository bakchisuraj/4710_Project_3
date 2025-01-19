import React, { useState } from "react";

function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    zipCode: "",
    city: "",
    phone: "",
    country: "",
    coupon:"",
    paymentMethod: "Credit Card",
    addressType: "Residential",
    isDefaultAddress: false,
    isDefaultDetails: false,
    cardNumber: "",
    upiId: "",
    acceptTandC: false,
    acceptPromotionalEmails: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  const orderPrice = 1000; // Sample price for the order
  const taxRate = 0.1; // Sample tax rate of 10%
  const taxAmount = orderPrice * taxRate;
  const totalAmount = orderPrice + taxAmount;

  return (
    <div className="bg-gradient-to-r from-blue-200 to-indigo-300 max-w-full mx-auto p-6 flex space-x-8">
      <div className="flex-1">
        <div className="max-w-xl mt-10 mb-10 mx-auto p-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Checkout</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex space-x-4">
              <div className="w-full space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="w-full space-y-2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-700"
              >
                Zip Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                Town/City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country/Region <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Address Type <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-4">
                <div>
                  <input
                    type="radio"
                    id="residential"
                    name="addressType"
                    value="Residential"
                    checked={formData.addressType === "Residential"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="residential">Residential</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="office"
                    name="addressType"
                    value="Office"
                    checked={formData.addressType === "Office"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="office">Office</label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="w-1/3 mt-10 mb-10 p-6 bg-white shadow-md rounded-md">
        <h3 className="text-xl font-semibold mb-4">Order Details</h3>
        <div className="space-y-2">
          <p className="text-sm text-gray-700">Price: {orderPrice}</p>
          <p className="text-sm text-gray-700">Tax (10%): {taxAmount}</p>
          <p className="text-sm font-bold">Total: ${totalAmount}</p>
        </div>
        <br />
        <div className="space-y-2">
            <label
              htmlFor="coupon"
              className="block text-sm font-medium text-gray-700"
            >
              Enter Coupon Code <span className="text-red-500"></span>
            </label>
            <input
              type="text"
              id="coupon"
              name="coupon"
              value={formData.coupon}
              onChange={handleChange}
              className=" p-0 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Payment Method <span className="text-red-500">*</span>
          </label>
          <div className="">
            <div className="flex items-center">
              <input
                type="radio"
                id="COD"
                name="paymentMethod"
                value="Cash on Delivery"
                checked={formData.paymentMethod === "Cash on Delivery"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="COD">Cash on Delivery (COD)</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="POD"
                name="paymentMethod"
                value="Pay on Delivery"
                checked={formData.paymentMethod === "Pay on Delivery"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="POD">Pay on Delivery (POD)</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="UPI"
                name="paymentMethod"
                value="UPI"
                checked={formData.paymentMethod === "UPI"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="UPI">UPI</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="CreditCard"
                name="paymentMethod"
                value="Credit Card"
                checked={formData.paymentMethod === "Credit Card"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="CreditCard">Credit Card</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="DebitCard"
                name="paymentMethod"
                value="Debit Card"
                checked={formData.paymentMethod === "Debit Card"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="DebitCard">Debit Card</label>
            </div>
          </div>
        </div>

        {formData.paymentMethod === "Credit Card" ||
        formData.paymentMethod === "Debit Card" ? (
          <div className="space-y-2">
            <label
              htmlFor="cardNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Card Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        ) : null}

        {formData.paymentMethod === "Credit Card" ||
        formData.paymentMethod === "Debit Card" ? (
          <div className="flex space-x-4">
            <div className="w-full space-y-2">
              <label
                htmlFor="expiry"
                className="block text-sm font-medium text-gray-700"
              >
                Expiry Date <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="expiry"
                name="expiry"
                value={formData.expiry}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="w-full space-y-2">
              <label
                htmlFor="cvv"
                className="block text-sm font-medium text-gray-700"
              >
                CVV <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        ) : null}

        {formData.paymentMethod === "UPI" ? (
          <div className="space-y-2">
            <label
              htmlFor="upiOption"
              className="block text-sm font-medium text-gray-700"
            >
              Select UPI Method <span className="text-red-500">*</span>
            </label>
            <select
              id="upiOption"
              name="upiOption"
              value={formData.upiOption}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="GPay">Google Pay (GPay)</option>
              <option value="Cred">Cred</option>
              <option value="Amazon Pay">Amazon Pay</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>
        ) : null}

        {formData.paymentMethod === "UPI" ? (
          <div className="space-y-2">
            <label
              htmlFor="upiId"
              className="block text-sm font-medium text-gray-700"
            >
              UPI ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="upiId"
              name="upiId"
              value={formData.upiId}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        ) : null}

        <div className="space-y-2">
          <input
            type="checkbox"
            id="acceptTandC"
            name="acceptTandC"
            checked={formData.acceptTandC}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <label htmlFor="acceptTandC" className="text-sm text-gray-700">
            I accept the{" "}
            <span className="text-blue-600">Terms & Conditions</span> and that
            my details will be used for billing.
          </label>
        </div>

        <div className="space-y-2">
          <input
            type="checkbox"
            id="acceptPromotionalEmails"
            name="acceptPromotionalEmails"
            checked={formData.acceptPromotionalEmails}
            onChange={handleChange}
            className="mr-2"
          />
          <label
            htmlFor="acceptPromotionalEmails"
            className="text-sm text-gray-700"
          >
            I want to receive promotional emails and invoices on email.
          </label>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
