import { styled } from "@stitches/react";
import { useState } from "react";

const Secondary = styled("div", {
  width: "350px",
  borderRight: "1px solid #EAEDF0",
  height: "100vh",
  ovverflow: "scroll",
  position: "absolute",
  top: "0",
  left: "87px",
});

const TitleDiv = styled("div", {
  height: "50px",
});

const FillerRect = styled("div", {
  height: "150px",
  backgroundImage: "url(/banner.png)",
  backgroundSize: "cover",
});

const Title = styled("h1", {
  fontWeight: "700",
  fontSize: "20px",
  letterSpacing: "0.2px",
  margin: "30px 0 0 20px",
});

const ItemDiv = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "85%",
  marginLeft: "auto",
  marginRight: "auto",
  
});

const ProgressDiv = styled("div", {
    backgroundColor: "#F2F5F7", height: "12px", width: "85%", margin: "0 auto", borderRadius: "500px", position: "relative",
    "&::before": {
        content: "",
        width: "41%",
        height: "12px",
        position: "absolute",
        top: "0",
        left: "0",
        borderRadius: "500px",
        backgroundImage: "url(/progress.svg)",
        backgroundSize: "cover",
    },
    "&::after": {
        content: "🎉",
        position: "absolute",
        top: "-8px",
        left: "100px",
        height: "27px",
        width: "27px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        backgroundColor: "#FFFFFF",
        border: "2px solid #EAEDF0",
        boxSizing: "border-box",
        fontSize: "18px",
    }

})
const Itenary = styled("div", {
  backgroundColor: "#F3F3F3",
  borderRadius: "6px",
  marginLeft: "60px",
  height: "40px",
  width: "75%",
  display: "flex",
  alignItems: "center",
});
const Itenary2 = styled("div", {
  borderRadius: "6px",
  marginLeft: "60px",
  height: "40px",
  width: "75%",
  display: "flex",
  alignItems: "center",
});

const SecondayThirdary = styled("div", {});

