import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default () => {
  const { currentUser, logout } = useAuth();
  return (
    <nav className="font-sans mb-5 flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <Link
          to="/"
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          Home
        </Link>
      </div>
      <div>
        {currentUser ? (
          <>
            <Link
              to="/orders"
              className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-blue-700 uppercase transition bg-transparent border-2 border-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-100 focus:outline-none mr-6"
            >
              Orders
            </Link>
            <button
              onClick={logout}
              className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
            >
              Log out
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};
