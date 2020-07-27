import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const skills = [
   'react',
   'javascript',
   'graphql',
   'node.js',
   'rest api'
]

const SearchBox = () => {
   const [suggestions, setSuggestions] = useState([])
   const [text, setText] = useState('')

   const onTextChange = (e) => {
      const value = e.target.value
      setText(value)
      if (value.length === 0) {
         setSuggestions([])
      } else {
         const regex = new RegExp(`^${value}`, 'i')
         setSuggestions(skills.sort().filter(v => regex.test(v)))
      }
   }

   return (
      <div className="page-center">
         <form className="search-box page-center">
            <FaSearch />
            <input
               onChange={onTextChange}
               type="text"
               value={text}
               placeholder="Search for skills of interest"
            />
         </form>
         <ul>
            {suggestions.map(skill => <li>{skill}</li>)}
         </ul>
      </div>
   )

}

export default SearchBox