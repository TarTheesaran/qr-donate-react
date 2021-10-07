import React from 'react'
import { signInWithGoogle } from "../../../firebase";
function Login() {
    return (
        <div>
            <button onClick={signInWithGoogle}>
                Sign in with google
            </button>
        </div>
    )
}

export default Login
