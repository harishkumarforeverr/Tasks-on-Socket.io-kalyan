import React from "react";
import {
  UserOutlined,
  SettingOutlined,
  ProjectOutlined,
  PullRequestOutlined,
  ExperimentOutlined,
  TransactionOutlined,
} from "@ant-design/icons";
import "./Conatiner2.css";
import { Button, Card, Select } from "antd";
// import videoIcons from "./videoIcons.jpeg";
function Conatiner2() {
  const userInfoObj = [
    {
      title: "Users's Guide",
      icons: <UserOutlined />,
    },
    {
      title: "Product Page",
      icons: <ExperimentOutlined />,
    },
    {
      title: "Data Sheet",
      icons: <ProjectOutlined />,
    },
    {
      title: "Tuning Page",
      icons: <SettingOutlined />,
    },
    {
      title: "Tools Page",
      icons: <PullRequestOutlined />,
    },
    {
      title: "E2E testing",
      icons: <TransactionOutlined />,
    },
  ];
  return (
    <div className="Conatiner2sIconsTitle">
      <div>
        <Card
          className="boxshadow conatiner2Card"
          bordered={false}
          style={{ width: 300 }}
        >
          <div>
            <h1
              style={{
                fontSize: "1.4rem",
              }}
            >
              select devices{" "}
              <span
                style={{
                  color: "red",
                }}
              >
                *
              </span>
            </h1>
            <Select
              style={{
                width: "100%",
              }}
              placeholder="select"
              options={[
                {
                  value: "123",
                  label: "123",
                },
                {
                  value: "l22eucy",
                  label: "l22eucy",
                },
                {
                  value: "ICMF3RTUSJSKKS",
                  label: "ICMF3RTUSJSKKS",
                },
              ]}
            />
          </div>
          <div>
            <div className="deatiles">
              <span className="redColor"></span>
              <span className="numberText">ICMF3RTUSJSKKS</span>
            </div>
            <p
              style={{
                fontSize: "1.1rem",
              }}
            >
              The support of ICMF3RTUSJSKKS{" "}
            </p>
          </div>
          <Button className="lightRed btn">Select Motor</Button>
        </Card>
        <div>
          {/* <img className="videoIcon" style={{}} src={videoIcons} /> */}
        </div>
      </div>
      <div className="cardsRigghtContainer">
        {userInfoObj.map((obj) => {
          return (
            <Card
              className="boxshadow conatiner2CardImage"
              bordered={false}
              style={{ width: 300 }}
            >
              <div className="rightConatinesIcons">{obj.icons}</div>
              <div className="titleRightConatiner2">{obj.title}</div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Conatiner2;
