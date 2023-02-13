import "./App.css";
import React, { useState  } from "react";
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
      html: "<div>kalyan harish vindo shiva hvvsdaasjvd auygsdvasgjdvasg advsugascdga fauvsdugasvdugsa fausdcuasdv vadsuvgjdv scadghcashyd ufadsyfady fuasdsavdjas ygasduyasdoq ogsoGSObasjdajsdv igyvdasisycdiqwfqwv fiyqweqywegqigdqiw  </div>",
    };
  }
  componentDidMount() {
    this.handleChange();
  }
  handleChange = (evt) => {
    // console.log("evtevtevt",evt.target.value,this.contentEditable.current.innerText)
    const str = this.contentEditable.current.innerText.split(" ");
    const newStr = str
      .map((val, index) => {
        return (
          "<span " +
          "style=background:" +
          colorObj[index].hex +
          ">" +
          val +
          "</span>"
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {};
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="Introduction">
        <h1>Introduction</h1>
        <p
          onContextMenu={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
        >
          <span>X</span>Abstract <span>X</span>
        </p>
        <p
          onContextMenu={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
        >
          <span>X</span>Aknowlegement <span>X</span>
        </p>
        <p
          onContextMenu={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
        >
          <span>X</span>Reference <span>X</span>
        </p>
        <p
          onContextMenu={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
        >
          <span>X</span>For Table of Contents use only <span>X</span>
        </p>
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
                  handleCancel();
                }}
                className="DeleteBtn"
              >
                Delete
              </Button>
              <span>
                <StepBackwardFilled
                  onClick={() => {
                    handleCancel();
                  }}
                  className="playIcons"
                />
                <CaretLeftFilled
                  onClick={() => {
                    handleCancel();
                  }}
                  me="playIcons"
                />
                <CaretRightFilled
                  onClick={() => {
                    handleCancel();
                  }}
                  className="playIcons"
                />
                <StepForwardFilled className="playIcons" />
              </span>
              <Button
                onClick={() => {
                  handleCancel();
                }}
                className="unstructuredbtn"
              >
                unstructured
              </Button>
              <Button
                onClick={() => {
                  handleCancel();
                }}
                className="saveAndClose"
              >
                save
              </Button>
              <span>
                <DeleteFilled
                  onClick={() => {
                    handleCancel();
                  }}
                  style={{
                    color: "red",
                  }}
                />
              </span>
              <span>
                <CloseSquareFilled
                  onClick={() => {
                    handleCancel();
                  }}
                  style={{
                    color: "red",
                  }}
                />
              </span>
            </h1>
          </div>
          <div className="conatiner_model">
            <div className="addElement">
              <MenuApp />
            </div>
            <div className="dummydataSourceModal_conatiner">
              <div className="dummydataSourceModal">
                <div>
                  <h1 className="OriginalRefernce">Original Reference</h1>
                  <div className="OriginalRefernce_conatiner">
                    TsaiC. L.DelaneyK. T.FredricksonG. H.Genetic Algorithm for
                    Discovery of Globally Stable Phases in Block
                    CopolymersMacromolecules2016496558656710.1021/acs.macromol.6b01323
                    C. ParaView: An End-User Tool for Large Data Visualization,
                    Visualization Handbook. 2005. Ahrens, J.; Geveci, B.; Law,
                    C. ParaView: An End-User Tool for Large Data Visualization,
                    Visualization Handbook. 2005.
                  </div>
                </div>
                <div id="MyComponent">
                  {" "}
                  <MyComponent />
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
