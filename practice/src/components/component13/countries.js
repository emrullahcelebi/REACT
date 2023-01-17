import React, { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import Country from "./country";
import data from "./data.json";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCountries(data);
      setLoading(false);
    }, 2000);
  }, []);


  const removeById = (id) => { 
    const isDelete = window.confirm("Silmek isrtediginizden emin misiniz ?");
    if(isDelete){
        const newArray = countries.filter((country)=>country.ccn3 !==id)
        setCountries(newArray);
    }
   }
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Bayrak</th>
            <th>Ulke</th>
            <th>Nufus</th>
            <th>Baskent</th>
            <th>Islem</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className={loading ? "d-block" : "d-none"}>
              <Spinner animation="border" />
            </td></tr>
            {countries.map((country, index) => (
              <Country key={index} index={index} {...country} removeById={removeById} />
            ))}
          
        </tbody>
      </Table>
    </Container>
  );
};

export default Countries;
