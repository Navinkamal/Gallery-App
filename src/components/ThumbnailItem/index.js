// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbNail, isActive, updateThumbnail} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbNail

  const thumbnailImage = isActive ? `thumbnail active` : `thumbnail`

  const onClickThumbNail = () => {
    updateThumbnail(id)
  }
  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbNail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
