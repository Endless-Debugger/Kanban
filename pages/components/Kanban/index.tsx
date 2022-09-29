import { styled } from "@stitches/react";
const NLists = styled("div", {
  display: "flex",
  
  gap: "30px",
  height: "650px",
  overflow: "scroll",

  
  
});
const OneList = styled("div", {
  display: "flex",
  flexFlow: "column",
  minWidth: "340px",

  borderRadius: '8px',
});
const InfoDiv = styled("div", {
  height: "80px",
  marginBottom: "20px",
  display: "flex",
  gap: "30px",
  
});

const InfoFlex = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "340px",
  height: "100%",
  borderBottom: "2px solid black",
});

const InfoFlexPurple = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "340px",
  height: "100%",
  borderBottom: "2px solid #4734FE",
});

const InfoFlexGreen = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "340px",
  height: "100%",
  borderBottom: "2px solid #78C552",
});

const InfoHeading = styled("h1", {
  color: "Black",
  fontWeight: "900",
  fontSize: "21px",
  marginLeft: "10px",
});

const InfoChip = styled("span", {
  backgroundColor: "#F7F9FA",
  border: "1px solid #EAEDF0",
  borderRadius: "12px",
  fontWeight: "700",
  padding: "2px 10px",
  fontSize: "18px",
  marginLeft: "13px",
});

// import { DragDropContext, Draggable, Droppable, resetServerContext } from "react-beautiful-dnd";
// import {v4 as uuid} from "uuid";
const data = [
  {

    id: "A",
    title: "Update Client ID",
    subtitle: "FLYTE 3",
    desc: "lorem ipsum dolor set amet dolo vaccine",
    num_comments: "5",
    term: "research",
    date: "Oct 22",
    image: "no",
  },
  {
    id: "B",
    title: "Complete Design System",
    subtitle: "FLYTE 2",
    desc: "lorem ipsum dolor set amet dolo vaccine",
    num_comments: "6",
    term: "ui",
    date: "Aug 27",
    image: "/mockup2.png",
  },
  {
    id: "C",
    title: "Review Design System",
    subtitle: "FLYTE 1",
    desc: "lorem ipsum dolor set amet dolo vaccine",
    num_comments: "5",
    term: "ui",
    date: "Jul 22",
    image: "/mockup3.jpg",
  },
  {
    id: "D",
    title: "Fix Responsiveness Issues",
    subtitle: "FLYTE 4",
    desc: "lorem ipsum dolor set amet dolo vaccine",
    num_comments: "5",
    term: "planning",
    date: "May 21",
    image: "no",
  },
  {
    id: "E",
    title: "Update Client ID",
    subtitle: "FLYTE 5",
    desc: "lorem ipsum dolor set amet dolo vaccine",
    num_comments: "5",
    term: "planning",
    date: "Jul 22",
    image: "no",
  },
  {
    id: "FLYTE 6",
    title: "Pitch to investors",
    subtitle: "FLYTE 6",
    desc: "lorem ipsum dolor set amet dolo vaccine",
    num_comments: "5",
    term: "research",
    date: "Jul 22",
    image: "no",
  },
];

import React, { useEffect, useRef, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  resetServerContext,
} from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import NewCardPopup from "../NewCardPopup";
import useOnClickOutside, { Popup } from "../Popup";
import KanbanCard from "./KanbanCard";

const itemsFromBackend = [
  { id: uuid(), content: data[0] },
  { id: uuid(), content: data[1] },
  { id: uuid(), content: data[2] },
  { id: uuid(), content: data[3] },
  { id: uuid(), content: data[4] },
  { id: uuid(), content: data[5] },
];

const columnsFromBackend = {
  [uuid()]: {
    name: "Requested",
    items: itemsFromBackend.splice(0, 2),
  },
  [uuid()]: {
    name: "To do",
    items: itemsFromBackend.splice(2, 4),
  },
  [uuid()]: {
    name: "In Progress",
    items: itemsFromBackend.splice(0, 2),
  },
};

