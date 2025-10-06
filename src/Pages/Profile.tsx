import { useAuth } from "../Components/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const Profile = () => {
  const { user, logout } = useAuth();
  const [userName, setUserName] = useState<string | null>(null);
  const [loadingName, setLoadingName] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate();

  // Fake placeholders for demo, replace with real Firestore later
  const orders: any[] = []; // e.g. [{ id: "12345", date: "...", status: "Delivered", total: 25.5 }]
  const addresses: any[] = []; // e.g. [{ label: "Home", address: "123 Main St" }]
  const cards: any[] = []; // e.g. [{ brand: "Visa", last4: "1234", exp: "12/25" }]

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

  // Compute initials
  const getInitials = (name?: string | null) => {
    if (!name && user?.email) return user.email.charAt(0).toUpperCase();
    if (!name) return "U";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  if (!user) {
    return (
      <div className="p-6 text-center">
        <p className="text-lg">
          You are not logged in. Please{" "}
          <Link to="/login" className="text-amber-600 underline">
            login
          </Link>{" "}
          to see your profile.
        </p>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-4xl font-bold">My Account</h2>

        {/* Profile header */}
        <div className="mb-12 flex flex-col items-center gap-6 sm:flex-row">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-amber-600 text-5xl font-bold text-white">
            {getInitials(userName)}
          </div>
          <div className="text-center sm:text-left">
            <p className="text-2xl font-bold">
              {loadingName ? "Loading..." : userName ?? "User"}
            </p>
            <p className="text-amber-600/80">{user.email}</p>
          </div>
        </div>

        <div className="space-y-12">
          {/* Order History */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold">Order History</h3>
              {orders.length > 0 && (
                <a
                  className="text-sm font-medium text-amber-600 hover:underline"
                  href="#"
                >
                  View All
                </a>
              )}
            </div>
            {orders.length === 0 ? (
              <div className="p-6 text-center text-gray-500 border border-amber-600/20 rounded-lg bg-white">
                No orders yet.
              </div>
            ) : (
              <div className="overflow-x-auto rounded-lg border border-amber-600/20 bg-white">
                <table className="w-full text-left">
                  <thead className="border-b border-amber-600/20">
                    <tr>
                      <th className="px-6 py-4 font-medium">Order #</th>
                      <th className="px-6 py-4 font-medium">Date</th>
                      <th className="px-6 py-4 font-medium">Status</th>
                      <th className="px-6 py-4 font-medium text-right">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-600/20">
                    {orders.map((o) => (
                      <tr key={o.id}>
                        <td className="px-6 py-4 text-amber-600">#{o.id}</td>
                        <td className="px-6 py-4 text-gray-700">{o.date}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center rounded-full bg-amber-600/20 px-3 py-1 text-xs font-medium text-amber-600">
                            {o.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right font-medium">
                          ₦{o.total}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Saved Addresses */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold">Saved Addresses</h3>
              <button className="rounded-full bg-amber-600 px-4 py-2 text-sm font-bold text-white hover:bg-opacity-90 cursor-pointer">
                Add New
              </button>
            </div>
            {addresses.length === 0 ? (
              <div className="p-6 text-center text-gray-500 border border-amber-600/20 rounded-lg bg-white">
                No saved addresses.
              </div>
            ) : (
              <div className="space-y-4">
                {addresses.map((a) => (
                  <div
                    key={a.label}
                    className="flex items-center justify-between rounded-lg border border-amber-600/20 bg-white p-4"
                  >
                    <div>
                      <p className="font-bold">{a.label}</p>
                      <p className="text-sm text-gray-600">{a.address}</p>
                    </div>
                    <button className="text-gray-600 hover:text-amber-600">
                      ✎
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Payment Methods */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold">Payment Methods</h3>
              <button className="rounded-full bg-amber-600 px-4 py-2 text-sm font-bold text-white hover:bg-opacity-90 cursor-pointer">
                Add New
              </button>
            </div>
            {cards.length === 0 ? (
              <div className="p-6 text-center text-gray-500 border border-amber-600/20 rounded-lg bg-white">
                No saved payment methods.
              </div>
            ) : (
              <div className="space-y-4">
                {cards.map((c, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg border border-amber-600/20 bg-white p-4"
                  >
                    <div>
                      <p className="font-bold">
                        {c.brand} **** {c.last4}
                      </p>
                      <p className="text-sm text-gray-600">Expires {c.exp}</p>
                    </div>
                    <button className="text-gray-600 hover:text-amber-600">
                      ✎
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={() => setShowModal(true)}
          className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition mt-30 cursor-pointer"
        >
          Logout
        </button>
      </div>

      {/* Logout modal */}
      {showModal && (
        <div className="fixed inset-0 bg-neutral-500/20 backdrop-blur-xl flex justify-center items-center z-50 px-4">
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
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Profile;
