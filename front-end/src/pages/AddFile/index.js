import React, { useState } from "react";

//components
import PageTitle from "../../components/Mobile/Navigations/PageTitle";

//data
import { mockUniData, mockClassData } from "../../assets/mocks/mockData";

//styles
import "./styles.scss";

export const AddFile = ({ props }) => {
  const title = "Add File";

  const handleChange = () => {};

  const [file, setFile] = useState("");

  const uploadHandler = (e) => {
    //console.log("file: ", file[0])
    e.preventDefault();
  };

  return (
    <div className="page-container">
      <PageTitle props={{ title }} />

      <div className="add-file-container">
        <div className="file-form-container">
          <div className="select-container">
            <label className="select-label">Select University</label>

            <select
              className="select"
              onChange={(e) => handleChange(e.target.value)}
            >
              {mockUniData.map(({ itemName }) => (
                <option value={itemName}>{itemName}</option>
              ))}
            </select>
          </div>

          <div className="select-container">
            <label className="select-label">Select Class</label>

            <select
              className="select"
              onChange={(e) => handleChange(e.target.value)}
            >
              {mockClassData.map(({ itemName }) => (
                <option value={itemName}>{itemName}</option>
              ))}
            </select>
          </div>

          <div className="file-select-container">
            <form onSubmit={(e) => uploadHandler(e)}>
              <label className="file-input">
                Choose File!
                <input
                  className="file"
                  type="file"
                  name="file"
                  onChange={(e) => setFile(e.target.files)}
                />
              </label>
              <label className="file-output">
                {file
                  ? file[0]?.name
                    ? file[0].name
                    : "No File Chosen"
                  : "No File Chosen"}
              </label>

              <input className="upload-btn" type="submit" value="Upload!" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
