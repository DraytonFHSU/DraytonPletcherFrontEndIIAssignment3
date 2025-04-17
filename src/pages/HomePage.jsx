import Tasks from "../components/Task/Tasks";
import AddTask from "../components/Task/AddTask";

export default function HomePage() {
  return (
    <div className="container">
      <AddTask />
      <Tasks />
    </div>
  );
}
