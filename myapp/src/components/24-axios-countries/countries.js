import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Country from "./country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    /* than yazmaya gerek kalmıyor */
    try {
      const resp = await axios.get("https://restcountries.com/v3.1/all");

      const arr = resp.data.map((item) => {
        return {
          
          flag: item.flags.png,
          name: item.name.common,
          population: item.population,
          capital: item.capital?.join("-"),/* benim bilgim var hata verme demek */
          currencies: item.currencies ? Object.keys(item.currencies).map(cur=> item.currencies[cur].name).join("-") :""
        };
      });

      setCountries(arr);
    } catch (err) {
      console.log(err);
    }

    /* await ==> data gelene kadar bekler */

    /*  axios.get("https://restcountries.com/v3.1/all")
  .than(resp=>{
     console.log(resp.data);
    setCountries(resp.data);
  })
  .catch(err=>{

  }) */
  };

  useEffect(() => {
    /* async yapıda oldugundan return den sonra calısır */
    loadData();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Flag</th>
          <th>Country Name</th>
          <th>Population</th>
          <th>Capital</th>
          <th>Curency</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((item) => (
          <Country {...item} key={item.name} />
        ))}
      </tbody>
    </Table>
  );
};

export default Countries;
