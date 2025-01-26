import { useState } from "react";
import Modal from "../../components/Modal/";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import DatePicker from "react-datepicker";
import format from "date-fns/format";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getYear";
import { ErrorMessage } from "@hookform/error-message";
import { states } from "../../data/states/";
import { department } from "../../data/department/";
import { useSelector, useDispatch } from "react-redux";
import { loadData as loadDataAction } from "../../redux/dataSlice";
import "../../components/FormCreateEmployee/formCreateEmployee.scss";
import "react-datepicker/dist/react-datepicker.css";

function FormCreateEmployee() {
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const dispatch = useDispatch();
  const { dataTable } = useSelector((state) => state.data);

  const range = (start, end) => {
    return new Array(end - start).fill().map((d, i) => i + start);
  };
  const years = range(1940, getYear(new Date()) + 1, 1);
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
    setIsSuccess(true);
    dispatch(loadDataAction(data));
    setShowModal(true);
    reset();
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <form
            noValidate
            className="form row"
            onSubmit={handleSubmit(onSubmit)}
            id="create-employee"
          >
            <div className="mb-3 col-sm-12">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    className="form-control"
                    {...register("firstName", {
                      required: "First Name is required",
                    })}
                    type="text"
                    placeholder={dataTable[0].firstName}
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
                </div>
              </div>
            </div>

            <div className="mb-3 col-sm-12">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    className="form-control"
                    {...register("lastName", {
                      required: "Last Name is required",
                    })}
                    type="text"
                    placeholder={dataTable[0].lastName}
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
                </div>
              </div>
            </div>

            <div className="mb-3 col-sm-12">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <label htmlFor="dateBirth" className="form-label">
                    Date of Birth
                  </label>
                  <div className="col-sm-12">
                    <Controller
                      id="dateBirth"
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
                                onChange={({ target: { value } }) =>
                                  changeYear(value)
                                }
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
                          onChange={(date) =>
                            field.onChange(
                              format(date, "MM/dd/yyyy", {
                                awareOfUnicodeTokens: true,
                              })
                            )
                          }
                          selected={field.value}
                          placeholderText={dataTable[0].dateBirth}
                          className="form-control"
                          dateFormat="MM/D/YYYY"
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3 col-sm-12">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <label htmlFor="startDate" className="form-label">
                    Start Date
                  </label>
                  <div className="col-sm-12">
                    <Controller
                      control={control}
                      name="startDate"
                      render={({ field }) => (
                        <DatePicker
                          showIcon
                          toggleCalendarOnIconClick
                          selected={field.value}
                          placeholderText={dataTable[0].startDate}
                          className="form-control"
                          dateFormat="MM/D/YYYY"
                          onChange={(date) =>
                            field.onChange(
                              format(date, "MM/dd/yyyy", {
                                awareOfUnicodeTokens: true,
                              })
                            )
                          }
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            <fieldset className="mb-3">
              <legend>Address</legend>

              <div className="mb-3 col-sm-12">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-4">
                    <label htmlFor="startDate" className="form-label">
                      Street
                    </label>
                    <input
                      id="startDate"
                      className="form-control"
                      {...register("street")}
                      type="text"
                      placeholder={dataTable[0].street}
                      autoComplete="on"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3 col-sm-12">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-3">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <input
                      id="city"
                      className="form-control"
                      {...register("city")}
                      type="text"
                      placeholder={dataTable[0].city}
                      autoComplete="on"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3 col-sm-12">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-3">
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
                    <Controller
                      id="state"
                      name="state"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          options={states}
                          placeholder={dataTable[0].state}
                          className="react-select-container"
                          classNamePrefix="react-select-element"
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
                  </div>
                </div>
              </div>

              <div className="mb-3 col-sm-12">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-3">
                    <label htmlFor="zipCode" className="form-label">
                      Zip Code
                    </label>
                    <input
                      id="zipCode"
                      className="form-control"
                      {...register("zipCode")}
                      type="text"
                      placeholder={dataTable[0].zipCode}
                      autoComplete="on"
                    />
                  </div>
                </div>
              </div>
            </fieldset>

            <div className="mb-3 col-sm-12">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <label htmlFor="department" className="form-label">
                    Department
                  </label>
                  <Controller
                    id="department"
                    name="department"
                    className="select"
                    control={control}
                    rules={{ required: "Department is required" }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={department}
                        placeholder={dataTable[0].department}
                        className="react-select-container"
                        classNamePrefix="react-select-element"
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
                </div>
              </div>
            </div>

            <div className="d-flex flex-row-reverse mt-3">
              <div className="d-grid gap-2 col-12 col-sm-12 col-md-1 col-lg-1">
                <button
                  className="btn btn-primary"
                  type="submit"
                  form="create-employee"
                  value="Submit"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

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
