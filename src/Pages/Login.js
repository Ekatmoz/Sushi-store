const Login = () => {
  return (
    <div className="register">
      <div className="login">
        <h1>SIGN IN</h1>
        <form>
          <input placeholder="username"/>
          <input placeholder="password"/>
          <button>LOGIN</button>
          <p>DO NOT REMEMBER THE PASSWORD?</p>
          <p>CREATE A NEW ACCOUNT</p>
        </form>
      </div>
    </div>
  )
}

export default Login;
