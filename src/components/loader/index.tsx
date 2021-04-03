import { css } from '@emotion/react';
import PulseLoader from 'react-spinners/PulseLoader';
import { useSelector } from 'react-redux';
import { useLoading } from '../../redux/modules/loading/selectors';
import './styles.css'
import  Modal  from 'react-modal';

const override = css`
  background-color : transparent;
  margin: 0 auto;
`;

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor : 'transparent',
    borderWidth : '0px',
  }
};

export default function Loader() {
  const loading =  useSelector(useLoading)
  return (
      <Modal style={customStyles}  isOpen={loading} >
        <PulseLoader color="blue" loading={loading} css={override} size={30} />
      </Modal>
  );
}
