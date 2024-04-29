// @ts-check
import { useEffect } from 'react'

type BreedsSelectProps = {
  breeds: string[]
  selectedBreed: string
  setSelectedBreed: (value: string) => void
}
export const BreedsSelect = ({
  breeds,
  selectedBreed,
  setSelectedBreed,
}: BreedsSelectProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue: string = event.target.value
    setSelectedBreed(selectedValue)
  }
  useEffect(() => {
    console.log(selectedBreed)
  }, [selectedBreed]) // selectedBreedが更新される度に実行
  return (
    <select value={selectedBreed} onChange={handleChange}>
      {breeds.map((breed, index) => (
        <option key={index} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  )
}

export default BreedsSelect
