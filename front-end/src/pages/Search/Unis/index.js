import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.scss";

//mock data
//import { mockUniData } from '../../../assets/mocks/mockData'

export const Unis = ({
  ViewComponent,
  activeClass,
  BreadCrumbData,
  SetBreadCrumbData,
}) => {
  const [uniData, setUniData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/unis`, { crossdomain: true })
      .then((res) => {
        console.log(res.data);
        setUniData(res.data);
      });
  }, []);

  return (
    <div className={activeClass === "grid" ? "unis grid" : "unis"}>
      {uniData &&
        uniData.map(
          ({
            uniID: itemID,
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
