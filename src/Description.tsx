// @ts-check
import { useState } from 'react'
import DogImage from './DogImage'
import DogListContainer from './DogListContainer'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/coonhound/n02089078_3183.jpg',
  ) // 犬の画像を設定
  const handleClick = () => {
    // ボタンクリック時に犬の画像を変更
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setDogUrl(data.message))
      .catch(error => {
        console.error('fetchエラー:', error)
      })
  }
  return (
    <div>
      <main className="content">
        <p>犬の画像を表示するサイトです。</p>
        <div className="dogImg">
          <DogImage imageUrl={dogUrl} />
          <div>
            <button onClick={handleClick}>更新</button>
          </div>
        </div>
      </main>
      <DogListContainer />
    </div>
  )
}

export default Description
