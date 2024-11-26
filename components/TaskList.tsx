import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Button } from './ui/button'
import { FaCheckCircle } from 'react-icons/fa'
import { FaPen, FaTrash } from 'react-icons/fa6'

const TaskList = () => {
  return (
    <div className="container border rounded-lg px-6 py-3 shadow-md dark:bg-neutral-900 mx-auto mt-3">
        <h1 className="text-3xl">Tasks</h1>
        <Table>
          <TableCaption>Your recent Tasks</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Deadline</TableHead>
              <TableHead>Options</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Wash Dishes</TableCell>
              <TableCell>Wash all dirty dishes.</TableCell>
              <TableCell>By Tomorrow</TableCell>
              <TableCell className='grid grid-cols-3 grid-flow-row gap-7'>
                <Button className='max-w-[100px] text-green-400 dark:bg-neutral-800'><FaCheckCircle /></Button>
                <Button className='max-w-[100px] text-yellow-400 dark:bg-neutral-800'><FaPen /></Button>
                <Button className='max-w-[100px] text-red-400 dark:bg-neutral-800'><FaTrash /></Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </div>
  )
}

export default TaskList