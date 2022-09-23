
// import KanbanCard from "./KanbanCard";
import { styled } from "@stitches/react";
// import { DndContext, DragOverlay } from "@dnd-kit/core";
// import KanbanColumn from "./KanbanColumn";
// import SortableKanCard from "./SortableKanCard";

const NLists = styled("div", {
    display: "flex",
    width: '1000px',
    gap: "50px",
})
const OneList = styled("div", {
    display: "flex",
    flexFlow: "column",
    minWidth: "340px",
    gap: "20px",
})
const InfoDiv = styled("div", {
    height: "80px",
    marginBottom: "20px",
    display: "flex",
    gap: "50px",
    
   
})

const InfoFlex = styled("div", {
    display: "flex",
    alignItems: "center",
    width: "345px",
    height: "100%",
    borderBottom: "2px solid black",
    
})

const InfoFlexPurple = styled("div", {
    display: "flex",
    alignItems: "center",
    width: "345px",
    height: "100%",
    borderBottom: "2px solid #4734FE",
    
})

const InfoFlexGreen = styled("div", {
    display: "flex",
    alignItems: "center",
    width: "345px",
    height: "100%",
    borderBottom: "2px solid #78C552",
    
})

const InfoHeading = styled("h1", {
    color: "Black",
    fontWeight: "700",
    fontSize: "21px",
    marginLeft: "10px"
})

const InfoChip = styled("span", {
  backgroundColor: "#F7F9FA",
  border: "1px solid #EAEDF0",
  borderRadius: "12px",
  fontWeight: "700",
  padding: "2px 10px",
  fontSize: "18px",
  marginLeft: "13px"
})

// function anban () {
    
//     const [data, setData] = useState([
//         {

//             id: "A",
//             title: "Update Client ID",
//             subtitle: "lorem ipsum",
//             desc: "lorem ipsum dolor set amet dolo vaccine",
//             num_comments: "5",
//             term: "research",
//             date: "Jul 22",
//             image: "no"

//         },
//          {
//             id: "B",
//             title: "Complete Design System",
//             subtitle: "Complete it fast",
//             desc: "lorem ipsum dolor set amet dolo vaccine",
//             num_comments: "6",
//             term: "research",
//             date: "Aug 22",
//             image: "/mockup2.png"

//         },
//         {
//             id: "C",
//             title: "Update Client ID",
//             subtitle: "lorem ipsum",
//             desc: "lorem ipsum dolor set amet dolo vaccine",
//             num_comments: "5",
//             term: "research",
//             date: "Jul 22",
//             image: "no"

//         },
//          {
//             id: "D",
//             title: "Update Client ID",
//             subtitle: "lorem ipsum",
//             desc: "lorem ipsum dolor set amet dolo vaccine",
//             num_comments: "5",
//             term: "research",
//             date: "Jul 22",
//             image: "/mockup2.png"

//         },
//         {
//             id: "E",
//             title: "Update Client ID",
//             subtitle: "lorem ipsum",
//             desc: "lorem ipsum dolor set amet dolo vaccine",
//             num_comments: "5",
//             term: "research",
//             date: "Jul 22",
//             image: "/mockup2.png"

//         },
//         {
//             id: "F",
//             title: "Update Client ID",
//             subtitle: "lorem ipsum",
//             desc: "lorem ipsum dolor set amet dolo vaccine",
//             num_comments: "5",
//             term: "research",
//             date: "Jul 22",
//             image: "/mockup2.png"

//         }


//     ])

//     let columns = [data.slice(0, 2), data.slice(2, 4), data.slice(4, 6)]

//     const [columnss, setColumnss] = useState(columns)

