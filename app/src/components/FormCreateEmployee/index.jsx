import { useState } from "react";
import Modal from "../../components/Modal/";
import { states } from "../../data/states/";
import { department } from "../../data/department/";
import "../../components/FormCreateEmployee/formCreateEmployee.scss";

function FormCreateEmployee() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="create-employee">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          id="dateOfBirth"
          type="text"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />

        <label htmlFor="startDate">Start Date</label>
        <input
          id="startDate"
          type="text"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />

          <label htmlFor="state">State</label>

          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          >
            {states.map((data, index) => {
              return (
                <option key={index} value={data.name}>
                  {data.name}
                </option>
              );
            })}
          </select>

          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            type="number"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
          />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select
          name="department"
          id="department"
          value={formData.department}
          onChange={handleChange}
        >
          {department.map((data, index) => {
            return (
              <option key={index} value={data.name}>
                {data.name}
              </option>
            );
          })}
        </select>

        <div className="bottom-section">
          <button
            className="btn btn--secondary"
            onClick={() => setShowModal(true)}
          >
            Save
          </button>
        </div>
      </form>
      {showModal && <Modal handleClose={handleClose} />}
    </>
  );
}

export default FormCreateEmployee;
