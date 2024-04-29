// @ts-check
type DogImageProps = {
  imageUrl: string
}

export const DogImage = ({ imageUrl }: DogImageProps) => {
  return <img src={imageUrl} alt="犬の画像" />
}

export default DogImage
