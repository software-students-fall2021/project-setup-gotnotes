import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.scss";
import {useQuery} from "react-query"




const fetchAllUnis = async () => {
  const {data} = await axios.get('localhost:4000/unis')
  return data
} 


export const Unis = ({
  ViewComponent,
  activeClass,
  BreadCrumbData,
  SetBreadCrumbData,
}) =>{

const {data, error, isLoading,isError} = useQuery("unis", fetchAllUnis)

  return (
    <div className={activeClass === "grid" ? "unis grid" : "unis"}>
      {data &&
        data.map(
          ({
            _id: itemID,
            uniName: itemName,
            uniLogoPath: itemLogoPath,
            uniCourses,
          }) => (
            <ViewComponent
              key={itemID}
              props={{
                itemID,
                itemName,
                itemLogoPath,
                itemType: "uni",
                courseCount: uniCourses.length,
              }}
            />
          )
        )}
    </div>
  );
};
