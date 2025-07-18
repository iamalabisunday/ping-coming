import React, { useState } from "react";
import logo from "./images/logo.svg";
import image from "./images/illustration-dashboard.png";

export default function ComingSoonPage() {
  // State variable
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Validate of Email address
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // no input
    if (email === "") {
      setSuccessMessage("");
      setEmail("");
      setErrorMessage("Whoops! It looks like you forgot to add your email");
    } else if (!validateEmail(email)) {
      // invalid email
      setSuccessMessage("");
      setEmail("");
      setErrorMessage("Please provide a valid email address");
    } else {
      // valid email
      setErrorMessage("");
      setEmail("");
      setSuccessMessage("Success! Thank you for subscribing");
    }
  };

  return (
    <div className="w-screen h-screen m-auto px-6 py-8 flex items-center justify-center">
      <main className="max-w-[90em] h-full flex flex-col items-center justify-around gap-8">
        <header className="flex flex-col items-center justify-center">
          <img src={logo} alt="logo" className="w-16 md:w-18 pt-4 " />
          <p className="text-[1.8rem] font-[100] pt-4 text-center md:text-[2.5rem] text-[#969696]">
            We are launching{" "}
            <span className="font-[500] text-[#141F29]">soon!</span>
          </p>
          <p className="text-[1rem] md:text-1xl font-[300] pt-2 text-center text-[#969696]">
            Subscribe and get notified
          </p>

          {/* Search Form */}
          <form
            onSubmit={handleSubmit}
            method="POST"
            action="submit"
            className="md:w-120 w-full flex flex-col md:flex-row items-start justify-center pt-8 gap-4"
          >
            {/* Input + Message */}
            <div className="w-full md:w-[30em] flex flex-col gap-2">
              <input
                type="text"
                value={email}
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address..."
                className={`w-full px-6 py-2 rounded-full outline-none placeholder:text-[0.75rem] placeholder:text-[#cddfff] placeholder:font-light ${
                  errorMessage ? "border-1 border-red-500" : ""
                } ${successMessage ? "border-1 border-green-500" : ""} ${
                  !errorMessage && !successMessage
                    ? "border border-[#CDDFFF]"
                    : ""
                }`}
              />

              {/* Error Message */}
              {errorMessage && (
                <p className="text-[0.65rem] text-center italic md:text-left text-red-600 mt-1 ml-4">
                  {errorMessage}
                </p>
              )}

              {/* Success Message */}
              {successMessage && (
                <p className="text-[0.65rem] text-center italic md:text-left text-green-600 mt-1 ml-4">
                  {successMessage}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full md:w-auto h-auto bg-[#4D7BF8] hover:bg-[#4d7bf8d3] text-white text-[0.8rem] px-10 py-3 whitespace-nowrap rounded-full cursor-pointer"
            >
              Notify Me
            </button>
          </form>
        </header>

        {/* {Image Section} */}
        <picture className="w-fit">
          <img
            src={image}
            alt="illustration-dashboard"
            className="w-full md:w-[30em]"
          />
        </picture>

        {/* SOcial Media Icons */}
        <section className="w-full h-auto flex flex-col items-center justify-center text-[0.75rem] font-light gap-4">
          <section className="w-full flex flex-row gap-4 items-center justify-center  text-[1rem]">
            <div className="text-[#4D7BF8] hover:text-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer border-1 border-[#ededed] hover:bg-[#4D7BF8]">
              <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div className="text-[#4D7BF8] hover:text-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer border-1 border-[#ededed] hover:bg-[#4D7BF8]">
              <i class="fa-brands fa-twitter"></i>
            </div>
            <div className="text-[#4D7BF8] hover:text-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer border-1 border-[#ededed] hover:bg-[#4D7BF8]">
              <i class="fa-brands fa-instagram"></i>
            </div>
          </section>
          <p className="text-center w-full md:mb-[2rem] text-[#969696]">
            &copy; Copyright Ping. All rights reserved.
          </p>
        </section>
      </main>
    </div>
  );
}
