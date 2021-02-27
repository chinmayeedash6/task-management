import React from "react";
import { Row, Col, Grid, Container } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";

const ExistingTask = () => {
  return (
    <>
      <div className="task">
        <Sidebar />
        <div className="container-fluid d-flex justify-content-center shadow">
          <div className="row">
            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body text-dark">
                  <h4 className="card-title">Task Title</h4>
                  <p className="card-text text-secondary">
                    djnbjdasjbjfdbfjhba
                  </p>
                  <a href="#" className="btn btn-outline-success">
                    Go AnyWhere
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body text-dark">
                  <h4 className="card-title">Task Title</h4>
                  <p className="card-text text-secondary">
                    djnbjdasjbjfdbfjhba
                  </p>
                  <a href="#" className="btn btn-outline-success">
                    Go AnyWhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center">
                
                <div className="card-body text-dark">
                  <h4 className="card-title">Task Title</h4>
                  <p className="card-text text-secondary">
                    djnbjdasjbjfdbfjhba
                  </p>
                  <a href="#" className="btn btn-outline-success">
                    Go AnyWhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExistingTask;
