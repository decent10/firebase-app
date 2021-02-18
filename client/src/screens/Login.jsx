
import  { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
export default ()=> {
const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
const history = useHistory()
const { login } = useAuth()
async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }
return(
    <div className="container mx-auto px-4 flex items-center justify-center w-1/2 mt-8">
    <form className="bg-gradient-to-r from-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full" onSubmit={handleSubmit} >
        <div className="mb-4">
          <label className="block text-grey-darker text-sm font-normal uppercase mb-2" htmlFor="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" ref={emailRef} required placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="block text-grey-darker text-sm font-normal uppercase mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" ref={passwordRef} required type="password" placeholder="******************" />
        </div>
        <div className="w-full text-center">
          <button disabled={loading} className="bg-green-400   w-1/2 hover:bg-green-600 text-white font-normal uppercase py-2 px-4 rounded" type="submit">
            Sign In
          </button>
        </div>
      </form>
      </div>
)
}