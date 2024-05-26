import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import { HiXMark } from 'react-icons/hi2';
import ImageCard from '../ImageCard/ImageCard';

import './ImageModal.css';

function ImageModal({ showModal, setShowModal }) {
  return (
    <ReactModal
      isOpen={showModal.isOpen}
      contentLabel="Minimal Modal Example"
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setShowModal({ isOpen: false, photo: null })}
      className={'modal'}
      overlayClassName={'overlay'}
      closeTimeoutMS={150}
    >
      <HiXMark
        title="Icon for close image"
        size={40}
        color="white"
        onClick={() => setShowModal({ isOpen: false, photo: null })}
      />

      {showModal.photo && <ImageCard photo={showModal.photo} modal={true} />}
    </ReactModal>
  );
}

ImageModal.propTypes = {
  showModal: PropTypes.object,
  setShowModal: PropTypes.func,
};

export default ImageModal;
