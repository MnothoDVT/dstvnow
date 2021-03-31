import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from "react-redux";
import { useLoading } from "../../redux/modules/loading/selectors";
import "./styles.css"
import  Modal  from "react-modal";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


export default function Loader() {
  const loading = useSelector(useLoading)
    console.log({loading})
  return (
      <Modal className="modal" isOpen={loading} >
        <ClipLoader color={"blue"} loading={loading} css={override} size={150} />
      </Modal>
  );
}