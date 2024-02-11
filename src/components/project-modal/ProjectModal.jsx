import { useState } from 'react';

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

  return (
    <>
      <button type="primary" onClick={showModal} className="button-modale">
        Voir plus d&apos;images
      </button>
      <Modal open={isModalOpen} footer={[]} onCancel={handleCancel} width="80%">
        {pictures.map((pic, i) => (
          <img src={pic} alt="image des pages du projet" key={i} />
        ))}
      </Modal>
    </>
  );
}

export default ProjectModal;
