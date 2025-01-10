export type Task = {
  id: string;
  name: string;
  description?: string;
  status: Status;
};
export type State = {
  tasks: Task[];
  draggedTask: string | null;
};
export type Status = "TODO" | "DONE" | "IN_PROGRESS";
export type Actions = {
  dragTask: (id: string | null) => void;
  addTask: (name: string, description?: string) => void;
  removeTask: (id: string) => void;
  updateTask: (id: string, status: Status) => void;
};
