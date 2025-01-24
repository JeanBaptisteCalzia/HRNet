import "../../components/Select/select.scss";

function Select({ id, onChange, options }) {
  return (
    <select name={id} id={id} onChange={onChange}>
      <option value="">-- Please choose an option --</option>
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
