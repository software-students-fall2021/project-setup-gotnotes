import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.scss";
import { useQuery } from "react-query";

//mock data
//import { mockUniData } from '../../../assets/mocks/mockData'

const fetchUniData = async () => {
  const {data} = await axios.get(`http://localhost:4000/unis`, {
    crossdomain: true,
  });
  console.log(data)
  return data;
};


export const Unis = ({
  ViewComponent,
  activeClass,
  BreadCrumbData,
  SetBreadCrumbData,
}) => {
  const {
    data,
    error,
    isError,
    isLoading,
  } = useQuery("unis", fetchUniData);

  if(isLoading) return <div>Loading</div>
  if(isError) return <div>Error: {error}</div>

  return (
    <div className={activeClass === "grid" ? "unis grid" : "unis"}>
      {data &&
        data.map(
          ({
            _id: itemID,
            uniName: itemName,
            uniLogoPath: itemLogoPath,
            uniStudentCount: courseCount,
          }) => (
            <ViewComponent
              key={itemID}
              props={{
                itemID,
                itemName,
                itemLogoPath,
                itemType: "uni",
                courseCount,
              }}
            />
          )
        )}
    </div>
  );
};
