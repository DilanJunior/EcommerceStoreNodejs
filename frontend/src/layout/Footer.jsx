import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Footer() {
  return (
   <>
   <footer className="bg-gray-800 text-white mt-2 px-3 border-b-white ">
        <div className=" mx-auto flex flex-col items-center justify-center"></div>
      </footer>

      <div className="flex flex-wrap py-2 px-3 text-center md:items-center md:justify-between bg-gray-800 text-white justify-center">
        <div className="flex space-x-4 my-4">
          <a href="#" className="hover:text-gray-400">
            Facebook
          </a>
          <a href="#" className="hover:text-gray-400">
            Twitter
          </a>
          <a href="#" className="hover:text-gray-400">
            Instagram
          </a>
          <a href="#" className="hover:text-gray-400"></a>
        </div>

        <p className="text-sm w-auto ">
          &copy; {new Date().getFullYear()} Bisutería Jacky.
        </p>
      </div>
   </>
  )
}