//     return (
//         <div style={{marginLeft: "27px"}}>
//             <InfoDiv>
//                 <InfoFlex>
//                 <svg style={{width:"26px",height:"26px", }} viewBox="0 0 24 24">
//                     <path fill="#A9B4C0" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
//                 </svg>
//                 <InfoHeading>TODO</InfoHeading>
//                 <InfoChip>3</InfoChip>
//                 <svg style={{width:"26px", height:"26px", color: "#A9B4C0", marginLeft: "auto"}} viewBox="0 0 24 24">
//                     <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
//                 </svg>
//                 <svg style={{width:"26px", height:"26px", color: "#A9B4C0", marginLeft: "5px"}} viewBox="0 0 24 24">
//                     <path fill="currentColor" d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
//                 </svg>
//                 </InfoFlex>
//                 <InfoFlexPurple>
//                 <svg style={{width:"26px", height:"26px"}}   viewBox="0 0 24 24">
//                     <path fill="#2F6BFE" d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4M12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19V5Z" />
//                 </svg>
//                 <InfoHeading>IN PROGRESS</InfoHeading>
//                 <InfoChip>3</InfoChip>
//                 <svg style={{width:"26px", height:"26px", color: "#A9B4C0", marginLeft: "auto"}} viewBox="0 0 24 24">
//                     <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
//                 </svg>
//                 <svg style={{width:"26px", height:"26px", color: "#A9B4C0", marginLeft: "5px"}} viewBox="0 0 24 24">
//                     <path fill="currentColor" d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
//                 </svg>
//                 </InfoFlexPurple>
//                 <InfoFlexGreen>
//                 <svg style={{width:"26px",height:"26px", }} viewBox="0 0 24 24">
//                     <path fill="#78C552" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
//                 </svg>
//                 <InfoHeading>COMPLETED</InfoHeading>
//                 <InfoChip>3</InfoChip>
//                 <svg style={{width:"26px", height:"26px", color: "#A9B4C0", marginLeft: "auto"}} viewBox="0 0 24 24">
//                     <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
//                 </svg>
//                 <svg style={{width:"26px", height:"26px", color: "#A9B4C0", marginLeft: "5px"}} viewBox="0 0 24 24">
//                     <path fill="currentColor" d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
//                 </svg>
//                 </InfoFlexGreen>
//             </InfoDiv>
           
//             <DragDropContext onDropEnd={(result:any) => {console.log(result)}}>
//                 <NLists>
//                     {columnss.map((column, key) => {
//                         return (
//                             <OneList>
//                                 <Droppable droppableId={key} key={key}>
//                                     {(provided:any, snapshot:any) => {
//                                         return (
//                                             <div>
//                                                 {provided.droppableProps}
//                                                 ref={provided.innerRef}
//                                                 style={{
//                                                 background: snapshot.isDraggingOver
//                                                 ? "lightblue"
//                                               : "lightgrey",}}
                                              
//                                               {column.map((card, key) => {
                                                
//                                               })}
//                                             </div>
//                                         )
//                                     }}
//                                 </Droppable>
//                             </OneList>

                                
                        
//                                 /* <div>
//                                 {(provided:any, snapshot:any) => {
//                                     return (
//                                         <OneList {...provided.droppableProps} ref={provided.innerRef} 
//                                         style={{background: snapshot.isDraggingOver ? "lightblue" : "lightgrey"}}>
//                                         {column.map((card, key) => {
//                                             return (
//                                                 <OneList>
                                                 
//                                     {column.map((card, key) => {
//                                         return (
//                                             <Draggable key={card.id} draggableId={card.id} index={key}>
//                                             <div>
//                                             <KanbanCard ref={provided.innerRef}  {...provided.droppableProps} {...provided.dragHandleProps } style={{userSelect: "none", ...provided.droppableProps.style}}

//                                             term={card.term}
//                                             title={card.title}
//                                             date={card.date}
//                                             desc={card.desc}
//                                             num_comments={card.num_comments}
//                                             image={card.image}
//                                             subtitle={card.subtitle}
//                                             isPlaceholder={"idk"}
//                                             id={card.id}
                                            

//                                             ></KanbanCard>
//                                             </div>
//                                             </Draggable>
//                                         )
//                                     })}
//                                 </OneList>
//                                             )
//                                         })}
//                                         </OneList>
//                                     )
//                                 }}
//                                 </div> */
                           
//                         )
//                     })}
//                 </NLists>
//             </DragDropContext>
            
//         </div>
//     )
// }




// import React, { useEffect, useState } from "react";
// import { DragDropContext, Draggable, Droppable, resetServerContext } from "react-beautiful-dnd";
// import {v4 as uuid} from "uuid";


