import React, { useState } from "react";
import "../style/Checkout.css"; // Import the CSS file

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
    coupon: "",
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
    <div className="checkout-container">
      <div>
        <div className="checkout-form-container">
          <h2 className="checkout-form-header">Checkout</h2>
          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="input-group">
              <div>
                <label htmlFor="firstName">
                  First Name <span className="error">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName">
                  Last Name <span className="error">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email">
                Email <span className="error">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="address">
                Address <span className="error">*</span>
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="zipCode">
                Zip Code <span className="error">*</span>
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="city">
                Town/City <span className="error">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="phone">
                Phone Number <span className="error">*</span>
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="country">
                Country <span className="error">*</span>
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="paymentMethod">Payment Method</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
              >
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="UPI">UPI</option>
              </select>
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  name="acceptTandC"
                  checked={formData.acceptTandC}
                  onChange={handleChange}
                />
                I accept the Terms and Conditions
              </label>
            </div>

            <div>
              <button type="submit">Place Order</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
