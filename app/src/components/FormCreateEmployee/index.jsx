import { useState } from "react";
import Modal from "../../components/Modal/";
import DateInput from "../../components/DateInput/";
import { states } from "../../data/states/";
import { department } from "../../data/department/";
import "../../components/FormCreateEmployee/formCreateEmployee.scss";

import { tbodyData } from "../../data/tbodyData/";

function FormCreateEmployee() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    startDate: "",
    department: "",
    dateBirth: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    tbodyData.push(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="create-employee">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName || ""}
          onChange={handleChange}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName || ""}
          onChange={handleChange}
        />

        <label htmlFor="dateBirth">Date of Birth</label>
        <input
          id="dateBirth"
          type="text"
          name="dateBirth"
          value={formData.dateBirth || ""}
          onChange={handleChange}
        />

        <label htmlFor="startDate">Start Date</label>
        <DateInput value={formData.startDate || ""} onChange={handleChange} />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            name="street"
            value={formData.street || ""}
            onChange={handleChange}
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            name="city"
            value={formData.city || ""}
            onChange={handleChange}
          />

          <label htmlFor="state">State</label>

          <select
            id="state"
            name="state"
            value={formData.state || ""}
            onChange={handleChange}
          >
            {states.map((data, index) => (
              <option key={index} value={data.name}>
                {data.name}
              </option>
            ))}
          </select>

          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            type="number"
            name="zipCode"
            value={formData.zipCode || ""}
            onChange={handleChange}
          />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select
          name="department"
          id="department"
          value={formData.department || ""}
          onChange={handleChange}
        >
          {department.map((data, index) => (
            <option key={index} value={data.name}>
              {data.name}
            </option>
          ))}
          )
        </select>

        <div className="bottom-section">
          {formData.firstName !== "" || formData.lastName !== "" ? (
            <button
              className="btn btn--secondary"
              onClick={() => setShowModal(true)}
            >
              Save
            </button>
          ) : (
            <button className="btn btn--disabled">Save</button>
          )}
        </div>
      </form>
      {showModal && (
        <Modal
          handleClose={() => {
            setShowModal(false);
          }}
        />
      )}
    </>
  );
}

export default FormCreateEmployee;
