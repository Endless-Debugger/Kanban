import { styled } from "@stitches/react"
import AwesomeButton from "react-awesome-button";
import Kanban from "../Kanban";

const MainDiv = styled("div", {
    position: "absolute",
    top: "0",
    left: "461px",
    width: "100%"
})

const ButtonDiv = styled("div", {
    height: "60px",
    border: "1px solid #EAEDF0"
})
const InfoDiv = styled("div", {
    height: "80px",
    border: "1px solid #EAEDF0"
})

const TitleDiv = styled("div", {
    height: "79px",
    width: "100%",
    border: "1px solid #EAEDF0"

})

const FillerRect = styled("div", {
    height: "150px",
    backgroundColor: "Indigo"
})

const Title = styled("h1", {
    fontWeight: "900",
    fontSize: "16px",
    letterSpacing: "0.2px",
    margin: "30px 0 0 20px"
})

function Main () {
    return (
        <MainDiv>
            <TitleDiv><Title>
                <span style={{color: '#282A2F'}}>Projects</span> <span style={{color: "#6C6F75"}}> <span style={{margin: "0 5px 0 5px"}}>{">"}</span> 
                Cloud Platform</span></Title></TitleDiv>
            <ButtonDiv/>
            
            <Kanban></Kanban>
        </MainDiv>
    )
}

export default Main