const onDragEnd = (result: any, columns: any, setColumns: any) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function Kanban() {
  const [windowLoaded, setWindowLoaded] = useState(false);
  useEffect(() => {
    setWindowLoaded(true);
  }, []);
  const [columnId, setColumnId] = useState("")
  const newCardRef = useRef(null);
  const [newCardOpen, setNewCardOpen] = useState(false);
  useOnClickOutside(newCardRef, () => setNewCardOpen(false));

  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div style={{ marginLeft: "27px", overflow: "hidden", }}>
      <InfoDiv>
        <InfoFlex>
          <svg style={{ width: "26px", height: "26px" }} viewBox="0 0 24 24">
            <path
              fill="#A9B4C0"
              d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
            />
          </svg>
          <InfoHeading>TODO</InfoHeading>
          <InfoChip>{columns[Object.keys(columns)[0]].items.length}</InfoChip>
          <svg
            style={{
              width: "26px",
              height: "26px",
              color: "#A9B4C0",
              marginLeft: "auto",
            }}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            />
          </svg>
          <svg
            style={{
              width: "26px",
              height: "26px",
              color: "#A9B4C0",
              marginLeft: "5px",
            }}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"
            />
          </svg>
        </InfoFlex>
        <InfoFlexPurple>
          <svg style={{ width: "26px", height: "26px" }} viewBox="0 0 24 24">
            <path
              fill="#2F6BFE"
              d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4M12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19V5Z"
            />
          </svg>
          <InfoHeading>IN PROGRESS</InfoHeading>
          <InfoChip>{columns[Object.keys(columns)[1]].items.length}</InfoChip>
          <svg
            style={{
              width: "26px",
              height: "26px",
              color: "#A9B4C0",
              marginLeft: "auto",
            }}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            />
          </svg>
          <svg
            style={{
              width: "26px",
              height: "26px",
              color: "#A9B4C0",
              marginLeft: "5px",
            }}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"
            />
          </svg>
        </InfoFlexPurple>
        <InfoFlexGreen>
          <svg style={{ width: "26px", height: "26px" }} viewBox="0 0 24 24">
            <path
              fill="#78C552"
              d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
            />
          </svg>
          <InfoHeading>COMPLETED</InfoHeading>
          <InfoChip>{columns[Object.keys(columns)[2]].items.length}</InfoChip>
          <svg
            style={{
              width: "26px",
              height: "26px",
              color: "#A9B4C0",
              marginLeft: "auto",
            }}
            onClick={(e) => {
              let newCols = columns
              newCols[uuid()] = {name: "lorem ipsum", items: []}
              setColumns(newCols)
              console.log("b")
              
            }}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            />
          </svg>
          <svg
            style={{
              width: "26px",
              height: "26px",
              color: "#A9B4C0",
              marginLeft: "5px",
            }}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"
            />
          </svg>
        </InfoFlexGreen>
          
      </InfoDiv>

      <NLists>
        {windowLoaded && (
          <DragDropContext
            onDragEnd={(result: any) => onDragEnd(result, columns, setColumns)}
          >
            
     
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <div style={{}} key={columnId}>
                  <div style={{}}>
                    <Droppable droppableId={columnId} key={columnId}>
                      {(provided: any, snapshot: any) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              background: snapshot.isDraggingOver
                                ? ""
                                : "",
                                borderRadius: "8px"
                            }}
                          >
                            <OneList>
                              {console.log(column)}
                              {column.items.map((item, index) => {
                                return(
                                  <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                  >
                                    {(provided: any, snapshot: any) => {
                                      return (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          style={{
                                            userSelect: "none",
                                            transition: "2s all",
                                            minHeight: "50px",
                                            backgroundColor: snapshot.isDragging
                                              ? ""
                                              : "",
                                            borderRadius: "8px",
                                            transform: snapshot.isDragging
                                              ? "rotate(45deg)"
                                              : "none",
                                            rotate: snapshot.isDragging
                                              ? "3deg"
                                              : "",
                                         
                                           
                                            ...provided.draggableProps.style,
                                          }}
                                        >
                                          
                                          <KanbanCard
                                            term={item.content.term}
                                            title={item.content.title}
                                            image={item.content.image}
                                            date={item.content.date}
                                            num_comments={
                                              item.content.num_comments
                                            }
                                            subtitle={item.content.subtitle}
                                            desc={item.content.desc}
                                            style={{ boxShadow: snapshot.isDragging
                                              ? "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                                              : "",}}
                                          ></KanbanCard>
                                        </div>
                                      );
                                    }}
                                  </Draggable>
                                );
                              })}
                              {provided.placeholder}
                              <button  onClick={(e) => {
                                    
                                //     console.log(column, "hlo")
                                //     column.items.push({id: uuid(), content:  {id: "no", title: "random task", subtitle: "this is the subtitle", desc: "this is desc", 
                                // num_comments: "0", term: "ui", date: "today", image: "no"}});
                                setColumnId(columnId)
                                setNewCardOpen(true)
                                }} style={{ backgroundColor: "#FFFFFF", fontSize: "16px", cursor: "pointer", height: "44px", border: "1px solid #EAEDF0", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontWeight: "600", color: "#4734FE"}}>
                                    
                                <svg style={{width:"24px",height:"24px", }} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                                </svg> Add a Card
                              </button>
                            </OneList>
                          </div>
                        );
                      }}
                    </Droppable>
                  </div>
                </div>
              );
            })}
          </DragDropContext>
        )}
      </NLists>
      <Popup ref={newCardRef} popupState={newCardOpen} >
            <NewCardPopup items={columns} setItems={setColumns} close={setNewCardOpen} setWindowloaded={setWindowLoaded} id={columnId}>

            </NewCardPopup>
      </Popup>
    </div>
  );
}

export default Kanban;
