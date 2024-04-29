// @ts-check

import { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'
import DogImage from './DogImage'
export const DogListContainer = () => {
  const [breeds, setBreeds] = useState<string[]>([])
  const [selectedBreed, setSelectedBreed] = useState('')
  const [dogImageList, setDogImageList] = useState<string[]>([])
  const handleDisplay = () => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      .then(res => res.json())
      .then(data => setDogImageList(data.message))
      .catch((error)=> {
        console.log("fetchエラー"+error)
      })
  }
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => setBreeds(Object.keys(data.message)))
      .catch(error => {
        console.log('fetchエラー' + error)
      })

  }, [])


  return (
    <div>
      <div>
        <BreedsSelect
          breeds={breeds}
          selectedBreed={selectedBreed}
          setSelectedBreed={setSelectedBreed}
        />
        <button onClick={handleDisplay}>表示</button>
      </div>
      <ul>
        {dogImageList.map((imageUrl, index) => (
          <li key={index} >
            <DogImage imageUrl={imageUrl} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DogListContainer
