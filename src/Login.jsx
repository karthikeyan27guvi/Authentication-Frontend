import React, {useState} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'


function Login() {
const [formData, setFormData] = useState({
    email: "",
    password: ""
    })

const [error, setError] = useState(null);
const [success, setSuccess] = useState(null);
const navigate = useNavigate();

const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
};

const handleSubmit = async (e)=>{
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
        const res = await axios.post("https://authentication-backend-vpip.onrender.com/api/users/login", formData)
        setSuccess("Login Successfull");
        setTimeout(()=>{
            navigate("/")
        }, 500)
    } catch (error) {
        setError(error.response?.data?.message || "Something went wrong.")
    }
}
  return <>
  <div className="container">
      <div className="row">
        <div className="col-lg-10 col-xl-5 mx-auto">
          <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">Login</h5>

              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

              <form onSubmit={handleSubmit} className='form-login'>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInputEmail"
                    placeholder="name@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="floatingInputEmail">Email address</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="d-grid mb-2">
                  <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">
                    Login
                  </button>
                </div>

                <Link className="d-block text-center mt-2 small" to="/register">
                  Don't have an account? Sign Up
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Login
