import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const CheckOut = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="register-form">
      <div id="services" className="container">
        <div className="row">
          <h1 className="text-primary text-center mt-5"> Our Services</h1>
          <div className="services-container">
            {services.slice(
              0,
              3
            ).map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
          </div>
        </div>
      </div>
      <h2 style={{ textAlign: "center" }}>Please Booking</h2>
      <form>
        <input type="text" name="name" id="" placeholder="Your Name" />

        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <input type="number" name="phone" id="" placeholder="Phone" required />
        <input type="text" name="text" id="" placeholder="Home Address" required />
        <input type="checkbox" name="terms" id="terms" />
        <label htmlFor="terms">Accept Terms and Conditions</label>
        <input
          className="w-50 mx-auto btn btn-primary mt-2"
          type="submit"
          value="Booking Now"
        />
      </form>
    </div>
  );
};

export default CheckOut;
