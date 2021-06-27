import React from "react";

export interface TaskData {
  id: string;
  title: string;
  state: "TASK_INBOX" | "TASK_PINNED" | "TASK_ARCHIVED";
}

interface TaskProps {
  task: TaskData;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }: TaskProps): JSX.Element => (
  <div className={`list-item ${state}`}>
    <label className="checkbox">
      <input type="checkbox" defaultChecked={state === "TASK_ARCHIVED"} disabled name="checked" />
      <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
    </label>
    <div className="title">
      <input type="text" value={title} readOnly placeholder="Input Title" style={{ background: "red" }} />
    </div>

    <div className="actions" onClick={(e) => e.stopPropagation()}>
      {state !== "TASK_ARCHIVED" && (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a onClick={() => onPinTask(id)}>
          <span className={`icon-star`} />
        </a>
      )}
    </div>
  </div>
);

export default Task;
