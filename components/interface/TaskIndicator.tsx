import React from 'react'
import { UserTasksCategories } from '@/lib/types';
import { FaCalendar, FaCheck, FaClock, FaExclamation } from 'react-icons/fa6';

const Items: Array<UserTasksCategories> = [
    {
      name: 'Upcoming Tasks',
      value: 5,
      color: 'blue',
      icon: <FaCalendar className="my-auto" />
    },
    {
      name: 'Overdue Tasks',
      value: 2,
      color: 'red',
      icon: <FaClock className="my-auto" />
    },
    {
      name: 'Active Tasks',
      value: 10,
      color: 'green',
      icon: <FaCheck className="my-auto" />
    },
    {
      name: 'Important Tasks',
      value: 3,
      color: 'yellow',
      icon: <FaExclamation className="my-auto" />
    },
];

const TaskIndicator = () => {
  
  return (
    <section className="mx-auto grid gap-5 grid-flow-row scroll-smooth max-h-[200px] md:overflow-visible overflow-y-scroll md:max-h-full md:grid-cols-4 lg:container">
      
      {Items?.length > 0 && (
        Items.map((item: UserTasksCategories) => (
          <div key={item?.name} className="p-6 rounded-lg dark:border dark:bg-neutral-900 bg-neutral-200 shadow-md md:hover:scale-110 cursor-pointer">
            <h1 className="text-3xl">{item?.name}</h1>
            <h2 className="text-2xl my-3 flex gap-3 justify-end">{item?.icon} {item?.value}</h2>
            <div className={`border border-${item?.color}-400 mt-auto`}></div>
          </div>
        ))
      )}
      
    </section>
  )
}

export default TaskIndicator