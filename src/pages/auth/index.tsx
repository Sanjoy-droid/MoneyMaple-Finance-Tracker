import {SignedIn, SignedOut, SignInButton, SignUpButton, UserButton} from "@clerk/clerk-react"

const auth = () => {
  return (
  
    <div className="sign-in-container">
        <SignedOut>
        <SignUpButton mode="modal"/>
        <SignInButton mode="modal"/>
</SignedOut>

<SignInButton>

    <UserButton/>

</SignInButton>

    </div>
  )
}

export default auth