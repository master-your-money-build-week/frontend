import React from "react";

export default function LoginPage() {
    return (
        <section className="Login-page">
            <header>
                <h1>Welcome Back!</h1>
            </header>
            <div>
                <label>Username:</label>
                <input type="text" />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" />
            </div>
            <div>
                <input type="checkbox" />
                <label>Remember Me</label>
            </div>
            <button>
                <a href="/ParentPage/welcome" >Sign in</a>
            </button>
            <div>By clicking Sign in, you agree to our Terms and have read and aacknowledge our Privacy Statement</div>
            <div>Forgot Username/Password?</div>
            <span>No account yet?</span>
            <span>Create an account</span>
        </section>
    );
}

//quick edit to change the login file