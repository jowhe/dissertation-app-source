import React from 'react'
import { UserTasksCategories } from '@/lib/types';
import { FaCalendar, FaCheck, FaClock, FaExclamation } from 'react-icons/fa6';

const TaskCategories: Array<UserTasksCategories> = [
    {
      name: 'Upcoming Tasks',
      value: 5,
      color: 'border-blue-400',
      icon: <FaCalendar className="my-auto" />,
    },
    {
      name: 'Overdue Tasks',
      value: 2,
      color: 'border-yellow-400',
      icon: <FaClock className="my-auto" />,
    },
    {
      name: 'Active Tasks',
      value: 10,
      color: 'border-green-400',
      icon: <FaCheck className="my-auto" />,
    },
    {
      name: 'Important Tasks',
      value: 3,
      color: 'border-red-400',
      icon: <FaExclamation className="my-auto" />,
    },
];

const TaskIndicator = async () => {
  
  return (
    <section className="mx-auto grid gap-5 grid-flow-row scroll-smooth max-h-[200px] md:overflow-visible overflow-y-scroll md:max-h-full md:grid-cols-4 lg:container">
      
      {TaskCategories?.length > 0 && (
        TaskCategories.map((cat: UserTasksCategories) => (
          <div key={cat?.name} className="p-6 rounded-lg dark:border dark:bg-neutral-900 bg-neutral-200 shadow-md md:hover:scale-110 cursor-pointer">
            <h1 className="text-3xl">{cat?.name}</h1>
            <h2 className="text-2xl my-3 flex gap-3 justify-end">{cat?.icon} {cat?.value}</h2>
            <div className={`border ${cat.color} mt-auto`}></div>
          </div>
        ))
      )}
      
    </section>
  )
}

export default TaskIndicator