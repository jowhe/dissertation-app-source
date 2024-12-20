import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { UserTasksCategories, UserTaskType } from '@/lib/types';
import { FaCalendar, FaClock, FaCheck, FaExclamation } from 'react-icons/fa';

const Categories: Array<UserTasksCategories> = [
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

const Tasks: Array<UserTaskType> = [
  {
    name: "task1",
    description: "task1 desctiption",
    category: Categories[0],
    deadline: "21-12-2024"
  },
  {
    name: "task2",
    description: "task1 desctiption",
    category: Categories[0],
    deadline: "21-12-2024"
  },
  {
    name: "task3",
    description: "task1 desctiption",
    category: Categories[0],
    deadline: "21-12-2024"
  },
  {
    name: "task4",
    description: "task1 desctiption",
    category: Categories[0],
    deadline: "21-12-2024"
  },
  {
    name: "task5",
    description: "task1 desctiption",
    category: Categories[0],
    deadline: "21-12-2024"
  },
]

function TaskCategories() {
  return (
    <div className="container border rounded-lg px-6 py-6 shadow-md dark:bg-neutral-900 mx-auto mt-3 w-auto h-min max-h-min gap-5">
      <h1 className='text-3xl'>Categories</h1>
      <Accordion type='multiple'>
      {Categories?.length > 0 && (
        Categories.map((cat: UserTasksCategories) => (
        <AccordionItem key={cat.name} value={cat.name} className={cat.color}>
          <AccordionTrigger><span className='flex justify-between w-full'>
          <p>{cat.name}</p>
          <p>{cat.value}</p>
          </span></AccordionTrigger>
          <AccordionContent>
            <ul>
              {Tasks.length > 0 && (
                Tasks.map((task: UserTaskType) => (
                  cat.name == task.category.name && (
                    <li key={task.name} className='px-2'>
                      <p><b>{task.name}</b></p>
                      <span className='flex flex-wrap w-full justify-between'>
                        <p className='text-neutral-400'>{task.description}</p>
                        <p className='text-neutral-400'>{task.deadline}</p>
                      </span>                    
                    </li>
                  )
                ))
              )}
            </ul>
          </AccordionContent>
        </AccordionItem>
      )))}
      </Accordion>
    </div>
  )
}

export default TaskCategories