import "./App.css";
import React, { useState } from "react";
import { Button, Modal, Divider } from "antd";
import {
  DeleteFilled,
  CloseSquareFilled,
  StepBackwardFilled,
  CaretLeftFilled,
  CaretRightFilled,
  StepForwardFilled,
} from "@ant-design/icons";
// no dotenv

import ContentEditable from "react-contenteditable";
import MenuApp from "./Menu";
import { colorObj } from "./constant";

class MyComponent extends React.Component {
  constructor() {
    super();
    this.contentEditable = React.createRef();
    this.state = {
      html: "<div> Fredrickson, G. H. The Equilibrium Theory ofInhomogenous Polymers; Oxford Science Publications: Oxford, UK, 2006. </div>",
    };
  }
  componentDidMount() {
    this.handleChange();
  }
  handleChange = (evt) => { 
    const str = this.contentEditable.current.innerText.split(" ");
    const newStr = str
      .map((val, index) => {
        return (
          "<div " +
          "style=display:inline;background:" +
          colorObj[index].hex +
          ">" +
          val +
          "</div>"
        );
      })
      .join(" ");
    console.log("newStrnewStr", newStr);
    this.setState({ html: newStr });
  };

  render = () => {
    return (
      <div className="editAble">
        <ContentEditable
          xml-class="ContentEditable"
          innerRef={this.contentEditable}
          html={this.state.html} // innerHTML of the editable div
          disabled={false} // use true to disable editing
          onChange={this.handleChange} // handle innerHTML change
          tagName="article" // Use a custom HTML tag (uses a div by default)
        />
      </div>
    );
  };
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOk = () => {};
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div xml-class="App">
      <div xml-class="Introduction" className="Introduction">
        <h1>Introduction</h1>
        <p class="extraContent"
          xml-class="Abstract"
          onContextMenu={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
        >
          {/* <div className="small_x" xml-class="Reference_spanX">X</div> */}
          Abstract{" "}
          {/* <div className="small_x" xml-class="Reference_spanX">X</div> */}
        </p>
        <p class="extraContent"
          xml-class="Abstract"
          onContextMenu={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
        >
          {/* <div className="small_x" xml-class="Reference_spanX">X</div> */}
          Aknowlegement{" "}
          {/* <div className="small_x" xml-class="Reference_spanX">X</div> */}
        </p>
        <p class="extraContent"
          xml-class="Reference"
          onContextMenu={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
        >
          {/* <div className="small_x" xml-class="Reference_spanX">X</div> */}
          Reference{" "}
          {/* <div className="small_x" xml-class="Reference_spanX">X</div> */}
        </p>
        <p class="extraContent"
          xml-class="Contents"
          onContextMenu={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
        >
          {/* <div className="small_x" xml-class="Reference_spanX">X</div> */}
          For Table of Contents use
          only
           {/* <div className="small_x" xml-class="Reference_spanX">X</div> */}
        </p>
      </div>

      <Modal
        xml-class="modelEdit_model"
        width={500}
        style={{
          top: "1rem",
        }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div xml-class="modelEdit" className="modelEdit">
          <div
            xml-class="paddingforModel"
            className="paddingforModel"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#acc3d1",
            }}
          >
            <h1
              xml-class="Reference_tag"
              style={{
                fontSize: "1.2rem",
                color: "#315390",
              }}
            >
              Reference Edit
            </h1>
            <h1 xml-class="actions_buttons" className="actions_buttons">
              {" "}
              <Button
                xml-class="DeleteBtn"
                onClick={() => {
                  handleCancel();
                }}
                className="DeleteBtn"
              >
                Delete
              </Button>
              <div className="smallContainer">
                <StepBackwardFilled
                  xml-class="playIcons"
                  onClick={() => {
                    handleCancel();
                  }}
                  className="playIcons"
                />
                <CaretLeftFilled
                  xml-class="CaretLeftFilled"
                  onClick={() => {
                    handleCancel();
                  }}
                  me="playIcons"
                />
                <CaretRightFilled
                  xml-class="CaretRightFilled"
                  onClick={() => {
                    handleCancel();
                  }}
                  className="playIcons"
                />
                <StepForwardFilled
                  xml-class="StepForwardFilled"
                  className="playIcons"
                />
              </div>
              <Button
                xml-class="unstructuredbtn"
                onClick={() => {
                  handleCancel();
                }}
                className="unstructuredbtn"
              >
                unstructured
              </Button>
              <Button
                xml-class="saveAndClose"
                onClick={() => {
                  handleCancel();
                }}
                className="saveAndClose"
              >
                save
              </Button>
              <div className="smallContainer">
                <DeleteFilled
                  xml-class="DeleteFilled"
                  onClick={() => {
                    handleCancel();
                  }}
                  style={{
                    color: "red",
                  }}
                />
              </div>
              <div className="smallContainer">
                <CloseSquareFilled
                  xml-class="CloseSquareFilled"
                  onClick={() => {
                    handleCancel();
                  }}
                  style={{
                    color: "red",
                  }}
                />
              </div>
            </h1>
          </div>
          <div xml-class="conatiner_model" className="conatiner_model">
            <div xml-class="addElement" className="addElement">
              <MenuApp xml-class="MenuApp" />
            </div>
            <div
              xml-class="dummydataSourceModal_conatiner"
              className="dummydataSourceModal_conatiner"
            >
              <div
                xml-class="dummydataSourceModal"
                className="dummydataSourceModal"
              >
                <div xml-class="Original">
                  <h1 xml-class="FredricksonG" className="OriginalRefernce">
                    Original Reference
                  </h1>
                  <div
                    xml-class="Reference"
                    className="OriginalRefernce_conatiner"
                  >
                    TsaiC. L.DelaneyK. T.FredricksonG. H.Genetic Algorithm for
                    Discovery of Globally Stable Phases in Block
                    CopolymersMacromolecules2016496558656710.1021/acs.macromol.6b01323
                    C. ParaView: An End-User Tool for Large Data Visualization,
                    Visualization Handbook. 2005. Ahrens, J.; Geveci, B.; Law,
                    C. ParaView: An End-User Tool for Large Data Visualization,
                    Visualization Handbook. 2005.
                  </div>
                </div>
                <div xml-class="MyComponent" id="MyComponent">
                  {" "}
                  <MyComponent xml-class="MyComponent_props" />
                </div>
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