import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
<article className="mt-40 mb-40 rounded-lg border border-black/10 my-4 w-full sm:w-1/2 lg:w-1/4 max-w-lg shadow-lg mx-auto">
  <main className="p-4 text-black">
    <div className="w-full max-w-sm">
      <fieldset id="sign_in" className="border-0 p-0 m-0">
        <legend className="text-4xl font-bold p-0 m-0">Sign In</legend>
        <div className="mt-3">
          <label className="block font-semibold leading-tight text-sm" htmlFor="email-address">
            Email
          </label>
          <input
            className="p-2 border bg-transparent hover:bg-black hover:text-white w-full"
            type="email"
            name="email-address"
            id="email-address"
          />
        </div>
        <div className="my-3">
          <label className="block font-semibold leading-tight text-sm" htmlFor="password">
            Password
          </label>
          <input
            className="border p-2 bg-transparent hover:bg-black hover:text-white w-full"
            type="password"
            name="password"
            id="password"
          />
        </div>
      </fieldset>
      <div className="text-center">
        <input
          className="border px-3 py-2 bg-black hover:bg-black text-white cursor-pointer text-sm font-semibold w-1/2"
          type="submit"
          value="Sign in"
        />
      </div>
      <div className="leading-tight mt-3 text-center">
        <Link to="/register">
          <button
            className="border px-3 py-2 bg-black hover:bg-black text-white cursor-pointer text-sm font-semibold w-1/2"
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  </main>
</article>
  );
}

export default Login;
