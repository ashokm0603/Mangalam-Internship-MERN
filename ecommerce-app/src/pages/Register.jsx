import { useState } from "react";
import { Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    gender: "",
    zipCode: "",
    password: "",
    email: "",
    state: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    localStorage.setItem("registerDetails", JSON.stringify(details));
    toast.success("Register Successfully 😊");
  };
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.name });
  };

  return (
    <div className="flex justify-center items-center">
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-200 p-4 bg-fuchsia-300"
      >
        <fieldset>
          <h1 className="text-center bg-amber-600">Register</h1>
          <div className="row my-2">
            <div className="col">
              <Form.Group>
                <Form.Label>FirstName</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Enter First name"
                  name="firstName"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Enter Last name"
                  name="lastName"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>

          <div className="row my-4">
            <div className="col">
              <Form.Group>
                <Form.Label>Email: </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                  placeholder="+91"
                />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <Form.Label>Create Password </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  required
                  name="password"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Form.Group>
                <Form.Label>Address:</Form.Label>
                <Form.Control
                  required
                  name="address"
                  onChange={handleChange}
                  placeholder="Enter Full Address"
                />
              </Form.Group>
            </div>
          </div>

          <div className="row my-3">
            <div className="col">
              <Form.Group>
                <Form.Label>Gender</Form.Label> <br />
                <Form.Check
                  name="gender"
                  className="inline"
                  type="radio"
                  value="Male"
                  onChange={handleChange}
                />{" "}
                Male
                <Form.Check
                  name="gender"
                  className="inline"
                  type="radio"
                  value="Female"
                  onChange={handleChange}
                />
                Female
                <Form.Check
                  name="gender"
                  className="inline"
                  type="radio"
                  value="Female"
                  onChange={handleChange}
                />
                Other
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <Form.Label>State :</Form.Label>
                <Form.Select name="state" onChange={handleChange}>
                  <option>Choose State</option>
                  <option>Kerala</option>
                  <option>Karnataka</option>
                  <option>Tamil nadu</option>
                  <option>Telanga</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <Form.Label>ZipCode</Form.Label>
                <Form.Control
                  name="zipCode"
                  onChange={handleChange}
                  type="number"
                  placeholder="512034"
                />
              </Form.Group>
            </div>
          </div>
          <div className="row px-52 flex  justify-center items-center">
            <div className="col  text-center">
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </div>
            <div className="col  text-center">
              <button className="btn btn-danger" type="reset">
                Cancel
              </button>
            </div>
          </div>
        </fieldset>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
