import Head from 'next/head'
import Avatar from '../components/Avatar'
import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { useRef } from 'react'

export default function Home() {
  const searchTermRef = useRef(null)
  const router = useRouter()
  const search = (e) => {
    e.preventDefault()
    const term = searchTermRef.current.value
    if (!term) return
    router.push(`/search?term=${term}`)
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header className="flex w-full justify-between p-5 text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* Right */}
        <div className="flex items-center space-x-4">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 cursor-pointer rounded-full p-2 hover:bg-gray-100" />
          <Avatar
            url={
              'https://lh3.googleusercontent.com/ogw/ADea4I4NWb1oWYEiqxqzTz834ChasFgWVvaymFt4udk4=s32-c-mo'
            }
          />
        </div>
      </header>
      {/* Body */}
      <form
        className="mt-44 flex w-4/5 flex-grow flex-col items-center"
        onSubmit={search}
      >
        <Image
          width={300}
          height={100}
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        />
        <div className="max-w- mx-auto mt-5 flex w-full max-w-md rounded-full border border-gray-200 px-5 py-3 focus-within:shadow-lg hover:shadow-lg sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="mr-3 h-5 w-5 text-gray-500" />
          <input
            ref={searchTermRef}
            type="text"
            className="flex-grow focus:outline-none "
          />
          <MicrophoneIcon className="mr-3 h-5 w-5 text-gray-500" />
        </div>
        <div className="mt-8 flex w-1/2 flex-col justify-center space-y-2 sm:flex-row sm:space-y-0">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>
      <Footer />
    </div>
  )
}
