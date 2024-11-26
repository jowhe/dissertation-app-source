import TaskIndicator from "@/components/interface/TaskIndicator";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="p-6 mx-auto lg:px-6 lg:py-3">
      <TaskIndicator />
    </div>
  )
}
