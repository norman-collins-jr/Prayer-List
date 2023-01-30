import NavMenu from "../NavMenu"
import Main from "../shared/Main"
import Container from "../shared/Container"
import RequestList from "../RequestList";
import RequestItem from "../RequestItem";
import { useContext } from "react";
import { RequestContext } from "../../contexts/RequestsContext";

function Requests(props) {
    const [requests, setRequests] = useContext(RequestContext);
    console.log(props);
  return (
    <>
        <NavMenu />
            <Main>
                <Container>
                    <RequestList>
                        {
                            requests.map((val)=>{
                                return <RequestItem 
                                    key={val.id}
                                    user={val.user}
                                    title={val.title}
                                    desc={val.desc}
                                    answered={val.answered}
                                    date={val.date}
                                />
                            })
                        }
                    </RequestList>
                </Container>
            </Main> 

    </>     
  )
}

export default Requests
