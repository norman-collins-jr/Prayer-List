import { useParams } from "react-router-dom"
import { useContext } from "react";
import { RequestContext } from "../../contexts/RequestsContext";
import { useNavigate } from 'react-router-dom';
import NavMenu from "../NavMenu";
import Main from "../shared/Main";
import Container from "../shared/Container";


function DeleteRequest() {
    const [requests, setRequests] = useContext(RequestContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const thisRequest=requests.find(value=>value.id==id);
    const indexNum=requests.findIndex(element => element.id==id);
    const deleteRequest = ()=>{
        
        if (window.confirm("Confirm Delete")){
            requests.splice(indexNum,1);
            setRequests(requests);
            navigate('/requests');
        }
    }
    const abortDelete = ()=>navigate("/requests")

  return (
    <>
        <NavMenu />
        <Main>
            <Container>
                <strong>Title: </strong><strong><em>{thisRequest.title}</em></strong><br />
                <strong>Description: </strong><strong><em>{thisRequest.desc}</em></strong><br />
                <strong>Date: </strong><strong><em>{thisRequest.date}</em></strong><br />
                <strong>Answered: </strong><strong><em>{thisRequest.answered ? 'Answered' : 'Not Answered'}</em></strong><br />
                <button className="btn btn-primary-red-solid" onClick={deleteRequest}>Delete</button> <button className="btn btn-primary-green-solid" onClick={abortDelete}>Delete</button>
            </Container>
        </Main>
    </>
  )
}

export default DeleteRequest
