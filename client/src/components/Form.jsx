//Login and Signup forms

import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "../contexts/AuthContext";
import { doSignInWithEmailAndPassword, doCreateUserWithEmailAndPassword, doSendEmailVerification } from "../auth";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

const Form = () => {
  // auth0
  const {loginWithRedirect} = useAuth0();

  // firebase
  const { userLoggedIn } = useAuth()
  const [email, setEmail] = useState('') // signup email
  const [email1, setEmail1] = useState('') // login email
  const [password, setPassword] = useState('') // signup password
  const [password1, setPassword1] = useState('') // login password
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [isRegister, setIsRegister] = useState(false)

  // function for login page
  async function handleSubmit(e){
    e.preventDefault();
    const pass = document.getElementById('lpass')// for validation
    const mail = document.getElementById('lemail')// for validation

    if(mail.value=='' || pass.value==''){
      toast.warning("All fields are required!");
      return;
    }

    if(!isSigningIn && pass.value == password1 && mail.value == email1) {
      setIsSigningIn(true)
      await doSignInWithEmailAndPassword(email1, password1)
      doSendEmailVerification()
    }else{
      toast.warning("Incorrect Email or Password !");
    }
    setIsSigningIn(false)
  }

  // function for signup page
  async function handlerSubmit(e){
    e.preventDefault();
    
    // const semail = document.getElementById('semail');
    // const spass = document.getElementById('spass');

    if(!isRegister) {
      setIsRegister(true)
      await doCreateUserWithEmailAndPassword(email, password)
      doSendEmailVerification()
    }
    setIsRegister(false)
  }

  return (
    <>
    {userLoggedIn && (<Navigate to={'/'} replace={true} />)}

    <div className="flex items-center justify-center min-h-screen">

      {/* Login Form Section */}
    <section className="bg-black-50 min-h-screen flex items-center justify-center absolute w-fit">
    <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
    <div className="md:w-1/2 px-8 md:px-16">
      <h2 className="font-bold text-2xl bg-gradient-to-r from-orange-700 to-red-700 text-transparent bg-clip-text text-center">Login</h2>
      <p className="text-sm mt-4 text-[#002D74] text-pretty text-center">Already a member ? Just log in to get started !</p>

      <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input className="p-2 mt-8 rounded-xl border" type="email" name="email" id="lemail" value={email1} onChange={(e) => { setEmail1(e.target.value)}} placeholder="Email"/>
        <div className="relative">
          <input className="p-2 rounded-xl border w-full" type="password" name="password" id="lpass" value={password1} onChange={(e) => { setPassword1(e.target.value)}} placeholder="Password"/>
          <svg onClick={
            () => {
              const input = document.querySelector('input[name="password"]');
              input.type = input.type === 'password'? 'text' : 'password';
            }
          } xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
        </div>

        {/* login button */}
        <button type="submit" className="bg-gradient-to-r from-orange-400 to-orange-700 text-white rounded-xl py-2 hover:scale-105 duration-300"> Login </button>
      </form>

      <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
        <hr className="border-gray-400"/>
        <p className="text-center text-sm">OR</p>
        <hr className="border-gray-400"/>
      </div>

      <button onClick={async () => await loginWithRedirect()} className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
        </svg>
        Login with Google
      </button>

      <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
        <a href="#">Forgot your password?</a>
      </div>

      <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
        <p>Do not have an account?</p>
        <button onClick={() => {
        let signup = document.getElementById('signup');
        signup.classList.remove('hidden');
        signup.classList.add('flex'); }} 
        className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</button>
      </div>
    </div>

    <div className="md:block hidden w-1/2">
      <img className="rounded-2xl" src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/440934905_122146383326192269_6357043452655387245_n.jpg"/>
    </div>
  </div>
</section>


      {/* Signup Form Section */}
<section className="bg-black-50 min-h-screen items-center justify-center absolute w-fit hidden" id="signup">
  <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
    <div className="md:w-1/2 px-8 md:px-16">
      <h2 className="font-bold text-2xl bg-gradient-to-r from-orange-700 to-red-700 text-transparent bg-clip-text text-center">Register</h2>
      <p className="text-sm mt-4 text-[#002D74] text-pretty text-center">New here? Create your account to get started!</p>
    
      <form action="" className="flex flex-col gap-4"  onSubmit={handlerSubmit}>
      <input className="p-2 mt-8 rounded-xl border" type="text" name="fname" placeholder="First Name"/>
      <input className="p-2 rounded-xl border" type="text" name="lname" placeholder="Last Name"/>
      <input className="p-2 rounded-xl border" id="semail" type="email" value={email} onChange={(e) => { setEmail(e.target.value)}} name="email" placeholder="Email"/>
        <div className="relative">
          <input className="p-2 rounded-xl border w-full" type="password" name="spassword" id="spass" value={password} onChange={(e) => { setPassword(e.target.value)}} placeholder="Password"/>
          <svg onClick={
            () => {
              const input = document.querySelector('input[name="spassword"]');
              input.type = input.type === 'password'? 'text' : 'password';
            }}
             xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
        </div>
        {/* signup button */}
        <button type="submit" className="bg-gradient-to-r from-orange-400 to-orange-700 text-white rounded-xl py-2 hover:scale-105 duration-300">Signup </button>
      </form>

      <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
        <hr className="border-gray-400"/>
        <p className="text-center text-sm">OR</p>
        <hr className="border-gray-400"/>
      </div>

      <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
        <p>Already have an account ?</p>
        <button 
        onClick={() => {
        let signup = document.getElementById('signup');
        signup.classList.add('hidden'); }}
        className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Login</button>
      </div>
    </div>

    <div className="md:block hidden w-1/2">
      <img className="rounded-2xl" src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/440934905_122146383326192269_6357043452655387245_n.jpg"/> 
      {/* https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/image-133-360x540.jpeg */}
    </div>
  </div>
</section>
</div>
    </>
  )
}

export default Form