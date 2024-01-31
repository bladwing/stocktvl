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
      <div className="logo-container">
        <img src="img/tvlux.jpg" alt="logo" className='logo' />
      </div>
      <button onClick={openModal} className="btn btn-success" >Create Item</button>
      <CreateItemModal show={showModal} onClose={closeModal} />
    </nav>
  );
}