import { styled } from "@stitches/react";

const Secondary = styled("div", {
    width: "380px",
    borderRight: "1px solid #EAEDF0",
    height: "100vh",
    position: "absolute",
    top: "0",
    left: "81px"
})

const TitleDiv = styled("div", {
    height: "50px",

})

const FillerRect = styled("div", {
    height: "150px",
    backgroundColor: "Indigo"
})

const Title = styled("h1", {
    fontWeight: "900",
    fontSize: "20px",
    letterSpacing: "0.2px",
    margin: "30px 0 0 20px"
})

function SecondarySideBar () {
    return (
        <Secondary>
            <TitleDiv><Title>Bun</Title></TitleDiv>
            <FillerRect/>
        </Secondary>
        
    )

}

export default SecondarySideBar;
