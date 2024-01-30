import React, { useState } from 'react';
import CreateItemModal from './createItem/CreateItem';


export default function Nav() {
    const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <nav className='Nav'>
      <button onClick={openModal}>Create Item</button>
      <CreateItemModal show={showModal} onClose={closeModal} />
    </nav>
  )
}
