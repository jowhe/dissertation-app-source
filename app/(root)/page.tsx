import TaskCategories from "@/components/interface/TaskCategories";
import TaskIndicator from "@/components/interface/TaskIndicator";
import TaskList from "@/components/TaskList";

export default async function Home() {
  return (
    <div className="p-6 mx-auto lg:px-6 lg:py-3">
      <TaskIndicator />
      <div className="lg:container lg:flex mx-auto gap-x-5">
        <TaskCategories />
        <TaskList />
      </div>
    </div>
  )
}
