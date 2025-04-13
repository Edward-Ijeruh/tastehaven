import { Link } from "react-router-dom";
import heroImage from "../assets/hero_background.jpg";
import fastDelivery from "../assets/fast_delivery.jpg";
import freshIngredients from "../assets/fresh_vegies.jpeg";
import orderAnytime from "../assets/order_anytime.svg";
import securePayment from "../assets/secure_payments.jpg";
import customerSupport from "../assets/customer support.jpg";
import loyaltyProgram from "../assets/loyalty_program.jpg";

const Home = () => {
  return (
    <div className="flex flex-col items-center pb-10">
      {/* Hero Section */}
      <div
        className="relative text-white w-full h-72 sm:h-96 flex flex-col justify-center items-center space-y-4 text-center px-4"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 h-full"></div>
        <h1 className="relative text-3xl md:text-4xl font-bold z-10 text-shadow-lg">
          Welcome to TasteHaven!
        </h1>
        <p className="relative text-xl z-10 text-shadow-lg">
          Delicious meals, fast deliveries!
        </p>
        <Link to="/menu">
          <button className="relative bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg z-10 text-shadow-lg mt-4 hover:bg-yellow-500 transition duration-300 cursor-pointer">
            Order Now
          </button>
        </Link>
      </div>

      {/* Introduction Section */}
      <div className="p-6 max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-semibold">What We Offer</h2>
        <p className="text-lg text-gray-700">
          At TasteHaven, we offer a variety of delicious meals, all prepared
          with fresh ingredients and delivered straight to your door.
        </p>
        {/* Service Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Service Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src={fastDelivery}
              alt="Fast Delivery"
              className="w-24 h-20 sm:w-48 sm:h-42 mx-auto mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              Fast Delivery
            </h3>
            <p className="hidden sm:block text-sm text-gray-600 mt-2">
              Enjoy your meals delivered to your door quickly. We prioritize
              speed without compromising quality.
            </p>
          </div>

          {/* Service Card 2 (Change image to illustration) */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src={freshIngredients}
              alt="Fresh Ingredients"
              className="w-24 h-20 sm:w-48 sm:h-42 mx-auto mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              Fresh Ingredients
            </h3>
            <p className="hidden sm:block text-sm text-gray-600 mt-2">
              We use only the freshest ingredients in our meals to ensure you
              always get the best taste and quality.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src={orderAnytime}
              alt="Order Anytime"
              className="w-24 h-20 sm:w-48 sm:h-42 mx-auto mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              Order Anytime
            </h3>
            <p className="hidden sm:block text-sm text-gray-600 mt-2">
              Whether it’s breakfast, lunch, or dinner, you can place your order
              at any time, and we’ll bring it to you.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src={securePayment}
              alt="Secure Payment"
              className="w-24 h-20 sm:w-48 sm:h-42 mx-auto mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              Secure Payment
            </h3>
            <p className="hidden sm:block text-sm text-gray-600 mt-2">
              Our platform offers secure and reliable payment methods, ensuring
              your transaction is safe and easy.
            </p>
          </div>

          {/* Service Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src={customerSupport}
              alt="Customer Support"
              className="w-24 h-20 sm:w-48 sm:h-42 mx-auto mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              24/7 Customer Support
            </h3>
            <p className="hidden sm:block text-sm text-gray-600 mt-2">
              Our support team is available around the clock to assist with any
              issues or questions you may have.
            </p>
          </div>

          {/* Service Card 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src={loyaltyProgram}
              alt="Loyalty Program"
              className="w-24 h-20 sm:w-48 sm:h-42 mx-auto mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              Loyalty Program
            </h3>
            <p className="hidden sm:block text-sm text-gray-600 mt-2">
              Earn points with every order and unlock exclusive discounts and
              rewards through our loyalty program.
            </p>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="p-6 max-w-5xl mx-auto text-center space-y-6 mt-10 bg-gray-800 text-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold">What Our Customers Say</h2>
          <p className="text-lg text-gray-300">
            Here's what some of our happy customers have to say about
            TasteHaven:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Review 1 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <p className="text-sm text-gray-300 mb-4">
                "The food is always fresh and delicious! The delivery is so
                fast, and the customer service is top-notch. Highly recommend
                TasteHaven!"
              </p>
              <p className="font-bold text-gray-100">- Adebayo A.</p>
            </div>

            {/* Review 2 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <p className="text-sm text-gray-300 mb-4">
                "I love the loyalty program! It’s amazing to get rewards while
                enjoying my favorite meals. TasteHaven has become my go-to!"
              </p>
              <p className="font-bold text-gray-100">- Fatima O.</p>
            </div>

            {/* Review 3 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <p className="text-sm text-gray-300 mb-4">
                "Great variety of dishes and easy online ordering process.
                TasteHaven never disappoints—keep up the excellent work!"
              </p>
              <p className="font-bold text-gray-100">- Kehinde M.</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-yellow-50 p-6 max-w-5xl mx-auto text-center rounded-lg mt-20 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">
            We'd Love to Hear From You!
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            Got questions, feedback, or simply want to say hello? Our team is
            here to help. Contact us today!
          </p>
          <Link to="/contact">
            <button className="mt-4 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-300 cursor-pointer">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
