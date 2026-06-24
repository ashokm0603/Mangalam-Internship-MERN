import axios from "axios";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    gender: "",
    age: 18,
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(userDetails);
      await axios.post("http://localhost:5000/add-user", userDetails);
      toast.success("User Added Successfully 😊");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add User 😥");
    }
  };

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <h1 className="text-center bg-success p-3 m-2">Register</h1>
          <div className="container">
            <div className="row my-3">
              <div className="col">
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    name="name"
                    type="text"
                    required
                    placeholder="Enter Name"
                  />
                </Form.Group>
              </div>

              <div className="col">
                <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91"
                  />
                </Form.Group>
              </div>
              <div className="col">
                <Form.Group>
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    onChange={handleChange}
                    name="age"
                    required
                    placeholder="+18"
                  />
                </Form.Group>
              </div>
            </div>

            <div className="row my-3">
              <div className="col">
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                  />
                </Form.Group>
              </div>
              <div className="col">
                <Form.Group>
                  <Form.Label>Gender</Form.Label> <br />
                  <Form.Check
                    name="gender"
                    onChange={handleChange}
                    inline
                    type="radio"
                    value="Male"
                  />
                  Male
                  <Form.Check
                    name="gender"
                    onChange={handleChange}
                    inline
                    type="radio"
                    value="Female"
                  />
                  Female
                  <Form.Check
                    name="gender"
                    onChange={handleChange}
                    inline
                    type="radio"
                    value="Others"
                  />
                  Others
                </Form.Group>
              </div>
            </div>
            <div className="row my-2">
              <div className="col">
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    name="address"
                    type="text"
                    required
                    placeholder="Enter Full Address"
                  />
                </Form.Group>
              </div>
            </div>

            <div className="row px-5">
              <div className="col">
                <button type="submit" className="btn btn-primary">
                  Add User
                </button>
              </div>
              <div className="col">
                <button type="reset" className="btn btn-warning">
                  Add User
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Register;
