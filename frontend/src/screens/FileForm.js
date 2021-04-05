import React, { useState } from "react";
import { uploadCsvToDb } from "../data/requests";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Screens.css";

export function FileForm() {
  const fileUpload = React.createRef();
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const submitHandler = async e => {
    let bodyFormData = new FormData();
    bodyFormData.append("file", file);
    await uploadCsvToDb(bodyFormData);
  }

  const setFileHandler = e => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const openUploadDialog = () => {
    fileUpload.current.click();
  };

  return (
    <div>
      <Form noValidate >
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="file">
            <input
              type="file"
              ref={fileUpload}
              name="file"
              style={{ display: "none" }}
              onChange={setFileHandler}
            />
            <div className="file-box">
              <Button type="button" onClick={openUploadDialog}>Choose File</Button>
              <span style={{ paddingLeft: "10px", marginTop: "5px" }}>{fileName}</span>
            </div>
          </Form.Group>
        </Form.Row>
        <div className="upload-box">
          <Button type="button" style={{ marginRight: "10px" }} onClick={submitHandler}>Upload</Button>
        </div>
      </Form>
    </div>
  );
}
