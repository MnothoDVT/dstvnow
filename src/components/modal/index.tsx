import Modal from 'react-modal';
import "./styles.css"
import { IMovie } from '../../redux/modules/movies/types';
import {Button, Col, Container, Row } from "react-bootstrap"
import ShareIcon from '@material-ui/icons/Share';
import CloseIcon from '@material-ui/icons/Close';

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
    movie?: IMovie;
    onClose: () => void;
    isOpen: boolean;
}
export default function MovieDetails(props : ModalProps){
    const {isOpen, onClose, movie} = props
 
    return (
      <div>
        <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          style={customStyles}
          contentLabel="Movie Details"
        >
        <Container>
            <Row className="closeBtnContainer">
                <Button onClick={onClose}>
                    <CloseIcon />
                </Button>
            </Row>
            <Row>
                <Col md>
                    <img src={movie?.imageUrl} />
                </Col>

                <Col>
                    <p className="title">{movie?.title}</p>
                    <p className="date">{movie?.releaseDate}</p>
                    <p className="description">{movie?.synopsis}</p>
                    <Row>
                        <ShareIcon />
                    </Row>
                </Col>           
            </Row>
        </Container>
        </Modal>
      </div>
    );
}
 