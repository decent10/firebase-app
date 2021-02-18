import { useAuth } from "../contexts/AuthContext"
import {Link} from "react-router-dom";

export default   ()=> {
    const { currentUser, logout } = useAuth();
    console.log(currentUser);
return(
    <div className="container mx-auto">
    <div className="flex items-center justify-center h-screen ">
   
        <div className="relative">
         <button className="absolute top-5 right-5 flex item-center " onClick={logout}> <span className="mr-1">Log out </span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg>
    </button>

          <div className="bg-gray-100 rounded-lg shadow-lg p-5 md:p-20 mx-2">
            <div className="text-center">
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
               Hello {currentUser.email}
               
              </h2>
              <pre>{JSON.stringify(currentUser, null, 2)}</pre>
              
            </div>
            <div className="flex flex-wrap mt-10 justify-center">
              <div className="m-3">
                <Link to="/orders" className=" bg-white tracking-wide text-gray-800 font-normal rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                  View Orders
                </Link>
              </div>
             
             
            </div>
          </div>
        </div>
      </div>
    </div>
)

}