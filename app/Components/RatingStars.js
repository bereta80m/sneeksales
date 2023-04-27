"use client"
import { useState } from 'react'
import { StarIcon } from "@heroicons/react/24/solid";

function Rating() {
  const [rating, setRating] = useState(0)

  const handleClick = (newRating) => {
    setRating(newRating)
  }

  const stars = []
  for (let i = 1; i <= 5; i++) {
    const fill = rating >= i ? 'text-yellow-400' : 'text-gray-300'
    stars.push(
      <StarIcon
        key={i}
        className={`h-5 w-5 cursor-pointer ${fill}`}
        onClick={() => handleClick(i)}
      />
    )
  }

  return <div className="flex">{stars}</div>
}

export default Rating


/*
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'

function Rating() {
  const [rating, setRating] = useState(0)
  const [votes, setVotes] = useState(0)

  const handleClick = (newRating) => {
    setRating(newRating)
    setVotes(votes + 1)
  }

  const positiveVotes = (rating / votes) * 100 || 0

  const stars = []
  for (let i = 1; i <= 5; i++) {
    const fill = rating >= i ? 'text-yellow-400' : 'text-gray-300'
    stars.push(
      <StarIcon
        key={i}
        className={`h-5 w-5 ${fill}`}
        onClick={() => handleClick(i)}
      />
    )
  }

  return (
    <div className="flex flex-col">
      <div className="flex">{stars}</div>
      <div>{positiveVotes.toFixed(2)}% positive ratings</div>
    </div>
  )
}

export default Rating


*/