function SecondarySideBar() {

  const [onOne, setOnOne] = useState(true);
  const [onTwo, setOnTwo] = useState(false);
  const [onThree, setOnThree] = useState(false);
  const [onFour, setOnFour] = useState(false);
  return (
    <Secondary>
      <TitleDiv>
        <Title>Bun</Title>
      </TitleDiv>
      <FillerRect />
      <div style={{display: "flex", alignItems: "center", width: "85%", margin: "0 auto"}}>
      <svg style={{width:"20px",height:"20px"}} viewBox="0 0 24 24">
      <path fill="#191925" d="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9" />
        </svg>
        <h1 style={{fontSize: "18px", marginLeft: "4px", color: "#191925"}}>Level 1</h1>
        <h2 style={{fontSize: "18px", marginLeft: "auto", fontWeight: "400", color: "#7F8995"}}>40%</h2>
      </div>
      <ProgressDiv>

      </ProgressDiv>

      <div style={{height: "1px", width: "100%", backgroundColor: "#E9EBEF", marginTop: "20px"}}>

      </div>
      <br/>
      <SecondayThirdary>
        <ItemDiv>
        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9999 5.27334C11.9799 5.27334 11.9665 5.27334 11.9465 5.27334H11.9132C10.6532 5.23334 9.7132 4.26 9.7132 3.06C9.7132 1.83333 10.7132 0.839996 11.9332 0.839996C13.1532 0.839996 14.1532 1.84 14.1532 3.06C14.1465 4.26666 13.2065 5.24 12.0065 5.28C12.0065 5.27333 12.0065 5.27334 11.9999 5.27334ZM11.9332 1.83333C11.2599 1.83333 10.7132 2.38 10.7132 3.05333C10.7132 3.71333 11.2265 4.24667 11.8865 4.27334C11.8932 4.26667 11.9465 4.26667 12.0065 4.27334C12.6532 4.24 13.1532 3.70667 13.1599 3.05333C13.1599 2.38 12.6132 1.83333 11.9332 1.83333Z" fill="#36383A"/>
<path d="M12.0067 10.1867C11.7467 10.1867 11.4867 10.1667 11.2267 10.12C10.9534 10.0734 10.7734 9.81336 10.82 9.54003C10.8667 9.26669 11.1267 9.08669 11.4 9.13336C12.22 9.27336 13.0867 9.12003 13.6667 8.73337C13.98 8.5267 14.1467 8.26669 14.1467 8.00669C14.1467 7.74669 13.9734 7.49336 13.6667 7.28669C13.0867 6.90002 12.2067 6.74669 11.38 6.89336C11.1067 6.94669 10.8467 6.76003 10.8 6.48669C10.7534 6.21336 10.9334 5.95336 11.2067 5.9067C12.2934 5.71336 13.42 5.92002 14.22 6.45336C14.8067 6.84669 15.1467 7.40669 15.1467 8.00669C15.1467 8.60003 14.8134 9.1667 14.22 9.5667C13.6134 9.9667 12.8267 10.1867 12.0067 10.1867Z" fill="#36383A"/>
<path d="M3.98001 5.27335C3.97334 5.27335 3.96667 5.27335 3.96667 5.27335C2.76667 5.23335 1.82667 4.26001 1.82001 3.06001C1.82001 1.83334 2.82001 0.833344 4.04001 0.833344C5.26001 0.833344 6.26001 1.83334 6.26001 3.05334C6.26001 4.26001 5.32001 5.23335 4.12001 5.27335L3.98001 4.77335L4.02667 5.27335C4.01334 5.27335 3.99334 5.27335 3.98001 5.27335ZM4.04667 4.27335C4.08667 4.27335 4.12001 4.27334 4.16001 4.28001C4.75334 4.25334 5.27334 3.72001 5.27334 3.06001C5.27334 2.38667 4.72668 1.84001 4.05334 1.84001C3.38001 1.84001 2.83334 2.38667 2.83334 3.06001C2.83334 3.71334 3.34001 4.24001 3.98667 4.28001C3.99334 4.27334 4.02001 4.27335 4.04667 4.27335Z" fill="#36383A"/>
<path d="M3.97331 10.1867C3.15331 10.1867 2.36665 9.9667 1.75998 9.5667C1.17331 9.17337 0.833313 8.60669 0.833313 8.00669C0.833313 7.41336 1.17331 6.84669 1.75998 6.45336C2.55998 5.92002 3.68665 5.71336 4.77331 5.9067C5.04665 5.95336 5.22665 6.21336 5.17998 6.48669C5.13331 6.76003 4.87331 6.94669 4.59998 6.89336C3.77331 6.74669 2.89998 6.90002 2.31331 7.28669C1.99998 7.49336 1.83331 7.74669 1.83331 8.00669C1.83331 8.26669 2.00665 8.5267 2.31331 8.73337C2.89331 9.12003 3.75998 9.27336 4.57998 9.13336C4.85331 9.08669 5.11331 9.27336 5.15998 9.54003C5.20665 9.81336 5.02665 10.0734 4.75331 10.12C4.49331 10.1667 4.23331 10.1867 3.97331 10.1867Z" fill="#36383A"/>
<path d="M7.99986 10.2533C7.97986 10.2533 7.96653 10.2533 7.94653 10.2533H7.9132C6.6532 10.2133 5.7132 9.23998 5.7132 8.03998C5.7132 6.81331 6.7132 5.81998 7.9332 5.81998C9.1532 5.81998 10.1532 6.81998 10.1532 8.03998C10.1465 9.24664 9.20653 10.22 8.00653 10.26C8.00653 10.2533 8.00653 10.2533 7.99986 10.2533ZM7.9332 6.81331C7.25986 6.81331 6.7132 7.35998 6.7132 8.03332C6.7132 8.69332 7.22653 9.22665 7.88653 9.25332C7.8932 9.24665 7.94653 9.24665 8.00653 9.25332C8.65319 9.21998 9.1532 8.68665 9.15986 8.03332C9.15986 7.36665 8.6132 6.81331 7.9332 6.81331Z" fill="#36383A"/>
<path d="M7.99988 15.1733C7.19988 15.1733 6.39988 14.9667 5.77988 14.5467C5.19321 14.1533 4.85321 13.5933 4.85321 12.9933C4.85321 12.4 5.18654 11.8267 5.77988 11.4333C7.02654 10.6067 8.97988 10.6067 10.2199 11.4333C10.8065 11.8267 11.1465 12.3867 11.1465 12.9867C11.1465 13.58 10.8132 14.1533 10.2199 14.5467C9.59988 14.96 8.79988 15.1733 7.99988 15.1733ZM6.33321 12.2733C6.01988 12.48 5.85321 12.74 5.85321 13C5.85321 13.26 6.02654 13.5133 6.33321 13.72C7.23321 14.3267 8.75988 14.3267 9.65988 13.72C9.97321 13.5133 10.1399 13.2533 10.1399 12.9933C10.1399 12.7333 9.96655 12.48 9.65988 12.2733C8.76655 11.6667 7.23988 11.6733 6.33321 12.2733Z" fill="#36383A"/>
</svg>
          <h1
            style={{       
              marginRight: "auto",
              fontSize: "20px",
              color: onOne ? "#36383A" : "#6C6F75",
              marginLeft: "10px",
              fontWeight: "600",
              marginTop: "12px",
              marginBottom: "12px",
            }}
          >
            Community
          </h1>
          <svg
            style={{
              width: "20px",
              height: "20px",
              marginLeft: "auto",
              transform: onOne ? "rotate(90deg)" : "",
            }}
            viewBox="0 0 24 24"
            onClick={(e) => {
              setOnOne(!onOne)
            }}
          >
            <path fill="#36383A" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
          </svg>
        </ItemDiv>
        <div style={{display: onOne ? "block" : "none"}}>
        <Itenary>
          <svg
            style={{ width: "24px", height: "24px", marginLeft: "13px" }}
            viewBox="0 0 24 24"
          >
            <path
              fill="#515151"
              d="M16.75 22.16L14 19.16L15.16 18L16.75 19.59L20.34 16L21.5 17.41L16.75 22.16M17 4V10L15 8L13 10V4H9V20H12.08C12.2 20.72 12.45 21.39 12.8 22H7C5.95 22 5 21.05 5 20V19H3V17H5V13H3V11H5V7H3V5H5V4C5 2.89 5.9 2 7 2H19C20.05 2 21 2.95 21 4V13.8C20.39 13.45 19.72 13.2 19 13.08V4H17M5 19H7V17H5V19M5 13H7V11H5V13M5 7H7V5H5V7Z"
            />
          </svg>
          <span
            style={{
              color: " #515151",
            
              marginLeft: "9px",
              fontSize: "18px",
              fontWeight: "500",
              
            }}
          >
            Profile
          </span>
        </Itenary>
        <Itenary2>
          <svg
            style={{ width: "24px", height: "24px", marginLeft: "13px" }}
            viewBox="0 0 24 24"
          ></svg>
          <span
            style={{
              color: " #919397",
              marginLeft: "9px",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Discussions
          </span>
        </Itenary2>
        <Itenary2>
          <svg
            style={{ width: "24px", height: "24px", marginLeft: "13px" }}
            viewBox="0 0 24 24"
          ></svg>
          <span
            style={{
              color: " #919397",
              marginLeft: "9px",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Ideas
          </span>
        </Itenary2>
        <Itenary2>
          <svg
            style={{ width: "24px", height: "24px", marginLeft: "13px" }}
            viewBox="0 0 24 24"
          ></svg>
          <span
            style={{
              color: " #919397",
              marginLeft: "9px",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Friends
          </span>
        </Itenary2>
        </div>
        <ItemDiv>
        <svg width="24" height="20" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.12 11.8867C11.1133 11.8867 11.1 11.8867 11.0933 11.8867H3.69999C1.73999 11.7467 0.859985 10.24 0.859985 8.89335C0.859985 7.69335 1.55999 6.36001 3.08665 5.99335C2.65999 4.32668 3.01999 2.76001 4.10665 1.62668C5.33999 0.333346 7.31999 -0.179988 9.01999 0.346679C10.58 0.826679 11.68 2.11335 12.08 3.90001C13.4467 4.20668 14.5333 5.24001 14.9733 6.66668C15.4467 8.22001 15.02 9.81335 13.8533 10.8333C13.1067 11.5067 12.1333 11.8867 11.12 11.8867ZM3.71332 6.90001C3.70665 6.90001 3.70665 6.90001 3.69999 6.90001C2.43332 6.99335 1.85332 7.96668 1.85332 8.89335C1.85332 9.82001 2.43332 10.7933 3.72665 10.8867H11.0867C11.86 10.8733 12.6 10.6067 13.1733 10.0867C14.2133 9.17335 14.2867 7.87335 14.0067 6.96001C13.7267 6.04001 12.9467 5.00001 11.5867 4.82668C11.3667 4.80001 11.1933 4.63335 11.1533 4.41335C10.8867 2.81335 10.02 1.70668 8.71999 1.30668C7.36665 0.893346 5.80665 1.30001 4.82665 2.32001C3.93999 3.24668 3.68665 4.52668 4.09999 5.93335C4.43999 5.98001 4.76665 6.08001 5.06665 6.23335C5.31332 6.36001 5.41332 6.66001 5.28665 6.90668C5.15999 7.15335 4.85999 7.25335 4.61332 7.12668C4.33999 6.98668 4.03999 6.91335 3.73999 6.91335C3.73332 6.90001 3.72665 6.90001 3.71332 6.90001Z" fill="#6C6F75"/>
</svg>

          <h1
            style={{
              marginRight: "auto",
              fontSize: "20px",
              color: onTwo ? "#36383A" : "#6C6F75",
              marginLeft: "10px",
              fontWeight: "500",
              marginBottom: "10px",
              marginTop :"10px",
            }}
          >
            Code
          </h1>
          <svg
            style={{ width: "20px", height: "20px", marginLeft: "auto" ,
            transform: onTwo ? "rotate(90deg)" : "",
          }}
          viewBox="0 0 24 24"
          onClick={(e) => {
            setOnTwo(!onTwo)
          }}
            
          >
            <path fill="#6C6F75" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
          </svg>
        </ItemDiv>
        <div style={{display: onTwo ? "block" : "none"}}>
        <Itenary>
          <svg
            style={{ width: "24px", height: "24px", marginLeft: "13px" }}
            viewBox="0 0 24 24"
          >
            <path
              fill="#515151"
              d="M16.75 22.16L14 19.16L15.16 18L16.75 19.59L20.34 16L21.5 17.41L16.75 22.16M17 4V10L15 8L13 10V4H9V20H12.08C12.2 20.72 12.45 21.39 12.8 22H7C5.95 22 5 21.05 5 20V19H3V17H5V13H3V11H5V7H3V5H5V4C5 2.89 5.9 2 7 2H19C20.05 2 21 2.95 21 4V13.8C20.39 13.45 19.72 13.2 19 13.08V4H17M5 19H7V17H5V19M5 13H7V11H5V13M5 7H7V5H5V7Z"
            />
          </svg>
          <span
            style={{
              color: " #515151",
            
              marginLeft: "9px",
              fontSize: "18px",
              fontWeight: "500",
              
            }}
          >
            Profile
          </span>
        </Itenary>
        <Itenary2>
          <svg
            style={{ width: "24px", height: "24px", marginLeft: "13px" }}
            viewBox="0 0 24 24"
          ></svg>
          <span
            style={{
              color: " #919397",
              marginLeft: "9px",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Discussions
          </span>
        </Itenary2>
        <Itenary2>
          <svg
            style={{ width: "24px", height: "24px", marginLeft: "13px" }}
            viewBox="0 0 24 24"
          ></svg>
          <span
            style={{
              color: " #919397",
              marginLeft: "9px",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Ideas
          </span>
        </Itenary2>
        <Itenary2>
          <svg
            style={{ width: "24px", height: "24px", marginLeft: "13px" }}
            viewBox="0 0 24 24"
          ></svg>
          <span
            style={{
              color: " #919397",
              marginLeft: "9px",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Friends
          </span>
        </Itenary2>
        </div>
        <ItemDiv>
                  <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.33331 9.83332C5.20665 9.83332 5.07998 9.78668 4.97998 9.68668L3.64665 8.35334C3.45331 8.16001 3.45331 7.83997 3.64665 7.64664L4.97998 6.3133C5.17331 6.11997 5.49331 6.11997 5.68665 6.3133C5.87998 6.50664 5.87998 6.82668 5.68665 7.02001L4.70665 7.99999L5.68665 8.97997C5.87998 9.1733 5.87998 9.49334 5.68665 9.68668C5.58665 9.78668 5.45998 9.83332 5.33331 9.83332Z" fill="#6C6F75"/>
          <path d="M10.6666 9.83332C10.5399 9.83332 10.4133 9.78668 10.3133 9.68668C10.1199 9.49334 10.1199 9.1733 10.3133 8.97997L11.2933 7.99999L10.3133 7.02001C10.1199 6.82668 10.1199 6.50664 10.3133 6.3133C10.5066 6.11997 10.8266 6.11997 11.0199 6.3133L12.3533 7.64664C12.5466 7.83997 12.5466 8.16001 12.3533 8.35334L11.0199 9.68668C10.9199 9.78668 10.7933 9.83332 10.6666 9.83332Z" fill="#6C6F75"/>
          <path d="M7.99998 15.1667C4.04665 15.1667 0.833313 11.9533 0.833313 8.00001C0.833313 4.04668 4.04665 0.833344 7.99998 0.833344C11.9533 0.833344 15.1666 4.04668 15.1666 8.00001C15.1666 11.9533 11.9533 15.1667 7.99998 15.1667ZM7.99998 1.83334C4.59998 1.83334 1.83331 4.60001 1.83331 8.00001C1.83331 11.4 4.59998 14.1667 7.99998 14.1667C11.4 14.1667 14.1666 11.4 14.1666 8.00001C14.1666 4.60001 11.4 1.83334 7.99998 1.83334Z" fill="#6C6F75"/>
          <path d="M7.33339 10.0534C7.26672 10.0534 7.20006 10.04 7.14006 10.0134C6.88673 9.9067 6.76673 9.61338 6.88006 9.35338L8.2134 6.24002C8.32006 5.98668 8.61339 5.86667 8.86673 5.98001C9.12006 6.08667 9.24006 6.38004 9.12673 6.64004L7.79339 9.75336C7.71339 9.94003 7.52672 10.0534 7.33339 10.0534Z" fill="#6C6F75"/>
          </svg>

          <h1
            style={{
              marginRight: "auto",
              fontSize: "20px",
            
              marginLeft: "10px",
              color: onThree ? "#36383A" : "#6C6F75",
              fontWeight: "500",
              marginBottom: "10px",
              marginTop :"10px",
            }}
          >
            Cloud
          </h1>
          <svg
            style={{ width: "20px", height: "20px", marginLeft: "auto", transform: onThree ? "rotate(90deg)" : "",
          }}
          viewBox="0 0 24 24"
          onClick={(e) => {
            setOnThree(!onThree)
          }}
          >
            <path fill="#6C6F75" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
          </svg>
        </ItemDiv>
        <div style={{display: onThree ? "block" : "none"}}>
        <Itenary>
          <svg
            style={{ width: "24px", height: "24px", marginLeft: "13px" }}
            viewBox="0 0 24 24"
          >
            <path
              fill="#515151"
              d="M16.75 22.16L14 19.16L15.16 18L16.75 19.59L20.34 16L21.5 17.41L16.75 22.16M17 4V10L15 8L13 10V4H9V20H12.08C12.2 20.72 12.45 21.39 12.8 22H7C5.95 22 5 21.05 5 20V19H3V17H5V13H3V11H5V7H3V5H5V4C5 2.89 5.9 2 7 2H19C20.05 2 21 2.95 21 4V13.8C20.39 13.45 19.72 13.2 19 13.08V4H17M5 19H7V17H5V19M5 13H7V11H5V13M5 7H7V5H5V7Z"
            />
          </svg>
          <span
            style={{
              color: " #515151",
            
              marginLeft: "9px",
              fontSize: "18px",
              fontWeight: "500",
              
            }}
          >
            Profile
          </span>
        </Itenary>
        <Itenary2>
          <svg
            style={{ width: "24px", height: "24px", marginLeft: "13px" }}
            viewBox="0 0 24 24"
          ></svg>
          <span
            style={{
              color: " #919397",
              marginLeft: "9px",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Discussions
          </span>
        </Itenary2>
        <Itenary2>
          <svg
            style={{ width: "24px", height: "24px", marginLeft: "13px" }}
            viewBox="0 0 24 24"
          ></svg>
          <span
            style={{
              color: " #919397",
              marginLeft: "9px",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Ideas
          </span>
        </Itenary2>
        <Itenary2>
          <svg
            style={{ width: "24px", height: "24px", marginLeft: "13px" }}
            viewBox="0 0 24 24"
          ></svg>
          <span
            style={{
              color: " #919397",
              marginLeft: "9px",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Friends
          </span>
        </Itenary2>
        </div>
        <ItemDiv>
                  <svg width="24" height="24" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.1064 7.74668C5.0864 7.74668 5.07307 7.74668 5.05307 7.74668C5.01973 7.74001 4.97307 7.74001 4.93307 7.74668C2.99973 7.68668 1.53973 6.16668 1.53973 4.29334C1.53973 2.38668 3.09307 0.833344 4.99973 0.833344C6.9064 0.833344 8.45973 2.38668 8.45973 4.29334C8.45307 6.16668 6.9864 7.68668 5.1264 7.74668C5.11973 7.74668 5.11307 7.74668 5.1064 7.74668ZM4.99973 1.83334C3.6464 1.83334 2.53973 2.94001 2.53973 4.29334C2.53973 5.62668 3.57973 6.70001 4.9064 6.74668C4.9464 6.74001 5.03307 6.74001 5.11973 6.74668C6.4264 6.68668 7.45307 5.61334 7.45973 4.29334C7.45973 2.94001 6.35307 1.83334 4.99973 1.83334Z" fill="#6C6F75"/>
          <path d="M10.0264 7.83332C10.0064 7.83332 9.98639 7.83332 9.96639 7.82666C9.69306 7.85332 9.41306 7.65999 9.38639 7.38666C9.35973 7.11332 9.52639 6.86666 9.79973 6.83332C9.87973 6.82666 9.96639 6.82666 10.0397 6.82666C11.0131 6.77332 11.7731 5.97332 11.7731 4.99332C11.7731 3.97999 10.9531 3.15999 9.93973 3.15999C9.66639 3.16666 9.43973 2.93999 9.43973 2.66666C9.43973 2.39332 9.66639 2.16666 9.93973 2.16666C11.4997 2.16666 12.7731 3.43999 12.7731 4.99999C12.7731 6.53332 11.5731 7.77332 10.0464 7.83332C10.0397 7.83332 10.0331 7.83332 10.0264 7.83332Z" fill="#6C6F75"/>
          <path d="M5.11307 15.0334C3.80641 15.0334 2.49307 14.7 1.49974 14.0334C0.573073 13.42 0.0664062 12.58 0.0664062 11.6667C0.0664062 10.7534 0.573073 9.90669 1.49974 9.28669C3.49974 7.96002 6.73974 7.96002 8.72641 9.28669C9.64641 9.90002 10.1597 10.74 10.1597 11.6534C10.1597 12.5667 9.65307 13.4134 8.72641 14.0334C7.72641 14.7 6.41974 15.0334 5.11307 15.0334ZM2.05307 10.1267C1.41307 10.5534 1.06641 11.1 1.06641 11.6734C1.06641 12.24 1.41974 12.7867 2.05307 13.2067C3.71307 14.32 6.51307 14.32 8.17307 13.2067C8.81307 12.78 9.15974 12.2334 9.15974 11.66C9.15974 11.0934 8.80641 10.5467 8.17307 10.1267C6.51307 9.02002 3.71307 9.02002 2.05307 10.1267Z" fill="#6C6F75"/>
          <path d="M11.2264 13.8333C10.9931 13.8333 10.7864 13.6733 10.7397 13.4333C10.6864 13.16 10.8597 12.9 11.1264 12.84C11.5464 12.7533 11.9331 12.5867 12.2331 12.3533C12.6131 12.0667 12.8197 11.7067 12.8197 11.3267C12.8197 10.9467 12.6131 10.5867 12.2397 10.3067C11.9464 10.08 11.5797 9.92001 11.1464 9.82001C10.8797 9.76001 10.7064 9.49335 10.7664 9.22001C10.8264 8.95335 11.0931 8.78001 11.3664 8.84001C11.9397 8.96668 12.4397 9.19335 12.8464 9.50668C13.4664 9.97335 13.8197 10.6333 13.8197 11.3267C13.8197 12.02 13.4597 12.68 12.8397 13.1533C12.4264 13.4733 11.9064 13.7067 11.3331 13.82C11.2931 13.8333 11.2597 13.8333 11.2264 13.8333Z" fill="#6C6F75"/>
          </svg>

          <h1
            style={{
              marginRight: "auto",
              fontSize: "20px",
              color: onFour ? "#36383A" : "#6C6F75",
              marginLeft: "10px",
              fontWeight: "500",
              
            }}
          >
            Team
          </h1>
          <svg
            style={{ width: "20px", height: "20px", marginLeft: "auto", transform: onFour ? "rotate(90deg)" : "",
          }}
          viewBox="0 0 24 24"
          onClick={(e) => {
            setOnFour(!onFour)
          }}
          >
            <path fill="#6C6F75" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
          </svg>
        </ItemDiv>
        <div style={{display: onFour ? "block" : "none"}}>
        <Itenary>
          <svg
            style={{ width: "24px", height: "24px", marginLeft: "13px" }}
            viewBox="0 0 24 24"
          >
            <path
              fill="#515151"
              d="M16.75 22.16L14 19.16L15.16 18L16.75 19.59L20.34 16L21.5 17.41L16.75 22.16M17 4V10L15 8L13 10V4H9V20H12.08C12.2 20.72 12.45 21.39 12.8 22H7C5.95 22 5 21.05 5 20V19H3V17H5V13H3V11H5V7H3V5H5V4C5 2.89 5.9 2 7 2H19C20.05 2 21 2.95 21 4V13.8C20.39 13.45 19.72 13.2 19 13.08V4H17M5 19H7V17H5V19M5 13H7V11H5V13M5 7H7V5H5V7Z"
            />
          </svg>
          <span
            style={{
              color: " #515151",
            
              marginLeft: "9px",
              fontSize: "18px",
              fontWeight: "500",
              
            }}
          >
            Profile
          </span>
        </Itenary>
        <Itenary2>
          <svg
            style={{ width: "24px", height: "24px", marginLeft: "13px" }}
            viewBox="0 0 24 24"
          ></svg>
          <span
            style={{
              color: " #919397",
              marginLeft: "9px",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Discussions
          </span>
        </Itenary2>
        <Itenary2>
          <svg
            style={{ width: "24px", height: "24px", marginLeft: "13px" }}
            viewBox="0 0 24 24"
          ></svg>
          <span
            style={{
              color: " #919397",
              marginLeft: "9px",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Ideas
          </span>
        </Itenary2>
        <Itenary2>
          <svg
            style={{ width: "24px", height: "24px", marginLeft: "13px" }}
            viewBox="0 0 24 24"
          ></svg>
          <span
            style={{
              color: " #919397",
              marginLeft: "9px",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Friends
          </span>
        </Itenary2>
        </div>
      </SecondayThirdary>
    </Secondary>
  );
}

export default SecondarySideBar;
