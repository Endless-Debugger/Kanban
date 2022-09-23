import { styled } from "@stitches/react"
import Image from "next/image";


const KanCard = styled("div", {
   
    width: "340px",
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #EAEDF0",
    height: "fit-content",
   
    position: "relative",
    '&::after': {
        content: "",
        position: "absolute",
        bottom: "-7px",
       
        width: "97%",
        left: "4px",
        borderRadius: "1000000px",
        height: "4px",
        borderRight: "2px solid #EAEDF0",
        borderLeft: "2px solid #EAEDF0",
        borderBottom: "2px solid #EAEDF0",
        backgroundColor: "#FFFFFF",

    }
})



const Title = styled("h1", {
    fontSize: "24px",
    fontWeight: "700",
    color: "#111118",
    margin: "0 0 0 13px",

})

const SubTitle = styled("h2", {
    color: "#7F8995",
    fontSize: "16px",
    fontWeight: "400",
    margin: "15px 0 12px 13px",
})

const Kandesc = styled("h3", {
    color: "#7F8995",
    fontSize: "14px",
    fontWeight: "400",
    marginLeft: "13px",
    marginTop: "12px",
    marginBottom: "18px"
})

const Kanflex = styled("div", {
    display: "flex",
    width: "100%",
})

const KanchipBlue = styled("span", {
    fontSize: "14px",
    fontWeight: "600",
    marginLeft: "13px",
    padding: "6px 10px 0px 10px",
    borderRadius: "6px",
    
    height: "24px",
    color: "#2F6BFE",
    backgroundColor: "rgba(47, 107, 254, 0.15)",
    
})

const KanCommentDiv = styled("div", {
    height: "40px",
    marginTop: "12px",
    borderTop: "1px solid #EAEDF0",
    display: "flex",
    alignItems: "center"
})

const ImageDiv = styled("div", {marginLeft: "auto", marginRight: "-9px", borderRadius: "50%", })
const ImageDivNth = styled("div", { marginRight: "13px", borderRadius: "50%"})
const KanchipGreen = styled("span", {
    fontSize: "13px",
    fontWeight: "600",
    marginLeft: "13px",
    padding: "4px 4px",
    
})

const DemoDiv = styled("div", {
    marginLeft: "13px",
    marginRight: "13px",
    borderRadius: "6px",
    height: "100px",
    position: "relative",
    marginTop: "-2px",
    marginBottom: "20px"
})
const KanchipPurple = styled("span", {
    fontSize: "14px",
    fontWeight: "600",
    marginLeft: "13px",
    padding: "6px 10px 0px 10px",
    borderRadius: "6px",
    
    height: "24px",
    color: "#8478FE",
    backgroundColor: "rgb(132, 120, 254, 0.15)",
    
})

const CommentSpan = styled("span", {
    color: "#98A5B3",
    fontSize: "15px",
    fontWeight: "500",
    marginBottom: "2px"
})

function KanbanCard ({term, image, desc, title, subtitle, num_comments, date}: {
    term: string,
    image: string,
    desc: string,
    title: string,
    subtitle: string,
    num_comments: string,
    date: string,

   
}) {
    
    return (
        <KanCard>
            <SubTitle>{subtitle}</SubTitle>
            <Title>{title}</Title>
            <Kandesc>{desc}</Kandesc>
            {image == "no"? <div></div>: <DemoDiv><Image src={image} layout={"fill"}></Image></DemoDiv>}

            <Kanflex>{term == "ui" ? (<KanchipBlue>UI Design</KanchipBlue>)  : (<KanchipPurple>Research</KanchipPurple>)}
            
            <ImageDiv>  <Image src="/person.png"
            width={"30px"} height={"30px"} style={{borderRadius: "50%"}}

            ></Image></ImageDiv>
            <ImageDivNth>  <Image src="/person.png"
            width={"30px"} height={"30px"} style={{borderRadius: "50%"}}

            ></Image></ImageDivNth>
            </Kanflex>
            <KanCommentDiv>
                <svg style={{width:"20px",height:"20px", marginLeft: "13px"}} viewBox="0 0 24 24">
                    <path fill="#98A5B3" d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M20 16H5.2L4 17.2V4H20V16Z" />
                </svg>
                <CommentSpan>&nbsp;{num_comments}</CommentSpan>
                <svg style={{width:"22px",height:"22px", marginLeft: "auto"}} viewBox="0 0 24 24">
                    <path fill="#98A5B3" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                </svg>
                <CommentSpan style={{marginRight: "13px"}}>&nbsp;{date}</CommentSpan>
            </KanCommentDiv>
        </KanCard>
    )
}

export default KanbanCard