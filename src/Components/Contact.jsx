import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-300 p-20">
      <footer class="bg-gray-800 text-white py-8 w-full h-screen p-20">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-between mt-40">
            {/* <!-- Logo and Description --> */}
            <div class="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h2 class="text-xl font-bold mb-2">React Basics</h2>
              <p class="text-gray-400">
                Experience luxury and comfort at the heart of nature. Your
                perfect getaway awaits.
              </p>
            </div>

            {/* <!-- Quick Links --> */}
            <div class="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
              <ul class="text-gray-400">
                <li>
                  <a href="#" class="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white">
                    Rooms & Suites
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white">
                    Dining
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white">
                    Spa & Wellness
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Contact Information --> */}
            <div class="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
              <ul class="text-gray-400">
                <li>1234 Paradise Road, Island</li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:info@hotelodisej.com"
                    class="hover:text-white"
                  >
                    umeshkumarmahto1305@gmail.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a href="tel:+123456789" class="hover:text-white">
                    6202993854
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Social Media Links --> */}
            <div class="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
              <div class="flex space-x-4 text-gray-400">
                <a href="#" class="hover:text-white">
                  <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.68a4.23 4.23 0 001.84-2.34 8.48 8.48 0 01-2.69 1.03 4.2 4.2 0 00-7.2 3.83 11.95 11.95 0 01-8.69-4.4 4.21 4.21 0 001.3 5.61 4.19 4.19 0 01-1.9-.52v.05a4.21 4.21 0 003.37 4.13 4.25 4.25 0 01-1.89.07 4.22 4.22 0 003.95 2.93A8.5 8.5 0 012 18.54 12.01 12.01 0 007.29 20c7.59 0 11.74-6.28 11.74-11.73 0-.18 0-.35-.01-.53a8.36 8.36 0 002.07-2.13z" />
                  </svg>
                </a>
                <a href="#" class="hover:text-white">
                  <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 3.65 8.06 8.36 9.03.61.11.82-.26.82-.58 0-.29-.01-1.05-.01-2.06-3.38.73-4.09-1.63-4.09-1.63-.55-1.41-1.34-1.79-1.34-1.79-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.7-.3-5.53-1.35-5.53-6.01 0-1.33.47-2.42 1.24-3.28-.12-.31-.54-1.56.12-3.24 0 0 1.01-.32 3.3 1.24a11.4 11.4 0 016.01 0c2.28-1.56 3.3-1.24 3.3-1.24.67 1.68.25 2.93.12 3.24.77.86 1.24 1.95 1.24 3.28 0 4.68-2.84 5.7-5.54 6 .43.37.82 1.11.82 2.24 0 1.62-.01 2.93-.01 3.32 0 .32.2.7.83.58A10 10 0 0022 12.03c0-5.52-4.48-10-10-10z" />
                  </svg>
                </a>
                <a href="#" class="hover:text-white">
                  <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 3.65 8.06 8.36 9.03.61.11.82-.26.82-.58 0-.29-.01-1.05-.01-2.06-3.38.73-4.09-1.63-4.09-1.63-.55-1.41-1.34-1.79-1.34-1.79-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.7-.3-5.53-1.35-5.53-6.01 0-1.33.47-2.42 1.24-3.28-.12-.31-.54-1.56.12-3.24 0 0 1.01-.32 3.3 1.24a11.4 11.4 0 016.01 0c2.28-1.56 3.3-1.24 3.3-1.24.67 1.68.25 2.93.12 3.24.77.86 1.24 1.95 1.24 3.28 0 4.68-2.84 5.7-5.54 6 .43.37.82 1.11.82 2.24 0 1.62-.01 2.93-.01 3.32 0 .32.2.7.83.58A10 10 0 0022 12.03c0-5.52-4.48-10-10-10z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
            <p>&copy; 2024 Hotel Odisej. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
