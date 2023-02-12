import "./App.css";
import React, { useState, useEffect, useMemo } from "react";
import { Button, Modal, Table, Input, Divider } from "antd";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { v4 as uuidv4 } from "uuid";
import InputLabel from "@mui/material/InputLabel";
import {
  DeleteFilled,
  CloseCircleFilled,
  CloseOutlined,
  CloseSquareFilled,
  RightCircleOutlined,
  LeftCircleOutlined,
  StepBackwardFilled,
  CaretLeftFilled,
  CaretRightFilled,
  StepForwardFilled,
} from "@ant-design/icons";
// no dotenv

const getColor = () => Math.floor(Math.random() * 16777215).toString(16);
const dummydataSource = [
  {
    name: "harish",
    last: "kumar",
    job: "React.js",
    email: "haris1234h@gmail.com",
    id: 1234,
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Kalyan",
    last: "krisha",
    job: "Angualr.js",
    email: "Kalyan5678@gmail.com",
    id: 5678,
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: 9012,
    color: getColor(),
    color2: getColor(),
  },
];
const dummydataSourceModal = [
  {
    name: "harish 1",
    last: "kuma 1r",
    job: "React.js",
    email: "haris1234h@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Kalyan 2",
    last: "krisha",
    job: "Angualr.js",
    email: "Kalyan5678@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod 5",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "harish",
    last: "kumar",
    job: "React.js",
    email: "haris1234h@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Kalyan",
    last: "krisha",
    job: "Angualr.js",
    email: "Kalyan5678@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "harish",
    last: "kumar",
    job: "React.js",
    email: "haris1234h@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Kalyan",
    last: "krisha",
    job: "Angualr.js",
    email: "Kalyan5678@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "harish",
    last: "kumar",
    job: "React.js",
    email: "haris1234h@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Kalyan",
    last: "krisha",
    job: "Angualr.js",
    email: "Kalyan5678@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "harish",
    last: "kumar",
    job: "React.js",
    email: "haris1234h@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Kalyan",
    last: "krisha",
    job: "Angualr.js",
    email: "Kalyan5678@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "harish",
    last: "kumar",
    job: "React.js",
    email: "haris1234h@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Kalyan",
    last: "krisha",
    job: "Angualr.js",
    email: "Kalyan5678@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "harish",
    last: "kumar",
    job: "React.js",
    email: "haris1234h@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Kalyan",
    last: "krisha",
    job: "Angualr.js",
    email: "Kalyan5678@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "harish",
    last: "kumar",
    job: "React.js",
    email: "haris1234h@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Kalyan",
    last: "krisha",
    job: "Angualr.js",
    email: "Kalyan5678@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "harish",
    last: "kumar",
    job: "React.js",
    email: "haris1234h@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Kalyan",
    last: "krisha",
    job: "Angualr.js",
    email: "Kalyan5678@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "harish",
    last: "kumar",
    job: "React.js",
    email: "haris1234h@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Kalyan",
    last: "krisha",
    job: "Angualr.js",
    email: "Kalyan5678@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "harish",
    last: "kumar",
    job: "React.js",
    email: "haris1234h@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Kalyan",
    last: "krisha",
    job: "Angualr.js",
    email: "Kalyan5678@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "harish",
    last: "kumar",
    job: "React.js",
    email: "haris1234h@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Kalyan",
    last: "krisha",
    job: "Angualr.js",
    email: "Kalyan5678@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "harish",
    last: "kumar",
    job: "React.js",
    email: "haris1234h@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Kalyan",
    last: "krisha",
    job: "Angualr.js",
    email: "Kalyan5678@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "harish",
    last: "kumar",
    job: "React.js",
    email: "haris1234h@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Kalyan",
    last: "krisha",
    job: "Angualr.js",
    email: "Kalyan5678@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "harish",
    last: "kumar",
    job: "React.js",
    email: "haris1234h@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Kalyan",
    last: "krisha",
    job: "Angualr.js",
    email: "Kalyan5678@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "harish",
    last: "kumar",
    job: "React.js",
    email: "haris1234h@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Kalyan",
    last: "krisha",
    job: "Angualr.js",
    email: "Kalyan5678@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "harish",
    last: "kumar",
    job: "React.js",
    email: "haris1234h@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Kalyan",
    last: "krisha",
    job: "Angualr.js",
    email: "Kalyan5678@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "harish",
    last: "kumar",
    job: "React.js",
    email: "haris1234h@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Kalyan",
    last: "krisha",
    job: "Angualr.js",
    email: "Kalyan5678@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "harish",
    last: "kumar",
    job: "React.js",
    email: "haris1234h@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Kalyan",
    last: "krisha",
    job: "Angualr.js",
    email: "Kalyan5678@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "harish",
    last: "kumar",
    job: "React.js",
    email: "haris1234h@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Kalyan",
    last: "krisha",
    job: "Angualr.js",
    email: "Kalyan5678@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
  {
    name: "Vinod",
    last: "swathi",
    job: "UI",
    email: "Vinod9012@gmail.com",
    id: uuidv4(),
    color: getColor(),
    color2: getColor(),
  },
];
function App() {
  const getData = useMemo(() => dummydataSourceModal, []);
  const [modelDummyData, setmodelDummyData] = useState(getData);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [obj, setobj] = useState({});
  const [dataSource, setdataSource] = useState(dummydataSource);
  const showModal = (arg) => {
    setobj(arg);
    setIsModalOpen(true);
  };
  const handleOk = () => {};
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [age, setAge] = React.useState(10);
  const [labelYes, setlabelYes] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChangesetlabelYes = (event) => {
    setlabelYes(event.target.value);
  };
  const handleTheDelete = (argObj) => {
    const newData = dummydataSource.filter((obj) => obj.id !== argObj.id);
    setdataSource(newData);
    handleCancel();
  };
  const [deletingIndex, setdeletingIndex] = useState(null);
  const deleteTheModelDummyData = () => {
    console.log("deletingIndex", deletingIndex);
    console.log("modelDummyData", modelDummyData, deletingIndex);
    const updateData = modelDummyData.filter((val, i) => {
      console.log("ndjbadahvad", i !== deletingIndex, i, deletingIndex);
      return i !== deletingIndex;
    });
    console.log("modelDummyData", updateData, deletingIndex);
    setmodelDummyData([...updateData]);
  };
  console.log("harish", modelDummyData);
  const [count, setCount] = useState({ starting: 0, ending: 20 });
  return (
    <div>
      <div className="container_name">
        {dataSource.map((obj) => {
          return (
            <p className="tableConatiner">
              <span
                className="names"
                style={{
                  cursor: "pointer",
                  background: "#" + obj.color,
                }}
                onContextMenu={(e) => {
                  e.preventDefault();
                  showModal(obj);
                }}
              >
                {" "}
                {obj.name}
              </span>
              <span
                className="names"
                style={{
                  cursor: "pointer",
                  background: "#" + obj.color2,
                }}
              >
                {" "}
                {obj.last}
              </span>
              ,
            </p>
          );
        })}
      </div>
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
              Reference Edit
            </h1>
            <h1 className="actions_buttons">
              {" "}
              <Button
                onClick={() => {
                  deleteTheModelDummyData();
                }}
                className="DeleteBtn"
              >
                Delete
              </Button>
              <span>
                <StepBackwardFilled className="playIcons" />
                <CaretLeftFilled
                  onClick={() => {
                    if (count.starting == 0) {
                      setCount({ starting: 0, ending: 20 });
                    } else {
                      const value = count.starting;
                      const value2 = count.ending;console.log("sjbshss",{ starting: value - 20, ending: value - 20 })
                      setCount({ starting: value - 20, ending: value2 - 20 });
                    }
                  }}
                  className="playIcons"
                />
                <CaretRightFilled 
                   onClick={() => {
                    if (count.starting >=modelDummyData.length) {
                      // setCount({ starting: 0, ending: 20 });
                    } else {
                      const value = count.starting;
                      const value2 = count.starting;
                      setCount({ starting: value + 20, ending: value2 + 40 });
                    }
                  }}
                className="playIcons" />
                <StepForwardFilled className="playIcons" />
              </span>
              <Button onClick={() => {}} className="unstructuredbtn">
                unstructured
              </Button>
              <Button
                onClick={() => {
                  handleOk();
                }}
                className="saveAndClose"
              >
                save
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
          <div className="conatiner_model">
            <div className="addElement">
              <LeftCircleOutlined />
              <h1>Add Element</h1>
            </div>
            <div className="dummydataSourceModal_conatiner">
              <div className="dummydataSourceModal">
                {modelDummyData
                  .slice(count.starting, count.ending)
                  .map((obj, index) => {
                    return (
                      <>
                        <input
                          className="inputTags"
                          style={{
                            cursor: "pointer",
                            background: "#" + obj.color,
                          }}
                          onClick={(e) => {
                            setdeletingIndex(index);
                          }}
                          onChange={(e) => {
                            const { value } = e.target;
                            const updateData = modelDummyData.map(
                              (argobj, i) => {
                                if (obj.id == argobj.id) {
                                  return {
                                    ...argobj,
                                    name: value,
                                  };
                                }
                                return argobj;
                              }
                            );
                            console.log("updateupdateDataData", updateData);

                            setmodelDummyData(updateData);
                            setdeletingIndex(index);
                          }}
                          value={obj.name}
                        />

                        <input
                          onClick={(e) => {
                            setdeletingIndex(index);
                          }}
                          onChange={(e) => {
                            const { value } = e.target;
                            const updateData = modelDummyData.map(
                              (argobj, i) => {
                                if (obj.id == argobj.id) {
                                  return {
                                    ...argobj,
                                    last: value,
                                  };
                                }
                                return argobj;
                              }
                            );

                            setmodelDummyData(updateData);
                            setdeletingIndex(index);
                          }}
                          className="inputTags"
                          style={{
                            cursor: "pointer",
                            background: "#" + obj.color2,
                          }}
                          value={obj.last}
                        />
                      </>
                    );
                  })}
              </div>
              <a
                className="href_a"
                href="https://www.straive.com/industry/information-services"
              >
                https://www.straive.com/industry/information-services
              </a>
              <div>
                <Button>cross ref</Button>
                <Button className="PublishedBtn">Published</Button>
              </div>
              <div>
                <p>page not found</p>
              </div>
            </div>
          </div>
          <Divider />
        </div>
      </Modal>
    </div>
  );
}

export default App;
