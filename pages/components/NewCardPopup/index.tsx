import { styled } from "@stitches/react";
import { prepareServerlessUrl } from "next/dist/server/base-server";
import { useState } from "react";
import Select from "react-select";
import Button from "../Button";

import {v4 as uuid} from "uuid";
import { randomBytes } from "crypto";

const MainDiv = styled("div", {
    display: "flex",
    flexFlow: "column",
    gap: "20px",
})

const Heading = styled("h1", {
    fontSize :"32px",
})

const Input = styled("input", {
    display: "block",
    width: "95%",
    height: "50px",
    borderRadius: "4px",
    fontFamily: "GTWalshiem",
    outline: "none",
    fontSize: "17px",
    color: "#7F8995",
    fontWeight: "500",
    border :" 1.5px solid #EAEDF0",
    backgroundColor: "F7F7F7",  
    marginBottom: "10px",  
    paddingLeft: "5%",

})

const Textarea = styled("textarea", {
    resize: "none",
    width: "95%",
    paddingLeft : "5%",
    paddingTop: "10px",
    height: "80px",
    outline: "none",
    borderRadius: "4px",
    fontSize: "17px",
    color: "#7F8995",
    fontFamily: "GTWalshiem",
    fontWeight: "500",
    border :" 1.5px solid #EAEDF0",
    marginBottom: "10px",
    
})




export default function NewCardPopup({children, items, setItems, id, close, setWindowloaded}: {setWindowloaded:any,children:any, close:any, items: any, setItems: any, id:any}) {
    const [title, setTitle] = useState("")
    const [caption, setCaption] = useState("")
    const [desc, setDesc] = useState("")
    const [date, setDate] =useState("")
    const [tag, setTag] = useState("Set Tag");

    const options = [
        {value: "ui", label: "UI Design"},
        {value: "research", label: "Research"},
        {value: "planning", label: "Planning"},
    ]
    return (
        <MainDiv>
            <form onSubmit={(e) => {
                e.preventDefault()
                if (title.trim() == "" || caption.trim() == "" || desc.trim() == ""|| date.trim() == "" || tag == "Set Tag" ) {
                    alert("Fill everything")
                    return;
                } else {
                    setItems((prev:any) => {

                        return {
                        ...prev,
                        [id]: {
                            name: prev[id].name,
                            items: [...prev[id].items, {id: uuid(), content:  {id: "no", title: title, subtitle:caption, desc: desc, 
                            num_comments: Math.floor(Math.random() * 9).toString(), term: tag, date: date, image: "no"}}]
                        }
                        }
                    })
                    console.log(items)
                    close(false)
                }
            }}>
                <Heading>Create New Card</Heading>
                <Input required={true} style={{fontWeight: "600"}} value={title} placeholder={"Set Title"} onChange={(e:any) => {setTitle(e.target.value)}}></Input>
                <Input required={true} style={{fontWeight: "500"}} value={caption} placeholder={"Set Caption"} onChange={(e:any) => {setCaption(e.target.value)}}></Input>
                <Textarea required={true} value={desc} placeholder={"Set Description"} onChange={(e:any) => {setDesc(e.target.value)}}></Textarea>
                <Input required={true} value={date} placeholder={"Set Date"} onChange={(e:any) => {setDate(e.target.value)}}></Input>
                <Select options={options} style={{height: "50px", fontSize: "18px", width: "100%"}} value={tag} placeholder={tag} onChange={(e:any) => {setTag(e.value), console.log(e.value)}}  ></Select>
                <Button style={{ marginTop: "20px",marginLeft :"auto", width: "200px", height: "50px", marginRight :"auto", display: "block"}}>Submit</Button>
            </form>
        </MainDiv>
    )
}