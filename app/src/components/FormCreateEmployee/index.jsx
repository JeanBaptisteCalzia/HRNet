import { useState } from "react";
import Modal from "../../components/Modal/";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import DatePicker from "react-datepicker";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getYear";
import { ErrorMessage } from "@hookform/error-message";
import { states } from "../../data/states/";
import { department } from "../../data/department/";
import { tbodyData } from "../../data/tbodyData/";
import "../../components/FormCreateEmployee/formCreateEmployee.scss";
import "react-datepicker/dist/react-datepicker.css";

function FormCreateEmployee() {
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const range = (start, end) => {
    return new Array(end - start).fill().map((d, i) => i + start);
  };
  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

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
        <Controller
          control={control}
          name="dateBirth"
          render={({ field }) => (
            <DatePicker
              renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div
                  style={{
                    margin: 10,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <button
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                  >
                    {"<"}
                  </button>
                  <select
                    value={getYear(date)}
                    onChange={({ target: { value } }) => changeYear(value)}
                  >
                    {years.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  <select
                    value={months[getMonth(date)]}
                    onChange={({ target: { value } }) =>
                      changeMonth(months.indexOf(value))
                    }
                  >
                    {months.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                  >
                    {">"}
                  </button>
                </div>
              )}
              showIcon
              toggleCalendarOnIconClick
              onChange={(date) => field.onChange(date)}
              selected={field.value}
              placeholderText="Select date"
            />
          )}
        />

        <label>Start Date</label>
        <Controller
          control={control}
          name="startDate"
          render={({ field }) => (
            <DatePicker
              showIcon
              toggleCalendarOnIconClick
              onChange={(date) => field.onChange(date)}
              selected={field.value}
              placeholderText="Select date"
            />
          )}
        />

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
              <Select
                {...field}
                options={states}
                className="react-select-container"
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "#98ac3b",
                    primary: "#98ac3b",
                  },
                })}
              />
            )}
          />

          <label>Zip Code </label>
          <input
            className="input"
            {...register("zipCode")}
            type="number"
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
            <Select
              {...field}
              options={department}
              className="react-select-container"
              classNamePrefix="select-element"
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "#98ac3b",
                  primary: "#98ac3b",
                },
              })}
            />
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
            className="button button--secondary"
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
