import { styled } from "@stitches/react";

const Secondary = styled("div", {
  width: "380px",
  borderRight: "1px solid #EAEDF0",
  height: "100vh",
  position: "absolute",
  top: "0",
  left: "81px",
});

const TitleDiv = styled("div", {
  height: "50px",
});

const FillerRect = styled("div", {
  height: "150px",
  backgroundColor: "Indigo",
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
    backgroundColor: "#F2F5F7", height: "15px", width: "85%", margin: "0 auto", borderRadius: "100px", position: "relative",
    "&::before": {
        content: "",
        width: "40%",
        height: "15px",
        position: "absolute",
        top: "0",
        left: "0",
        borderRadius: "100px",
        backgroundImage: "url(/loader.png)"
    },
    "&::after": {
        content: "🎉",
        position: "absolute",
        top: "-5px",
        left: "120px",
        height: "25px",
        width: "25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        backgroundColor: "#FFFFFF",
        border: "2px solid #EAEDF0",
        boxSizing: "border-box",
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
      <SecondayThirdary>
        <ItemDiv>
          <svg style={{ width: "26px", height: "26px" }} viewBox="0 0 24 24">
            <path
              fill="#6C6F75"
              d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
            />
          </svg>
          <h1
            style={{
              marginRight: "auto",
              fontSize: "22px",
              color: "#36383A",
              marginLeft: "6px",
              fontWeight: "600",
            }}
          >
            Community
          </h1>
          <svg
            style={{
              width: "20px",
              height: "20px",
              marginLeft: "auto",
              transform: "rotate(90deg)",
            }}
            viewBox="0 0 24 24"
          >
            <path fill="#36383A" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
          </svg>
        </ItemDiv>
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
        <ItemDiv>
          <svg style={{ width: "26px", height: "26px" }} viewBox="0 0 24 24">
            <path
              fill="#6C6F75"
              d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
            />
          </svg>
          <h1
            style={{
              marginRight: "auto",
              fontSize: "22px",
              color: "#6C6F75",
              marginLeft: "6px",
              fontWeight: "600",
            }}
          >
            Community
          </h1>
          <svg
            style={{ width: "20px", height: "20px", marginLeft: "auto" }}
            viewBox="0 0 24 24"
          >
            <path fill="#6C6F75" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
          </svg>
        </ItemDiv>
        <ItemDiv>
          <svg style={{ width: "26px", height: "26px" }} viewBox="0 0 24 24">
            <path
              fill="#6C6F75"
              d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
            />
          </svg>
          <h1
            style={{
              marginRight: "auto",
              fontSize: "22px",
              color: "#6C6F75",
              marginLeft: "6px",
              fontWeight: "600",
            }}
          >
            Community
          </h1>
          <svg
            style={{ width: "20px", height: "20px", marginLeft: "auto" }}
            viewBox="0 0 24 24"
          >
            <path fill="#6C6F75" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
          </svg>
        </ItemDiv>
        <ItemDiv>
          <svg style={{ width: "26px", height: "26px" }} viewBox="0 0 24 24">
            <path
              fill="#6C6F75"
              d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
            />
          </svg>
          <h1
            style={{
              marginRight: "auto",
              fontSize: "22px",
              color: "#6C6F75",
              marginLeft: "6px",
              fontWeight: "600",
            }}
          >
            Community
          </h1>
          <svg
            style={{ width: "20px", height: "20px", marginLeft: "auto" }}
            viewBox="0 0 24 24"
          >
            <path fill="#6C6F75" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
          </svg>
        </ItemDiv>
      </SecondayThirdary>
    </Secondary>
  );
}

export default SecondarySideBar;
