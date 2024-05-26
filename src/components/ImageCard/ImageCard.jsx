import PropTypes, { bool } from 'prop-types';
import styles from './ImageCard.module.css';

function ImageCard({ photo, modal }) {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.img}
        src={modal ? photo.fullImg : photo.thumbImg}
        alt={photo.alt}
      />
    </div>
  );
}

ImageCard.propTypes = {
  photo: PropTypes.object,
  modal: bool,
};

export default ImageCard;
