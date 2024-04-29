// @ts-check

import { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState<string[]>([])
  const [selectedBreed, setSelectedBreed] = useState('')
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => setBreeds(Object.keys(data.message)))
  }, [])
  return (
    <div>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
      />
    </div>
  )
}

export default DogListContainer
