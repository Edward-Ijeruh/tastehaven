import { useAuth } from "../Components/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Utensils, ShoppingCart } from "lucide-react";

const Profile = () => {
  const { user, logout } = useAuth();
  const [userName, setUserName] = useState<string | null>(null);
  const [loadingName, setLoadingName] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserName = async () => {
      if (user) {
        try {
          const userDocRef = doc(db, "users", user.uid);
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            setUserName(userDocSnap.data().userName);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoadingName(false);
        }
      }
    };

    fetchUserName();
  }, [user]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (!user) {
    return (
      <div className="p-6 text-center">
        <p className="text-lg">
          You are not logged in. Please{" "}
          <Link to="/login" className="text-blue-500 underline">
            login
          </Link>{" "}
          to see your profile.
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center mt-4 px-4 relative">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Your Profile</h2>

        <div className="space-y-4">
          <div className="text-center">
            <p className="text-lg font-semibold">
              Welcome{" "}
              {loadingName ? (
                <span className="text-gray-400 animate-pulse">loading...</span>
              ) : (
                (userName ?? "User")
              )}
              !
            </p>
            <p className="text-sm text-gray-600">
              <strong>Email:</strong> {user.email}
            </p>
          </div>

          <div className="flex flex-col gap-3 mt-6">
            <Link
              to="/menu"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition"
            >
              <Utensils size={18} /> Go to Menu
            </Link>
            <Link
              to="/cart"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition"
            >
              <ShoppingCart size={18} /> Go to Cart
            </Link>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition mt-6"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Confirm Logout
            </h3>
            <p className="mb-6 text-center text-gray-600">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
