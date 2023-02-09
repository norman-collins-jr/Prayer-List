import { useParams } from "react-router-dom"
import { useContext } from "react";
import { RequestContext } from "../../contexts/RequestsContext";
import { useNavigate } from 'react-router-dom';
import NavMenu from "../NavMenu";
import Main from "../shared/Main";
import Container from "../shared/Container";
function EditRequest() {
    const [requests, setRequests] = useContext(RequestContext);
    const { id } = useParams();
    const navigate=useNavigate();
    const thisRequest=requests.find(value=>value.id==id);
    const indexNum=requests.findIndex(element => element.id==id);
    const changeRequest=(e)=>{
      console.log(e);
      e.preventDefault();
      requests[indexNum].title = document.getElementById('title').value;
      requests[indexNum].desc = document.getElementById('desc').value;
      requests[indexNum].date = document.getElementById('date').value;
      requests[indexNum].answered = document.getElementById('answered').checked;

      setRequests(requests);
      navigate("/requests");
    } 
  return (
    <>
        <NavMenu />
        <Main>
            <Container>
                <form>
                  <label htmlFor="title">Title: </label><br />
                  <input type="text" id="title" name="title" defaultValue={thisRequest.title}/><br />

                  <label htmlFor="desc">Description: </label><br />
                  <textarea id="desc" name="desc" defaultValue={thisRequest.desc}/><br />
                  <label htmlFor="date">Date:</label><br/>
                  <input type="date" id="date" name="date" defaultValue={thisRequest.date} /><br/>
                  <label htmlFor="Answered">Answered:</label>
                  <input type="checkbox" name="answered" id="answered" defaultChecked={thisRequest.answered}/><br/>
                  <input onClick={changeRequest}type="submit" value="Save Changes" />
                </form>
            </Container>
        </Main>
        
    </>
  )
}

export default EditRequest
