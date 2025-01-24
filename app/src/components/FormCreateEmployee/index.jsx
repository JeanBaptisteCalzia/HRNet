import { useState } from "react";
import Modal from "../../components/Modal/";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { ErrorMessage } from "@hookform/error-message";
import { states } from "../../data/states/";
import { department } from "../../data/department/";
import { tbodyData } from "../../data/tbodyData/";
import "../../components/FormCreateEmployee/formCreateEmployee.scss";

function FormCreateEmployee() {
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ mode: "onSubmit" });

  const onSubmit = (data) => {
    console.log(data);
    setIsSuccess(true);
    tbodyData.push(data);
    setShowModal(true);
    reset();
  };

  return (
    <>
      <form
        noValidate
        className="form"
        onSubmit={handleSubmit(onSubmit)}
        id="create-employee"
      >
        <label>First Name </label>
        <input
          className="input"
          {...register("firstName", { required: "First Name is required" })}
          type="text"
          placeholder="Type your first name*"
          required
          autoComplete="on"
          aria-invalid={errors.firstName ? "true" : "false"}
        />
        <ErrorMessage
          errors={errors}
          name="firstName"
          render={({ message }) => (
            <span className="error-message">{message}</span>
          )}
        />

        <label>Last Name </label>
        <input
          className="input"
          {...register("lastName", { required: "Last Name is required" })}
          type="text"
          placeholder="Type your last name*"
          required
          autoComplete="on"
          aria-invalid={errors.lastName ? "true" : "false"}
        />
        <ErrorMessage
          errors={errors}
          name="lastName"
          render={({ message }) => (
            <span className="error-message">{message}</span>
          )}
        />
        <label>Date of Birth</label>
        <label>Start Date</label>
        <fieldset className="address">
          <legend>Address</legend>

          <label>Street </label>
          <input
            className="input"
            {...register("street")}
            type="text"
            placeholder="Type your Street"
            autoComplete="on"
          />

          <label>City </label>
          <input
            className="input"
            {...register("city")}
            type="text"
            placeholder="Type your City"
            autoComplete="on"
          />

          <label>State </label>
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Select {...field} options={states} className="select" />
            )}
          />

          <label>Zip Code </label>
          <input
            className="input"
            {...register("zipCode")}
            type=""
            placeholder="Type your Zip Code"
            autoComplete="on"
          />
        </fieldset>

        <label>Department</label>
        <Controller
          name="department"
          className="select"
          control={control}
          rules={{ required: "Department is required" }}
          render={({ field }) => (
            <Select {...field} options={department} className="select" />
          )}
        />

        <ErrorMessage
          errors={errors}
          name="department"
          render={({ message }) => (
            <span className="error-message">{message}</span>
          )}
        />
        <div className="bottom-section">
          <button
            className="btn btn--secondary"
            type="submit"
            form="create-employee"
            value="Submit"
          >
            Save
          </button>
        </div>
      </form>

      {isSubmitSuccessful && isSuccess && (
        <Modal
          isShow={showModal}
          isClose={() => {
            setShowModal((prev) => !prev);
          }}
        />
      )}
      {errors?.root?.server && <h3>Form submit failed.</h3>}
    </>
  );
}

export default FormCreateEmployee;