const data = [{

        id: "A",
        title: "Update Client ID",
        subtitle: "lorem ipsum",
        desc: "lorem ipsum dolor set amet dolo vaccine",
        num_comments: "5",
        term: "ui",
        date: "Jul 22",
        image: "no"

    },
     {
        id: "B",
        title: "Complete Design System",
        subtitle: "Complete it fast",
        desc: "lorem ipsum dolor set amet dolo vaccine",
        num_comments: "6",
        term: "research",
        date: "Aug 22",
        image: "/mockup2.png"

    },
    {
        id: "C",
        title: "Update Client ID",
        subtitle: "lorem ipsum",
        desc: "lorem ipsum dolor set amet dolo vaccine",
        num_comments: "5",
        term: "ui",
        date: "Jul 22",
        image: "no"

    },
     {
        id: "D",
        title: "Update Client ID",
        subtitle: "lorem ipsum",
        desc: "lorem ipsum dolor set amet dolo vaccine",
        num_comments: "5",
        term: "research",
        date: "Jul 22",
        image: "/mockup2.png"

    },
    {
        id: "E",
        title: "Update Client ID",
        subtitle: "lorem ipsum",
        desc: "lorem ipsum dolor set amet dolo vaccine",
        num_comments: "5",
        term: "research",
        date: "Jul 22",
        image: "/mockup2.png"

    },
    {
        id: "F",
        title: "Update Client ID",
        subtitle: "lorem ipsum",
        desc: "lorem ipsum dolor set amet dolo vaccine",
        num_comments: "5",
        term: "research",
        date: "Jul 22",
        image: "/mockup2.png"

    }]

// const itemsFromBackend = [
//     {id: uuid(), content: data[0]},
//   { id: uuid(), content: data[1] },
//   { id: uuid(), content: data[2] },
//   { id: uuid(), content: data[3] },
//   { id: uuid(), content: data[4] },
//   { id: uuid(), content: data[5] }
// ];
// console.log(itemsFromBackend.splice(4,6))
// const columnsFromBackend = {
//   [uuid()]: {
   
//     items: [data[0], data[1]]
//   },
//   [uuid()]: {
 
//     items: [data[2], data[3]]
//   },
//   [uuid()]: {
  
//     items: [data[4], data[]]
//   },
  
// };

// console.log(itemsFromBackend)
// const onDragEnd = (result:any, columns:any, setColumns:any) => {
//   if (!result.destination) return;
//   const { source, destination } = result;

//   if (source.droppableId !== destination.droppableId) {
//     const sourceColumn = columns[source.droppableId];
//     const destColumn = columns[destination.droppableId];
//     const sourceItems = [...sourceColumn.items];
//     const destItems = [...destColumn.items];
//     const [removed] = sourceItems.splice(source.index, 1);
//     destItems.splice(destination.index, 0, removed);
//     setColumns({
//       ...columns,
//       [source.droppableId]: {
//         ...sourceColumn,
//         items: sourceItems
//       },
//       [destination.droppableId]: {
//         ...destColumn,
//         items: destItems
//       }
//     });
//   } else {
//     const column = columns[source.droppableId];
//     const copiedItems = [...column.items];
//     const [removed] = copiedItems.splice(source.index, 1);
//     copiedItems.splice(destination.index, 0, removed);
//     setColumns({
//       ...columns,
//       [source.droppableId]: {
//         ...column,
//         items: copiedItems
//       }
//     });
//   }
// };

// function Kanban() {

//     const [winReady, setWinReady] = useState(false);

//     useEffect(() => {
//         setWinReady(true)
//     })

//     const [columns, setColumns] = useState(columnsFromBackend);
//     return (
      
