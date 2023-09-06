const Register = () => {
  return (
    <div className="register">
      <div className="wrapper">
        <h1>CREATE AN ACCOUNT</h1>
        <form>
          <input placeholder="name"/>
          <input placeholder="last name"/>
          <input placeholder="username"/>
          <input placeholder="email"/>
          <input placeholder="password"/>
          <input placeholder="confirm password"/>
          <p>By creating an account, I consent to the processing of me personal 
            data in accordance with the <b>PRIVACY POLICY</b></p>
            <button>CREATE</button>
        </form>
      </div>
    </div>
  )
}

export default Register
