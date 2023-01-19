import "./App.css";
import React, { useState, useEffect } from "react";
import { Button, Modal, Table, Input, Divider } from "antd";
import io from "socket.io-client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import {
  DeleteFilled,
  CloseCircleFilled,
  CloseOutlined,
  CloseSquareFilled,
} from "@ant-design/icons";
// no dotenv
const socket = io.connect("http://localhost:7077");
const dummydataSource = [
  {
    name: "harish",
    last: "kumar",
    job: "React.js",
    email: "haris1234h@gmail.com",
    id: 1234,
  },
  {
    name: "Kalyan",
    last: "krisha",
    job: "Angualr.js",
    email: "Kalyan5678@gmail.com",
    id: 5678,
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: 9012,
  },
  {
    name: "suman",
    last: "aji",
    job: "SQL",
    email: "suman4567@gmail.com",
    id: 4567,
  },
];
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [obj, setobj] = useState({});
  const [dataSource, setdataSource] = useState(dummydataSource);
  const showModal = (arg) => {
    setobj(arg);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    socket.emit("hello-event", { ...obj });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    socket.on("hello-event", (payload) => {
      // const newData = dataSource.map((arg) => {
      //   if (arg.id == payload.id) return payload;
      //   else return arg;
      // });
      console.log(dataSource, payload);
      setdataSource((prevData) => [...prevData, payload]);
      setIsModalOpen(false);
      console.log("hello-event", payload);
    });
  }, [socket]);
  const handleTheSearch = (value) => {
    if (value == "" || !value) setdataSource(dummydataSource);
    else {
      console.log(value);
      const newData = dummydataSource.filter((obj) =>
        String(obj.id).includes(String(value))
      );
      setdataSource(newData);
    }
  };
  const [age, setAge] = React.useState(10);
  const [labelYes, setlabelYes] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChangesetlabelYes = (event) => {
    setlabelYes(event.target.value);
  };
  // const columns = [
  //   {
  //     title: "name",
  //     dataIndex: "name",
  //     key: "name",
  //   },
  //   {
  //     title: "job",
  //     dataIndex: "job",
  //     key: "job",
  //   },
  //   {
  //     title: "email",
  //     dataIndex: "email",
  //     key: "email",
  //   },
  //   {
  //     title: "Edit",
  //     dataIndex: "Edit",
  //     key: "Edit",
  //     render: (text, record) => {
  //       return (
  //         <Button
  //           onClick={() => {
  //             showModal(record);
  //           }}
  //         >
  //           Edit
  //         </Button>
  //       );
  //     },
  //   },
  // ];
  const handleTheDelete = (argObj) => {
    const newData = dummydataSource.filter((obj) => obj.id !== argObj.id);
    setdataSource(newData);
    handleCancel();
  };
  return (
    <div>
      <h1 className="color">User Deatiles</h1>
      {/* <Table dataSource={dataSource} columns={columns} />; */}
      Search:{" "}
      <Input
        style={{
          width: "50%",
        }}
        onChange={(e) => {
          const value = e.target.value;
          handleTheSearch(value);
        }}
      />
      <ul>
        {dataSource.map((obj) => {
          return (
            <li className="tableConatiner">
              <span
                style={{
                  cursor: "pointer",
                }}
                onContextMenu={(e) => {
                  e.preventDefault();
                  showModal(obj);
                }}
              >
                {" "}
                {obj.name}
              </span>

              <span> {obj.last}</span>
              <span> {obj.job}</span>
              <span> {obj.email}</span>
            </li>
          );
        })}
      </ul>
      <Modal
        width={500}
        style={{
          top: "1rem",
        }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="modelEdit">
          <div
            className="paddingforModel"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#acc3d1",
            }}
          >
            <h1
              style={{
                fontSize: "1.2rem",
                color: "#315390",
              }}
            >
              Author Deatiles
            </h1>
            <h1
              style={{
                display: "flex",
                gap: "0.5rem",
                // handleOk
              }}
            >
              {" "}
              <Button className="twoNexts blueColor">{">>"}</Button>{" "}
              <Button
                onClick={() => {
                  handleOk();
                }}
                className="saveAndClose"
              >
                save & close{" "}
              </Button>
              <span>
                <DeleteFilled
                  onClick={() => {
                    handleTheDelete(obj);
                  }}
                  style={{
                    color: "red",
                  }}
                />
              </span>
              <span>
                <CloseSquareFilled
                  onClick={handleOk}
                  style={{
                    color: "red",
                  }}
                />
              </span>
            </h1>
          </div>
          <div className="paddingforModel">
            <p className="titleOfDiv">Edit Author Details</p>
            <div className="mb_1 buttonsGroupFlex">
              <Button className="blueColor">+ Givenname</Button>
              <Button className="blueColor">Suffix</Button>
              <Button className="blueColor"> Degree</Button>
              <Button className="blueColor">+ Email</Button>
              <Button className="blueColor">+ Role</Button>
            </div>
          </div>
          <div className="formsInput paddingforModel">
            <div className="fields">
              <span>
                {" "}
                {/* <Input
           
             
            /> */}
                <TextField
                  onChange={(e) => {
                    const value = e.target.value;
                    setobj((prev) => ({
                      ...prev,
                      name: value,
                    }));
                  }}
                  value={obj.name}
                  id="name"
                  label="name"
                  variant="outlined"
                  focused
                />
              </span>
              <span>
                <CloseOutlined
                  style={{
                    color: "red",
                    fontSize: "1.4rem",
                  }}
                />
              </span>
            </div>{" "}
            <div className="fields">
              <span>
                <TextField
                  onChange={(e) => {
                    const value = e.target.value;
                    setobj((prev) => ({
                      ...prev,
                      last: value,
                    }));
                  }}
                  value={obj.last}
                  id="last"
                  label="surname"
                  variant="outlined"
                  focused
                />
              </span>{" "}
              <span>
                <CloseOutlined
                  style={{
                    color: "red",
                    fontSize: "1.4rem",
                  }}
                />
              </span>
            </div>{" "}
            <div className="fields">
              {" "}
              <span>
                <TextField
                  onChange={(e) => {
                    const value = e.target.value;
                    setobj((prev) => ({
                      ...prev,
                      job: value,
                    }));
                  }}
                  value={obj.job}
                  id="job"
                  label="job"
                  variant="outlined"
                  focused
                />
              </span>{" "}
              <span>
                <CloseOutlined
                  style={{
                    color: "red",
                    fontSize: "1.4rem",
                  }}
                />
              </span>
            </div>
            <div className="fields">
              <span>
                {" "}
                <TextField
                  onChange={(e) => {
                    const value = e.target.value;
                    setobj((prev) => ({
                      ...prev,
                      email: value,
                    }));
                  }}
                  value={obj.email}
                  id="email"
                  label="email"
                  variant="outlined"
                  focused
                />
              </span>{" "}
              <span>
                <CloseOutlined
                  style={{
                    color: "red",
                    fontSize: "1.4rem",
                  }}
                />
              </span>
            </div>
          </div>
          <Divider />

          <div className="paddingforModel">
            <p className="titleOfDiv">Edit Attributes</p>
            <div className="mb_1">
              <Button className="blueColor">Orcid</Button>
            </div>
            <div className="formsInput paddingforModel">
              <div className="fields">
                <span
                  style={{
                    width: "10rem",
                  }}
                >
                  <FormControl fullWidth>
                    <InputLabel id="Affilicationids">
                      Affilicationids
                    </InputLabel>
                    <Select
                      labelId="Affilicationids"
                      id="demo-simple-select"
                      value={age}
                      label="Affilicationids"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Aff2</MenuItem>
                      <MenuItem value={20}>Aff3</MenuItem>
                      <MenuItem value={30}>Aff4</MenuItem>
                    </Select>
                  </FormControl>
                </span>
              </div>{" "}
              <div className="fields">
                <span
                  style={{
                    width: "10rem",
                  }}
                >
                  <FormControl fullWidth>
                    <InputLabel id="Corresponding">Corresponding</InputLabel>
                    <Select
                      labelId="Corresponding"
                      id="demo-simple-select"
                      value={labelYes}
                      label="Corresponding"
                      onChange={handleChangesetlabelYes}
                    >
                      <MenuItem value={10}>Yes</MenuItem>
                      <MenuItem value={20}>NO</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </span>
              </div>{" "}
            </div>
          </div>
          <Divider />
          <div className=" paddingforModel">
            <h1 className="titleOfDiv"> Affilication List</h1>
            <p>
              The Neurology department specialises in the diagnosis and
              treatment of disorders of the nervous system – including the
              brain, spinal cord, peripheral nerves and muscle Neurological
              disorders are central and peripheral nervous system diseases, that
              is, they occur in the brain, spine, and multiple nerves that
              connect both
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
