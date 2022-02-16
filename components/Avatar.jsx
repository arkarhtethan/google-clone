import React from 'react'

const Avatar = ({ url, className }) => {
  return (
    <img
      className={`h-10  transform cursor-pointer rounded-full transition-all duration-150 hover:scale-125 ${className}`}
      loading="lazy"
      src={url}
      alt="profile picture"
    />
  )
}

export default Avatar