//         <div style={{marginLeft: "27px"}}>
//             <InfoDiv>
//                 <InfoFlex>
//                 <svg style={{width:"26px",height:"26px", }} viewBox="0 0 24 24">
//                     <path fill="#A9B4C0" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
//                 </svg>
//                 <InfoHeading>TODO</InfoHeading>
//                 <InfoChip>3</InfoChip>
//                 <svg style={{width:"26px", height:"26px", color: "#A9B4C0", marginLeft: "auto"}} viewBox="0 0 24 24">
//                     <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
//                 </svg>
//                 <svg style={{width:"26px", height:"26px", color: "#A9B4C0", marginLeft: "5px"}} viewBox="0 0 24 24">
//                     <path fill="currentColor" d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
//                 </svg>
//                 </InfoFlex>
//                 <InfoFlexPurple>
//                 <svg style={{width:"26px", height:"26px"}}   viewBox="0 0 24 24">
//                     <path fill="#2F6BFE" d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4M12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19V5Z" />
//                 </svg>
//                 <InfoHeading>IN PROGRESS</InfoHeading>
//                 <InfoChip>3</InfoChip>
//                 <svg style={{width:"26px", height:"26px", color: "#A9B4C0", marginLeft: "auto"}} viewBox="0 0 24 24">
//                     <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
//                 </svg>
//                 <svg style={{width:"26px", height:"26px", color: "#A9B4C0", marginLeft: "5px"}} viewBox="0 0 24 24">
//                     <path fill="currentColor" d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
//                 </svg>
//                 </InfoFlexPurple>
//                 <InfoFlexGreen>
//                 <svg style={{width:"26px",height:"26px", }} viewBox="0 0 24 24">
//                     <path fill="#78C552" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
//                 </svg>
//                 <InfoHeading>COMPLETED</InfoHeading>
//                 <InfoChip>3</InfoChip>
//                 <svg style={{width:"26px", height:"26px", color: "#A9B4C0", marginLeft: "auto"}} viewBox="0 0 24 24">
//                     <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
//                 </svg>
//                 <svg style={{width:"26px", height:"26px", color: "#A9B4C0", marginLeft: "5px"}} viewBox="0 0 24 24">
//                     <path fill="currentColor" d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
//                 </svg>
//                 </InfoFlexGreen>
//             </InfoDiv>
//     {winReady ?  (
//     <NLists>
//       <DragDropContext
//         onDragEnd={result => onDragEnd(result, columns, setColumns)}
//       >
        
         
//         {Object.entries(columns).map(([columnId, column], index) => {
//           return (
//             <OneList key={columnId}>
//                 {console.log(column)}
//                 <Droppable droppableId={columnId} key={columnId}>
//                   {(provided:any, snapshot:any) => {
//                     return (
//                       <div
//                         {...provided.droppableProps}
//                         ref={provided.innerRef}
//                         style={{
//                           background: snapshot.isDraggingOver
//                             ? "#4734FE"
//                             : "",
                   
                        
//                         }}
//                       >
//                         {console.log(column.items)}
//                         {column.items.map((item, index) => {
//                           return (
//                             <Draggable
//                               key={item.id}
//                               draggableId={item.id}
//                               index={index}
//                             >
//                               {(provided:any, snapshot:any) => {
//                                 return (
//                                   <div
//                                     ref={provided.innerRef}
//                                     {...provided.draggableProps}
//                                     {...provided.dragHandleProps}
//                                     style={{
//                                       userSelect: "none",
                                      
//                                       backgroundColor: snapshot.isDragging
//                                       ? ""
//                                       : "",
//                                     color: "white",
//                                     ...provided.draggableProps.style
//                                     }}
//                                   >
//                                      <KanbanCard term={item.content.term}
//                                             title={item.content.title}
//                                             date={item.content.date}
//                                             desc={item.content.desc}
//                                             num_comments={item.content.num_comments}
//                                             image={item.content.image}
//                                             subtitle={item.content.subtitle}
//                                             isPlaceholder={"idk"}
//                                             id={item.content.id}
//                                             key={item.content.id}
                                            
//                                             ></KanbanCard>
//                                   </div>
//                                 );
//                               }}
//                             </Draggable>
                            
//                           );
//                         })}
//                         {provided.placeholder}
//                       </div>
//                     );
//                   }}

//                 </Droppable>
                
//             </OneList>
//           );
//         })}
//       </DragDropContext>
//       </NLists> ) : <div></div>}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable, resetServerContext } from "react-beautiful-dnd";
import {v4 as uuid} from "uuid";
import KanbanCard from "./KanbanCard";

