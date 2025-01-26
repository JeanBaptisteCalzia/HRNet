import { createSlice } from "@reduxjs/toolkit";

const updateLocalStorage = (newEmployeesArray) => {
  localStorage.setItem("employeesData", JSON.stringify(newEmployeesArray));
};

const dataSlice = createSlice({
  name: "data",
  initialState: {
    dataTable: [
      {
        firstName: "Type your first name*",
        lastName: "Type your last name*",
        dateBirth: "Select date",
        startDate: "Select date",
        street: "Type your Street",
        city: "Type your City",
        state: "Select",
        zipCode: "Type your Zip Code",
        department: "Select",
      },
    ],
  },
  reducers: {
    getLocalStorageData: (state) => {
      state.dataTable = JSON.parse(localStorage.getItem("employeesData"));
    },

    loadData: (state, action) => {
      const newDataTable = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        dateBirth: action.payload.dateBirth,
        startDate: action.payload.startDate,
        street: action.payload.street,
        city: action.payload.city,
        state: action.payload.state,
        zipCode: action.payload.zipCode,
        department: action.payload.department,
      };
      state.dataTable.push(newDataTable);
      updateLocalStorage(state.dataTable);
    },
  },
});

export default dataSlice.reducer;
export const { dataTable, loadData, getLocalStorageData } = dataSlice.actions;
