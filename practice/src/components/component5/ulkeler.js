import React from "react";
import data from "./countries.json";
const Ulkeler = () => {
  const stil = {
    textAlign: "center",
    backgroundColor: "lightblue",
  };
  return (
    <div className="tblContainer">
      <select defaultValue="ulke">
        <option disabled value="ulke">
          {" "}
          Bir ulke secin
        </option>
        {data.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>

      <table style={{width:"60%"}}>
        <thead>
          <tr>
            <th>Sira No</th>
            <th>Ulke Adi</th>
            <th>Ulke Kodu</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => item.name.startsWith("A"))
            .map((country, index) => (
              <tr
                key={index}
                style={
                  index % 2 === 0
                    ? stil
                    : { ...stil, backgroundColor: "lightgray" }
                }
              >
                <td>{index+1}</td>
                <td>{country.name}</td>
                <td>{country.code}</td>

              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ulkeler;
