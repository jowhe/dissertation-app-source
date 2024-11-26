import React from 'react'

const TaskIndicator = () => {
  return (
    <section className="mx-auto grid gap-5 grid-flow-row scroll-smooth max-h-[200px] overflow-scroll md:max-h-full  md:grid-cols-4 lg:container">
      <div className="p-6 rounded-lg dark:border dark:bg-neutral-950 bg-neutral-100 shadow-md">
        <h1 className="text-3xl">Upcoming Tasks</h1>
        <h2 className="text-2xl text-end my-3">0</h2>
        <div className="border border-blue-400 mt-auto"></div>
      </div>
      <div className="p-6 rounded-lg dark:border dark:bg-neutral-950 bg-neutral-100 shadow-md">
        <h1 className="text-3xl">Overdue Tasks</h1>
        <h2 className="text-2xl text-end my-3">0</h2>
        <div className="border border-red-400 mt-auto"></div>
      </div>
      <div className="p-6 rounded-lg dark:border dark:bg-neutral-950 bg-neutral-100 shadow-md">
        <h1 className="text-3xl">Active Tasks</h1>
        <h2 className="text-2xl text-end my-3">0</h2>
        <div className="border border-green-400 mt-auto"></div>
      </div>
      <div className="p-6 rounded-lg dark:border dark:bg-neutral-950 bg-neutral-100 shadow-md">
        <h1 className="text-3xl">Important Tasks</h1>
        <h2 className="text-2xl text-end my-3">0</h2>
        <div className="border border-yellow-400 mt-auto"></div>
      </div>
    </section>
  )
}

export default TaskIndicator