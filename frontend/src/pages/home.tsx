import React from "react";
import { Link } from "react-router";
import { MapPin, Star, Users } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-6 py-4 shadow-sm bg-gradient-to-r from-orange-100 via-orange-50 to-white">
        <h1 className="text-2xl font-bold text-orange-600">
          Smart Community Map
        </h1>
        <div className="space-x-6 hidden md:flex md:items-center">
          <Link to="/" className="hover:text-orange-500 font-medium">
            Home
          </Link>
          <Link to="/map" className="hover:text-orange-500 font-medium">
            Explore
          </Link>
          {/* <Link to="/contact" className="hover:text-orange-500 font-medium">
            Contact
          </Link> */}
          <Link
            to="/login"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg shadow font-medium"
          >
            Login
          </Link>
        </div>
        <button className="md:hidden text-orange-600 focus:outline-none">
          ☰
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 md:px-20 bg-gradient-to-r from-orange-50 via-white to-orange-100">
        <div className="max-w-lg text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Discover & Share{" "}
            <span className="text-orange-600">Amazing Places</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Tag your favorite spots, share experiences, and help others explore
            trusted community-reviewed locations — powered by real-time maps and
            geospatial data.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/register"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg"
            >
              Join the Community
            </Link>
            <Link
              to="/map"
              className="border border-orange-500 hover:bg-orange-100 text-orange-600 px-6 py-3 rounded-lg font-medium"
            >
              Explore Map
            </Link>
          </div>
        </div>

        <div className="mt-10 md:mt-0 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="Community Map Illustration"
            className="w-64 md:w-96 drop-shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-10">
          What You Can Do
        </h3>
        <div className="grid gap-10 md:grid-cols-3">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Tag Locations</h4>
            <p className="text-gray-600">
              Mark interesting spots like restaurants, parks, and cafes on the
              map to share with your local community.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <Star className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Rate & Review</h4>
            <p className="text-gray-600">
              Leave reviews and ratings so others can discover the best and most
              trusted places around you.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Community Driven</h4>
            <p className="text-gray-600">
              Connect with people in your area, share local insights, and build
              a network of verified recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-500 via-red-400 to-orange-600 py-16 text-center text-white">
        <h3 className="text-3xl font-bold mb-4">
          Tag. Review. Explore Together.
        </h3>
        <p className="text-lg mb-8">
          Join our community map and make discovering great locations easier for
          everyone.
        </p>
        <Link
          to="/register"
          className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 shadow-md"
        >
          Get Started
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-100 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Smart Community Map | Built with ❤️ for
        Explorers
      </footer>
    </div>
  );
};

export default Home;