const itemsFromBackend = [
  { id: uuid(), content: data[0] },
  { id: uuid(), content: data[1] },
  { id: uuid(), content: data[2]},
  { id: uuid(), content: data[3] },
  { id: uuid(), content: data[4] },
  {id: uuid(), content: data[5]}
];

const columnsFromBackend = {
  [uuid()]: {
    name: "Requested",
    items: itemsFromBackend.splice(0, 2)
  },
  [uuid()]: {
    name: "To do",
    items:itemsFromBackend.splice(2, 4)
  },
  [uuid()]: {
    name: "In Progress",
    items: itemsFromBackend.splice(0, 2)
  },
};

const onDragEnd = (result:any, columns:any, setColumns:any) => {
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
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
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
        items: copiedItems
      }
    });
  }
};

function Kanban() {

    const [windowLoaded, setWindowLoaded] = useState(false);
    useEffect(() => {
        setWindowLoaded(true)
     
    }, [])
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
 
    <div style={{marginLeft: "27px", overflow: "hidden"}}>
            <InfoDiv>
                <InfoFlex>
                <svg style={{width:"26px",height:"26px", }} viewBox="0 0 24 24">
                    <path fill="#A9B4C0" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </svg>
                <InfoHeading>TODO</InfoHeading>
                <InfoChip>3</InfoChip>
                <svg style={{width:"26px", height:"26px", color: "#A9B4C0", marginLeft: "auto"}} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                </svg>
                <svg style={{width:"26px", height:"26px", color: "#A9B4C0", marginLeft: "5px"}} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
                </svg>
                </InfoFlex>
                <InfoFlexPurple>
                <svg style={{width:"26px", height:"26px"}}   viewBox="0 0 24 24">
                    <path fill="#2F6BFE" d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4M12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19V5Z" />
                </svg>
                <InfoHeading>IN PROGRESS</InfoHeading>
                <InfoChip>3</InfoChip>
                <svg style={{width:"26px", height:"26px", color: "#A9B4C0", marginLeft: "auto"}} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                </svg>
                <svg style={{width:"26px", height:"26px", color: "#A9B4C0", marginLeft: "5px"}} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
                </svg>
                </InfoFlexPurple>
                <InfoFlexGreen>
                <svg style={{width:"26px",height:"26px", }} viewBox="0 0 24 24">
                    <path fill="#78C552" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
                </svg>
                <InfoHeading>COMPLETED</InfoHeading>
                <InfoChip>3</InfoChip>
                <svg style={{width:"26px", height:"26px", color: "#A9B4C0", marginLeft: "auto"}} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                </svg>
                <svg style={{width:"26px", height:"26px", color: "#A9B4C0", marginLeft: "5px"}} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
                </svg>
                </InfoFlexGreen>
            </InfoDiv>
        
    <NLists>
        {windowLoaded &&
      <DragDropContext

        onDragEnd={(result: any) => onDragEnd(result, columns, setColumns)}
      >
        {resetServerContext()}
       
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                
              }}
              key={columnId}
            >
             
              <div style={{ }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided:any, snapshot:any) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "#8478FE"
                            : "",
                        
                         
                       
                        }}
                      >
                        <OneList>
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided:any, snapshot:any) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? ""
                                        : "",
                                    borderRadius :"8px",
                                    transform: snapshot.isDragging ? "rotate(45deg)" : "none",
                                    rotate: snapshot.isDragging ? "3deg" : "",
                                    boxShadow: snapshot.isDragging ? "rgba(149, 157, 165, 0.2) 0px 8px 24px" : "",
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                    <KanbanCard term={item.content.term} 
                                    title={item.content.title}
                                        image={item.content.image} 
                                        date={item.content.date}
                                         num_comments={item.content.num_comments}
                                        subtitle={item.content.subtitle}
                                        desc={item.content.desc}
                                         
                                    >

                                    </KanbanCard>
                                  </div>
                                );
                              }}
                            </Draggable>
                            
                          );
                        })}
                        {provided.placeholder}
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
    }
      </NLists>
    </div>
  );
}

export default Kanban;


