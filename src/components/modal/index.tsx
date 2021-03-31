import React from 'react';
import Modal from 'react-modal';
import { Entry } from '../../redux/modules/movies/types';
 import {Button, Col, Container, Row } from "react-bootstrap"
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

interface ModalProps {
    movie?: Entry;
    onClose: () => void;
    isOpen: boolean;
}
export default function MovieDetails(props : ModalProps){
  const {isOpen, onClose, movie} = props

//   function afterOpenModal() {
//   }
 
//   function closeModal(){
//     setIsOpen(false);
//   }
 
    return (
      <div>
        <Modal
          isOpen={isOpen}
        //   onAfterOpen={afterOpenModal}
          onRequestClose={onClose}
          style={customStyles}
          contentLabel="Movie Details"
        >
        <Container>
            <Row>
                <Button onClick={onClose}>
                    close
                </Button>
            </Row>
            <Row>
                <Col >
                <img src={movie?.imageUrl} />
                </Col>

                <Col>
                    <p>{movie?.title}</p>
                </Col>
            </Row>
        </Container>
        </Modal>
      </div>
    );
}
 