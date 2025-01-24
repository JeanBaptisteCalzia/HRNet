import "../../components/Select/select.scss";

function Select({ register, options, label }) {
  return (
    <select register={register}>
      <option value="">-- Please choose a {label} --</option>
      {options.map((data, index) => (
        <option key={index} value={data.name}>
          {data.name}
        </option>
      ))}
      )
    </select>
  );
}

export default Select;
