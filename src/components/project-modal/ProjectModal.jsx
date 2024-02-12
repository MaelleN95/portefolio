import { useState, useEffect } from 'react';
import useScreenSize from '../../lib/customHooks';

import Modal from 'antd/es/modal/Modal';

export function ProjectModal(props) {
  const { pictures } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const screenWidth = useScreenSize().width;

  const [modalWidth, setModalWidth] = useState('88');

  useEffect(() => {
    if (screenWidth <= 1175) {
      setModalWidth('95');
    } else {
      setModalWidth('88');
    }
  }, [screenWidth]);
  return (
    <>
      <button type="primary" onClick={showModal} className="button-modale">
        Voir plus d&apos;images
      </button>
      <Modal
        open={isModalOpen}
        footer={[]}
        onCancel={handleCancel}
        width={`${modalWidth}%`}
      >
        {pictures.map((pic, i) => (
          <img src={pic} alt="image des pages du projet" key={i} />
        ))}
      </Modal>
    </>
  );
}

export default ProjectModal;
