import { useState } from "react";
// import Modal from "../../components/Modal/";
import Modal from "react-modal-jbc";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import DatePicker from "react-datepicker";
import format from "date-fns/format";
import { ErrorMessage } from "@hookform/error-message";
import { states } from "../../data/states/";
import { department } from "../../data/department/";
import { useDispatch } from "react-redux";
import { loadData as loadDataAction } from "../../redux/dataSlice";
import "../../components/FormCreateEmployee/formCreateEmployee.scss";
import "react-datepicker/dist/react-datepicker.css";

function FormCreateEmployee() {
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const maxdate = new Date();
  maxdate.setDate(maxdate.getDate() - 1);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ mode: "onSubmit" });

  const defaultValues = {
    firstName: "",
    lastName: "",
    dateBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  };

  const onSubmit = (data) => {
    setIsSuccess(true);
    dispatch(loadDataAction(data));
    setShowModal(true);
    reset(defaultValues);
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
                      name="dateBirth"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          showIcon
                          toggleCalendarOnIconClick
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                          maxDate={maxdate}
                          onChange={(date) => {
                            if (date === null || date === undefined) {
                              field.onChange(date);
                            } else {
                              field.onChange(format(date, "MM/dd/yyyy"));
                            }
                          }}
                          dateFormat="MM/dd/yyyy"
                          isClearable
                          selected={field.value}
                          placeholderText="Select date"
                          className="form-control"
                          id="dateBirth"
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
                      name="startDate"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          id="startDate"
                          showIcon
                          toggleCalendarOnIconClick
                          selected={field.value}
                          placeholderText="Select date"
                          className="form-control"
                          isClearable
                          dateFormat="MM/dd/yyyy"
                          onChange={(date) => {
                            if (date === null || date === undefined) {
                              field.onChange(date);
                            } else {
                              field.onChange(format(date, "MM/dd/yyyy"));
                            }
                          }}
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
                    <label htmlFor="street" className="form-label">
                      Street
                    </label>
                    <input
                      id="street"
                      className="form-control"
                      {...register("street")}
                      type="text"
                      placeholder="Type your Street"
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
                      placeholder="Type your City"
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
                      name="state"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          options={states}
                          inputId="state"
                          placeholder="Select State"
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
                      type="number"
                      placeholder="Type your Zip Code"
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
                    name="department"
                    control={control}
                    rules={{ required: "Department is required" }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={department}
                        inputId="department"
                        placeholder="Select Department*"
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
            setShowModal();
          }}
          isFading={true}
          isSlideIn={true}
          isCloseBtn={true}
          isCloseBtnInsideModal={true}
          borderRadius=".5"
        >
          <div className="dialog-body">
            <h1>Employee created !</h1>
          </div>
        </Modal>
      )}
      {errors?.root?.server && <h3>Form submit failed.</h3>}
    </>
  );
}

export default FormCreateEmployee;
