import Link from 'next/link'
import React from 'react'

import SettingsDropdown from "@/components/interface/SettingsDropdown"
import { Input } from '../ui/input'
import UserDropdown from './UserDropdown'

const FullNav = () => {
  return (
    <div className="border-b shadow-lg px-7 py-3 bg-neutral-200 dark:bg-neutral-900">
      <nav className="flex justify-between gap-x-6">
        <Link
          href="/"
        ><h1 className='text-3xl'>Task Tracker</h1></Link>
        <ul className="flex flex-col gap-x-9 md:flex-row lg:justify-evenly">
          <li className="my-auto">
            <Input
              type='text'
              placeholder='Search Tasks'
              className='md:w-[365px]'
            />
          </li>
          <li className="my-auto">
            <UserDropdown />
          </li>
          <li className="my-auto">
            <SettingsDropdown />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default FullNav