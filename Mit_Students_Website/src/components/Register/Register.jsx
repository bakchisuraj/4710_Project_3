import React from "react";

function Register() {
    return (
        <article className="mt-20 mb-20 rounded-lg border border-black/10 my-4 w-full sm:w-1/2 lg:w-1/4 max-w-lg shadow-lg mx-auto">
          <main className="p-4 text-black">
            <div className="w-full max-w-sm">
              <fieldset id="sign_up" className="border-0 p-0 m-0">
                <legend className="text-4xl font-bold p-0 m-0">Register</legend>
                <div className="mt-3">
                  <label className="block font-semibold leading-tight text-sm" htmlFor="name">Name</label>
                  <input
                    className="p-2 border bg-transparent hover:bg-black hover:text-white w-full"
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="mt-3">
                  <label className="block font-semibold leading-tight text-sm" htmlFor="email-address">MIT Registered Email address</label>
                  <input
                    className="p-2 border bg-transparent hover:bg-black hover:text-white w-full"
                    type="email"
                    name="email-address"
                    id="email-address"
                  />
                </div>
                <div className="my-3">
                  <label className="block font-semibold leading-tight text-sm" htmlFor="password">Password</label>
                  <input
                    className="border p-2 bg-transparent hover:bg-black hover:text-white w-full"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
                <div className="mt-3">
                  <label className="block font-semibold leading-tight text-sm" htmlFor="student-id">Student Id No</label>
                  <input
                    className="p-2 border bg-transparent hover:bg-black hover:text-white w-full"
                    type="text"
                    name="student-id"
                    id="student-id"
                  />
                </div>
                <div className="mt-3">
                  <label className="block font-semibold leading-tight text-sm" htmlFor="phone">Phone No</label>
                  <input
                    className="p-2 border bg-transparent hover:bg-black hover:text-white w-full"
                    type="tel"
                    name="phone"
                    id="phone"
                  />
                </div>
                <div className="mt-3">
                  <label className="block font-semibold leading-tight text-sm" htmlFor="dob">Date of Birth</label>
                  <input
                    className="p-2 border bg-transparent hover:bg-black hover:text-white w-full"
                    type="date"
                    name="dob"
                    id="dob"
                  />
                </div>
                <div className="mt-3">
                  <label className="block font-semibold leading-tight text-sm" htmlFor="gender">Gender</label>
                  <select
                    className="p-2 border bg-transparent hover:bg-black hover:text-white w-full"
                    name="gender"
                    id="gender"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mt-3">
                  <label className="block font-semibold leading-tight text-sm" htmlFor="address">Full Address</label>
                  <textarea
                    className="p-2 border bg-transparent hover:bg-black hover:text-white w-full"
                    name="address"
                    id="address"
                  ></textarea>
                </div>
                <br />
              </fieldset>
              <div className="text-center">
                <input
                  className="w-1/2 border px-3 py-2 bg-black hover:bg-black text-white cursor-pointer text-sm font-semibold w-full"
                  type="submit"
                  value="Register"
                />
              </div>
            </div>
          </main>
        </article>
      );   
}

export default Register;
