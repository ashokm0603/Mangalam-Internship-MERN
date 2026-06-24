import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Form } from "react-bootstrap";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [profile, setProfile] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/get-users");
      console.log(response.data.allUsers);
      setUsers(response.data.allUsers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchUsers();
  }, []);

  const getUser = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/get-user/${id}`);
      console.log(profile);
      // toast.success("Get Profile Successfully");

      setProfile({ ...profile, ...response.data.foundUser });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete-user/${id}`);
      toast.success("Deleted Successfully");
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:5000/update-user/${id}`, profile);
      toast.success("updated");
      fetchUsers()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-center bg-secondary p-3 m-3">Users page</h1>

      <div className="container">
        <table align="center" cellSpacing={0} cellPadding={10}>
          <thead>
            <tr>
              <th className="border border-primary text-center">Name</th>
              <th className="border border-primary text-center">Phone</th>
              <th className="border border-primary text-center">Email</th>
              <th className="border border-primary text-center">Gender</th>
              <th className="border border-primary text-center">Age</th>
              <th className="border border-primary text-center">Address</th>

              <th className="border border-primary text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((person) => (
              <tr>
                <td className="border border-danger">{person.name}</td>
                <td className="border border-danger">{person.phone}</td>
                <td className="border border-danger">{person.email}</td>
                <td className="border border-danger">{person.gender}</td>
                <td className="border border-danger">{person.age}</td>
                <td className="border border-danger">{person.address}</td>
                <td className="border border-danger">
                  <Button onClick={handleShow} className="me-2">
                    <button
                      className="btn btn-info"
                      onClick={() => getUser(person._id)}
                    >
                      Get Profile
                    </button>
                  </Button>
                  <button className="btn btn-warning mx-2">
                    <button
                      class="btn btn-primary"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                      onClick={() => getUser(person._id)}
                    >
                      Update
                    </button>
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(person._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* left side menu to display user profile  */}
        <div className="container">
          <>
            <Offcanvas show={show} onHide={handleClose} placement={"start"}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>User Profile</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <h4>Name : {profile.name}</h4>
                <h4>Email : {profile.email}</h4>
                <h4>Phone : {profile.phone}</h4>
                <h4> Address: {profile.address}</h4>
                <h4> Gender: {profile.gender}</h4>
                <h4> Age: {profile.age}</h4>
              </Offcanvas.Body>
            </Offcanvas>
          </>

          {/* right Side menu to update profile form  */}
          <>
            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">
                  Update Profile
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <form
                  action=""
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleUpdate(profile._id);
                  }}
                >
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
                              value={profile.name}
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
                              value={profile.phone}
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
                              value={profile.email}
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
                              value={profile.address}
                            />
                          </Form.Group>
                        </div>
                      </div>

                      <div className="row px-5">
                        <div className="col">
                          <button type="submit" className="btn btn-warning">
                            Update Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserPage;
