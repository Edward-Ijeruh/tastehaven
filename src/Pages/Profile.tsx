import { useAuth } from "../Components/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { Utensils, ShoppingCart } from "lucide-react";

const Profile = () => {
  const { user, logout } = useAuth();
  const [userName, setUserName] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const fetchUserName = async () => {
        try {
          const userDocRef = doc(db, "users", user.uid);
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            setUserName(userDocSnap.data().userName);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      fetchUserName();
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="flex flex-col p-6">
      <div className="flex-grow">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        {user ? (
          <div>
            <div className="space-y-2">
              <p className="text-lg">Welcome {userName ? userName : "User"}!</p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <Link
                to="/menu"
                className="flex items-center gap-2 mt-10 px-4 py-2 bg-yellow-400 text-black rounded w-40"
              >
                Go to Menu <Utensils size={18} />
              </Link>
              <Link
                to="/cart"
                className="flex items-center mb-10 gap-2 px-4 py-2 bg-yellow-400 text-black rounded w-40"
              >
                Go to Cart <ShoppingCart size={18} />
              </Link>
            </div>
          </div>
        ) : (
          <p>
            You are not logged in. Please
            <a href="/login" className="text-blue-500">
              login
            </a>{" "}
            to see your profile.
          </p>
        )}
      </div>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer mt-5 w-25 text-center"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
