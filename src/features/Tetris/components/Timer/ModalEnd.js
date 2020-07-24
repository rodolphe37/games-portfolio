import React from 'react';
import './Modal.css'

const reloadGame = () => {
  window.location.reload(false);
}

const ModalEnd = () => {
  return (
    <div className="modal-end modal-end-sm active">
    <div className="modal-end-overlay" />
    <div className="modal-end-container">
      <div className="modal-end-header">
        <div className="modal-end-title h4">Plus de point restant</div>
      </div>
      <div className="modal-end-body">
        <div className="content h6">
        <p>
        Vous n'avez plus de point restant,
        Voulez-vous recommencer la partie,
        arrivé à Moins 2000 points le jeu se réinitialisera
        </p>
        </div>
      </div>
      <div className="modal-end-footer">
        <button
          className="reload"
          onClick={reloadGame }
        >
          Recommencer le Jeu
        </button>
      </div>
    </div>
  </div>
  )
}

export default ModalEnd;
