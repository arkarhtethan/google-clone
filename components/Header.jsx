import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'

const Header = () => {
  const router = useRouter()
  const searchInputRef = useRef()
  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value
    if (!term) return
    router.push(`/search/?term=${term}`)
  }
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full items-center p-6">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          onClick={() => router.push('/')}
          className="cursor-pointer"
        />
        <form className="ml-10 mr-5 flex max-w-3xl flex-grow items-center rounded-full border border-gray-200 px-6 py-3 shadow-lg">
          <input
            type="text"
            ref={searchInputRef}
            defaultValue={router.query.term}
            className="w-full  flex-grow focus:outline-none"
          />
          <XIcon
            className="h-7 transform cursor-pointer text-gray-500 transition duration-100 hover:scale-125 sm:mr-3"
            onClick={() => (searchInputRef.current.value = '')}
          />
          <MicrophoneIcon
            className="mr-3 hidden h-6 border-l-2  border-b-gray-300 pl-4 text-blue-400 sm:inline-flex"
            onClick={() => (searchInputRef.current.value = '')}
          />
          <SearchIcon className="hidden h-6 text-blue-500 sm:inline-flex" />
          <button hidden type="submit " onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url={
            'https://lh3.googleusercontent.com/ogw/ADea4I4NWb1oWYEiqxqzTz834ChasFgWVvaymFt4udk4=s32-c-mo'
          }
        />
      </div>
      <HeaderOptions />
    </header>
  )
}

export default Header
