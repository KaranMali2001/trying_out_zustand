"use client";
import { useTaskStore } from "@/lib/store";
import { Status } from "@/types";
import { useMemo } from "react";
import Task from "./task";

export default function Column({
  title,
  status,
}: {
  title: string;
  status: Status;
}) {
  const tasks = useTaskStore((state) => state.tasks);
  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.status === status),
    [tasks, status]
  );
  const updateTask = useTaskStore((state) => state.updateTask);
  const draggedTask = useTaskStore((state) => state.draggedTask);
  const dragTask = useTaskStore((state) => state.dragTask);
  const handleDrop = () => {
    console.log("HANDLE DROPPP", draggedTask, status);
    if (!draggedTask) return;
    updateTask(draggedTask, status);
    dragTask(null);
  };
  return (
    <section className="h-[600px] flex-1">
      <h2 className="ml-1 font-serif text-2xl font-semibold">{title}</h2>

      <div
        className="mt-3.5 h-full w-full flex-1 rounded-xl bg-gray-700/50 p-4"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-4">
          {filteredTasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </div>
      </div>
    </section>
  );
}
