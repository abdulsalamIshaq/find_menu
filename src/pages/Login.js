import { Link } from "react-router-dom";
import AuthComponent from "../components/AuthComponent";

function Login() {
    return (
        <AuthComponent title="Welcome Back">
            <form className="flex flex-col gap-3" method="GET">
                <div className="">
                    <label for="email" className="text-sm">Email Address</label>
                    <input type="text" name="email" className="border border-black rounded-2xl py-3 px-3 w-full mt-1" placeholder="email@cbaeresturant.com" />
                </div>
                <div className="">
                    <label for="password" className="text-sm">Password</label>
                    <input type="text" name="password" className="border border-black rounded-2xl py-3 px-3 w-full mt-1" placeholder="***********************" />
                </div>
                <div className="flex flex-row justify-between text-sm mt-3">
                    <div className="">
                        <input type="checkbox" name="signedIn" className="" />
                        <span className="px-2">Keep me signed in</span>
                    </div>
                    <Link to="#" className="text-green-700 underline block">Forgot password?</Link>
                </div>
                <button className="block text-sm font-semibold py-3 rounded-3xl bg-black text-white align-middle mt-3">
                    Sign in
                </button>
            </form>
            <div className="text-center mt-3">
                <span className="text-sm">New user? <Link to="/register" className="text-green-700 underline">Create an account</Link></span>
            </div>
        </AuthComponent>
    );
}

export default Login;