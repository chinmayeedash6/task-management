import React, { useState, useEffect } from "react";
import { Col, Row, Modal, Button, Form } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import { MDBDataTableV5 } from "mdbreact";
import moment from "moment";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const AddNewTask = () => {
  const inputStyle = { padding: 5, margin: "20px auto" };

  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDeadline, setTaskDeadline] = useState(new Date());
  const [taskPriority, setTaskPriority] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [show, setShow] = useState(false);
  const [allTask, setAllTask] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setAllTask();
  });

  const data = {
    columns: [
      {
        label: "TaskName",
        field: "taskName",
        sort: "asc",
      },
      {
        label: "Description",
        field: "taskDescription",
        sort: "asc",
      },
      {
        label: "Deadline",
        field: "taskDeadline",
        selector: "taskDeadline",
        sort: "asc",
        render: (text) => <span>{moment(text).format("DD-MM-YYYY")}</span>,
      },
      {
        label: "Priority",
        field: "taskPriority",
        sort: "asc",
      },
      {
        label: "Status",
        field: "taskStatus",
        sort: "asc",
      },
      {
        label: "Action",
        field: "action",

        // selector: (data, text, record) => (
        //   <a>
        //     <FaPencilAlt />
        //   </a>
        // ),
      },
    ],

    rows: [
      {
        id: 1,
        taskName: "Conan the Barbarian",
        taskDescription: "Conan the Barbarian",
        taskDeadline: "1/1/2012",
        taskPriority: "low",
        taskStatus: "ongoing",
        action: (
          <>
            <a href="#">
              <FaPencilAlt />
            </a>
            <a href="#">
              <FaTrashAlt />
            </a>
          </>
        ),
      },
      {
        id: 2,
        taskName: "Conan the Barbarian",
        taskDescription: "Conan the Barbarian",
        taskDeadline: "1/1/2012",
        taskPriority: "high",
        taskStatus: "Completed",
        action: (
          <>
            <a href="#">
              <FaPencilAlt />
            </a>
            <a href="#">
              <FaTrashAlt />
            </a>
          </>
        ),
      },
      {
        id: 3,
        taskName: "Conan the Barbarian",
        taskDescription: "Conan the Barbarian",
        taskDeadline: "1/1/2012",
        taskPriority: "low",
        taskStatus: "Completed",
        action: (
          <>
          <a href="#">
            <FaPencilAlt />
          </a>
          <a href="#">
            <FaTrashAlt />
          </a>
        </>
        ),
      },
      {
        id: 4,
        taskName: "Conan the Barbarian",
        taskDescription: "Conan the Barbarian",
        taskDeadline: "1/1/2012",
        taskPriority: "high",
        taskStatus: "Completed",
        action: (
          <>
            <a href="#">
              <FaPencilAlt />
            </a>
            <a href="#">
              <FaTrashAlt />
            </a>
          </>
        ),
      },
      {
        id: 5,
        taskName: "Conan the Barbarian",
        taskDescription: "Conan the Barbarian",
        taskDeadline: "1/1/2012",
        taskPriority: "medium",
        taskStatus: "Completed",
        action: (
          <>
            <a href="#">
              <FaPencilAlt />
            </a>
            <a href="#">
              <FaTrashAlt />
            </a>
          </>
        ),
      },
      {
        id: 6,
        taskName: "Conan the Barbarian",
        taskDescription: "Conan the Barbarian",
        taskDeadline: "1/1/2012",
        taskPriority: "high",
        taskStatus: "Completed",
        action: (
          <>
            <a href="#">
              <FaPencilAlt />
            </a>
            <a href="#">
              <FaTrashAlt />
            </a>
          </>
        ),
      },
    ],
  };

  const onFinishForm = (e) => {
    e.preventDefault(e);

    e.taskDeadline = moment(e.taskDeadline).format("YYYY-MM-DD");
    const userId = JSON.parse(localStorage.getItem("User Info"));
    console.log("userId:", userId);

    const dataValue = {
      taskName: taskName,
      taskDescription: taskDescription,
      taskPriority: taskPriority,
      taskStatus: taskStatus,
      taskDeadline: taskDeadline,
      assignedTo: userId.employee._id,
    };

    fetch("http://task-mgmt-api.herokuapp.com/api/employee/task", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataValue),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response);
        setAllTask();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="container">
          <Row>
            <Col>
              <h4
                className="btn btn-primary btn-sm mt-3 float-right"
                onClick={handleShow}
              >
                Add Task
              </h4>
            </Col>
          </Row>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Add New Tasks</Modal.Title>
            </Modal.Header>
            <Form onSubmit={onFinishForm}>
              <Modal.Body>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail" role="form">
                    <Form.Label>TaskName</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Task Title"
                      value={taskName}
                      onChange={(e) => setTaskName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="description of task"
                      value={taskDescription}
                      onChange={(e) => setTaskDescription(e.target.value)}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>DeadLine</Form.Label>
                  <Form.Control
                    type="date"
                    value={taskDeadline}
                    onChange={(e) => setTaskDeadline(e.target.value)}
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Priority</Form.Label>
                    <Form.Control
                      as="select"
                      custom
                      value={taskPriority}
                      onChange={(e) => setTaskPriority(e.target.value)}
                    >
                      <option value="low">Low</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                      as="select"
                      value={taskStatus}
                      custom
                      onChange={(e) => setTaskStatus(e.target.value)}
                    >
                      <option value="ongoing">Ongoing</option>
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Button
                  className="btn btn-sm"
                  variant="dark"
                  onClick={handleClose}
                >
                  Close
                </Button>
                <Button
                  className="btn-sm btn-info"
                  type="submit"
                  onClick={handleClose}
                >
                  Submit
                </Button>
              </Modal.Body>
            </Form>
          </Modal>

          <MDBDataTableV5
            MDBDataTableV5
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={data}
            pagingTop
            searchTop
            searchBottom={false}
            bordered={true}
            striped
          />
        </div>
      </div>
    </>
  );
};

export default AddNewTask;
