import { Navigate } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

const Auth = () => {
  return (
    <div className="auth-container flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="sign-in-section p-6 rounded-lg shadow-lg bg-white">
        <SignedOut>
          <SignUpButton mode="modal" />
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <Navigate to="/"></Navigate>
        </SignedIn>
      </div>
    </div>
  );
};

export default Auth;
