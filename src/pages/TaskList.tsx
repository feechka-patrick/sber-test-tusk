import React from "react";
import { Card, Table, } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { SlTrash } from "react-icons/sl";
import { deleteTask } from "../store/taskSlice";

const TaskList = () => {
  const tasks = useAppSelector((store) => store.tasks.stack);
  const dispath = useAppDispatch();

  const dateParsing = (dateNumber: number | null) => {
    if (dateNumber === null) return "-";
    const date = new Date(dateNumber);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }

  return (
    <Card style={{ height: 'fit-content' }} className="m-4 p-3">

      {tasks.length !== 0 &&
        <Table striped >
          <thead>
            <tr>
              <th></th>
              <th>status</th>
              <th>date create</th>
              <th>date close</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((item) => {
              return (
                <>
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.status}</td>
                    <td>{dateParsing(item.dateCreate)}</td>
                    <td>{dateParsing(item.dateClose)}</td>

                    <td>
                      <button className="btn btn-outline">
                        <SlTrash onClick={() => {
                          dispath(deleteTask(item.id))
                        }} />
                      </button>

                    </td>
                  </tr>
                </>
              )
            })}

          </tbody>
        </Table>
      }

      {tasks.length === 0 &&
        <div className="text-center m-4">
          List is empty
        </div>
      }
    </Card>
  );
}

export default TaskList;
