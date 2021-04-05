import React, { Fragment, useState, useEffect } from 'react';
import { getDataOfCountry, getAllCountrysFromDb } from "../data/requests";
import MaterialTable from "material-table";

export function BrowseScreen() {
  const [apiData, setApiData] = useState([]);
  const [apiAllCountrys, setApiAllCountrys] = useState([]);
  const [country, setCountry] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await getDataOfCountry(country);
    setApiData(response.data)
  };

  useEffect(() => {
    const getAPI = async () => {
      await getAllCountrysFromDb().then((data) => {
        setApiAllCountrys(data.data);
      });
    };
    getAPI();
  }, []);

  return (
    <Fragment>
      <div className="form-container">
        <form onSubmit={submitHandler} >
          <label htmlFor="country">Choose a Country:</label>
          <select id="Country" name="country" onChange={(e) => setCountry(e.target.value)}>
            {apiAllCountrys.map(x => <option value={x.destinationCountry}>{x.destinationCountry}</option>)}
          </select>
          <input type="submit" />
        </form>
      </div>
      <main>
        <div style={{ flex: 1 }}>
          <MaterialTable
            columns={[
              {
                title: "Country",
                field: "destinationCountry"
              },
              {
                title: "Year",
                field: "year"
              },
              {
                title: "Month",
                field: "month"
              },
              {
                title: "Data Usage",
                field: "dataUsage"
              },
              {
                title: "Data Charge",
                field: "dataCharges",
                type: "numeric"
              },
              {
                title: "SMS Usage",
                field: "smsUsage"
              },
              {
                title: "SMS Charge",
                field: "smsCharges"
              },
              {
                title: "MOC Usage",
                field: "mocUsage"
              },
              {
                title: "MOC Charge",
                field: "mocCharges"
              },
              {
                title: "MTC Usage",
                field: "mtcUsage"
              },
              {
                title: "MTC Charge",
                field: "mtcCharges"
              }
            ]}
            data={apiData}
            title=""
            options={{ search: false, paging: false, filtering: true, exportButton: false }}
          />
        </div>
      </main>
    </Fragment>
  );
};
