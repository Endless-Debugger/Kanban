import { styled } from "@stitches/react";
import AwesomeButton from "react-awesome-button";
import Button from "../Button";
import Image from "next/image";  
import Kanban from "../Kanban";
import { useState } from "react";

const ImageDiv = styled("div", {marginLeft: "auto", borderRadius: "50%", })
const ImageDivNth = styled("div", { marginRight: "24px", marginLeft: "5px", borderRadius: "50%"})

const MainDiv = styled("div", {
  position: "absolute",
  top: "0",
  left: "24%",

  width: "76%"

});

const ButtonDiv = styled("div", {
  height: "70px",
  border: "1px solid #EAEDF0",
  display: "flex",
  alignItems: "center",
 
});
const InfoDiv = styled("div", {
  height: "80px",
  border: "1px solid #EAEDF0",
});

const TitleDiv = styled("div", {
  height: "79px",
  border: "1px solid #EAEDF0",
  display: "flex",
  alignItems: "center",
  width: "100%",
});

const FillerRect = styled("div", {
  height: "150px",
  backgroundColor: "Indigo",
});

const Title = styled("h1", {
  fontWeight: "600",
  fontSize: "16px",
  letterSpacing: "0.2px",
  margin: "0 0 0 20px",
});

const TitleChip = styled("span", {
  backgroundColor: "#EEEEEE",
  borderRadius: "6px",
  color: "#6C6F75",
  padding: "5px 10px",
  marginLeft: "8px",
  fontSize: "15px",
});

const SearchDiv = styled("div", {
  display: "flex",
  backgroundColor: "#EFEFEF",
  borderRadius: "10px",
  height: "48px",
  width: "250px",
  alignItems: "center",
  marginLeft: "auto",
});

function Main() {
  const [search, setSearch ] = useState("");
  return (
    <MainDiv>
      <TitleDiv>
        <Title>
          <span style={{ color: "#282A2F" }}>Projects</span>{" "}
          <span style={{ color: "#6C6F75" }}>
            {" "}
            <span style={{ margin: "0 5px 0 5px" }}>{">"}</span>
            Cloud Platform
          </span>
        </Title>
        <TitleChip>FLYTE</TitleChip>
        <SearchDiv>
          <svg
            style={{ width: "30px", height: "30px", marginLeft: "10px" }}
            viewBox="0 0 24 24"
          >
            <path
              fill="#94989E"
              d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
            />
          </svg>
          <input value={search} placeholder={"Search"} onChange={(e) => {setSearch(e.target.value)}}
            style={{ color: "#5C6066", width: "200px", fontSize :"14px", fontWeight: "600", marginLeft: "6px", backgroundColor: "transparent", outline: "none", border: "none"}}
          />
           
        </SearchDiv>
        <div
          style={{
            height: "44px",
            width: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #DFE1E4",
            borderRadius: "10px",
            marginRight: "22px",
            marginLeft: "15px",
          }}
        >
                    <svg width="24px" height="24px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_1269)">
          <path d="M16 3C16 2.46957 15.7893 1.96086 15.4142 1.58579C15.0391 1.21071 14.5304 1 14 1H2C1.46957 1 0.960859 1.21071 0.585786 1.58579C0.210714 1.96086 0 2.46957 0 3L0 13C0 13.5304 0.210714 14.0391 0.585786 14.4142C0.960859 14.7893 1.46957 15 2 15H14C14.5304 15 15.0391 14.7893 15.4142 14.4142C15.7893 14.0391 16 13.5304 16 13V3ZM11 2V14H2C1.73478 14 1.48043 13.8946 1.29289 13.7071C1.10536 13.5196 1 13.2652 1 13V3C1 2.73478 1.10536 2.48043 1.29289 2.29289C1.48043 2.10536 1.73478 2 2 2H11ZM12 2H14C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3V13C15 13.2652 14.8946 13.5196 14.7071 13.7071C14.5196 13.8946 14.2652 14 14 14H12V2Z" fill="#5C6066"/>
          </g>
          <defs>
          <clipPath id="clip0_1_1269">
          <rect width="16" height="16" fill="white"/>
          </clipPath>
          </defs>
          </svg>
        </div>
      </TitleDiv>
      <ButtonDiv>
        <Button style={{ marginLeft: "18px", display:"flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "10px" }}>
        <svg style={{width:"30px",height:"30px"}} viewBox="0 0 24 24">
    <path fill="#58B2CB" d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z" />
</svg>25%</Button>
        <Button style={{ marginLeft: "10px" }}>Filler</Button>
        <ImageDiv>  <Image src="/person.png"
            width={"34px"} height={"34px"} style={{borderRadius: "50%"}}
            
            ></Image></ImageDiv>
            <ImageDivNth style={{marginLeft: "5px"}}>  <Image src="/person.png"
            width={"36px"} height={"36px"} style={{borderRadius: "50%"}}

            ></Image></ImageDivNth>
        <Button
          style={{
        
            display: "flex",
            gap: "10px",
            padding: "0 15px",
          }}
        >
          <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
            />
          </svg>
          <div
            style={{
              height: "25px",
              width: "1.5px",
              backgroundColor: "#DFE1E4",
            }}
          ></div>
          <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3"
            />
          </svg>
        </Button>
        <Button
          style={{
            padding: "0 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "10px",
          }}
        >
          <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12,1C7,1 3,5 3,10V17A3,3 0 0,0 6,20H9V12H5V10A7,7 0 0,1 12,3A7,7 0 0,1 19,10V12H15V20H18A3,3 0 0,0 21,17V10C21,5 16.97,1 12,1Z"
            />
          </svg>
        </Button>
        <Button
          style={{
            marginRight: "20px",
            padding: "0 15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "10px",
          }}
        >
          <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"
            />
          </svg>
          &nbsp; Share
        </Button>
      </ButtonDiv>

      <Kanban></Kanban>
    </MainDiv>
  );
}

export default Main;
