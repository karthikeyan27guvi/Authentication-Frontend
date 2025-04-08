import React, {useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
function Register() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    
      const [error, setError] = useState(null);
      const [success, setSuccess] = useState(null);
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
    
        // Validate password match
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match!");
          return;
        }
    
        try {
          const response = await axios.post("http://localhost:5000/api/users/register", {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          });

    
          setSuccess("User registered successfully!");
          setFormData({
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            });
            setTimeout(() => navigate("/"), 1500);
        } catch (err) {
          setError(err.response?.data || "Something went wrong.");
        }
      };
    
    return <>
    <div className="container">
    <div className="row">
      <div className="col-lg-10 col-xl-9 mx-auto">
        <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
          <div className="card-img-left d-none d-md-flex">
            {/* <!-- Background image for card set in CSS! --> */}
          </div>
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Register</h5>
            {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input 
                type="text" 
                className="form-control" 
                id="floatingInputUsername" 
                placeholder="myusername"
                name='name'
                value={formData.name}
                onChange={handleChange} 
                required 
                />

                <label htmlFor="floatingInputUsername">Username</label>
              </div>

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

              <hr/>

              <div className="form-floating mb-3">
                <input 
                type="password" 
                className="form-control" 
                id="floatingPassword" 
                placeholder="Password"
                name='password'
                value={formData.password}
                onChange={handleChange}
                required
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className="form-floating mb-3">
                <input 
                type="password" 
                className="form-control" 
                id="floatingPasswordConfirm" 
                placeholder="Confirm Password"
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                />

                <label htmlFor="floatingPasswordConfirm">Confirm Password</label>
              </div>

              <div className="d-grid mb-2">
                <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">Register</button>
              </div>

              <Link className="d-block text-center mt-2 small" to="/Login">Have an account? Sign In</Link>

              {/* <hr className="my-4"/> */}

              {/* <div className="d-grid mb-2">
                <button className="btn btn-lg btn-google btn-login fw-bold text-uppercase" type="submit">
                  <i className="fab fa-google me-2"></i> Sign up with Google
                </button>
              </div> */}

              {/* <div className="d-grid">
                <button className="btn btn-lg btn-facebook btn-login fw-bold text-uppercase" type="submit">
                  <i className="fab fa-facebook-f me-2"></i> Sign up with Facebook
                </button>
              </div> */}

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
}

        export default Register
