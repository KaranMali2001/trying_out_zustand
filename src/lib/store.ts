import { Actions, State, Status } from "@/types";
import { v4 as uuid } from "uuid";
import { create } from "zustand";
export const useTaskStore = create<State & Actions>()((set) => ({
  tasks: [],
  draggedTask: null,
  dragTask: (id: string | null) => set({ draggedTask: id }),
  addTask: (name: string, description?: string) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: uuid(), name, description, status: "TODO" },
      ],
    })),
  removeTask: (id: string) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },
  updateTask: (id: string, status: Status) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, status } : task
      ),
    }));
  },
}));
