import axios from 'axios';
import React from 'react';

// BEGIN (write your solution here)
const Autocomplete = () => {
  const [countries, setCountries] = React.useState([]);
  const [term, setTerm] = React.useState('');

  const handleChange = async (e) => {
    const { value } = e.target;
    setTerm(value);

    if (value.length === 0) {
      setCountries([]);
      return;
    }

    try {
      const response = await axios.get('/countries', { params: { term: value } });
      setCountries(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Country"
          value={term}
          onChange={handleChange}
        />
      </form>
      {countries.length > 0 && (
        <ul>
          {countries.map((country) => (
            <li key={country}>{country}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
// END
