import { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";

function Cards({ post }) {
  const [model, setModel] = useState(false);

  return (
    <>
      <div>
        <Modal size="lg" isOpen={model} toggle={() => setModel(!model)}>
          <ModalHeader
            toggle={() => setModel(!model)}
            style={{
              color: "blue",
              textTransform: "uppercase",
              fontSize: "25px",
            }}
          >
            {post.title}
          </ModalHeader>
          <ModalHeader style={{ color: "blueviolet" }}>{post.body}</ModalHeader>
        </Modal>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div
              className="card h-100"
              style={{ cursor: "pointer" }}
              onClick={() => setModel(true)}
            >
              <div className="card-body">
                <h5 className="card-title" style={{color:'blueviolet'}}>
                  <b>{post.title.slice(0, 15).toUpperCase()}</b>
                </h5>
                <p className="card-text">{post.body.slice(0, 130)}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card h-100"
              style={{ cursor: "pointer" }}
              onClick={() => setModel(true)}
            >
              <div className="card-body">
                <h5 className="card-title" style={{color:'blueviolet'}}>
                  <b>{post.title.slice(0, 15).toUpperCase()}</b>
                </h5>
                <p className="card-text">{post.body.slice(0, 130)}</p>
              </div>
            </div>
          </div>
          <div className="col" onClick={() => setModel(true)}>
            <div
              className="card h-100"
              style={{ cursor: "pointer" }}
              onClick={() => setModel(true)}
            >
              <div className="card-body">
                <h5 className="card-title" style={{color:'blueviolet'}}>
                  <b>{post.title.slice(0, 15).toUpperCase()}</b>
                </h5>
                <p className="card-text">{post.body.slice(0, 130)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
