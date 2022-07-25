import { Link } from "react-router-dom";
import AuthComponent from "../components/AuthComponent";

function Register() {
    return (
        <AuthComponent title="Create Account" subtitle="Create a new findmenu account">
            <form className="flex flex-col gap-3" method="GET">
                <div className="">
                    <label for="name" className="text-sm">Name of your resturant</label>
                    <input type="text" name="name" className="border border-black rounded-2xl py-3 px-3 w-full mt-1" placeholder="email@cbaeresturant.com" />
                </div>
                <div className="">
                    <label for="email" className="text-sm">Email</label>
                    <input type="text" name="email" className="border border-black rounded-2xl py-3 px-3 w-full mt-1" placeholder="email@cbaeresturant.com" />
                </div>
                <div className="">
                    <label for="password" className="text-sm">Create a password</label>
                    <input type="text" name="password" className="border border-black rounded-2xl py-3 px-3 w-full mt-1" placeholder="***********************" />
                </div>
                <button className="block py-3 text-sm font-semibold rounded-3xl bg-black text-white align-middle mt-3">
                    Submit & Continue
                </button>
            </form>
            <div className="text-center mt-3">
                <span className="text-sm">Have an account? <Link to="/login" className="text-green-700 underline">Sign in</Link></span>
            </div>
        </AuthComponent>
    );
}

export default Register;