import {
    SortableContext,
    verticalListSortingStrategy
  } from "@dnd-kit/sortable";

import SortableKanCard from "../SortableKanCard";
import KanbanCard from "../KanbanCard";
  
  export function KanbanColumn({term, image, desc, title, subtitle, num_comments, date, isPlaceholder, id, isDragOverlay}: {
    term: string,
    image: string,
    desc: string,
    title: string,
    subtitle: string,
    num_comments: string,
    date: string,
    isPlaceholder: any,
    id: any,
    isDragOverlay: any
}) {
    return (
      <div className="column" data-placeholder={isPlaceholder}>
        <SortableContext
          strategy={verticalListSortingStrategy}
          items={[`${id}1`, `${id}2`, `${id}3`, `${id}4`]}
        >
          {isDragOverlay ? (
            <>
              <KanbanCard id={`${id}1`} term={term}
                        title={title}
                        date={date}
                        desc={desc}
                        num_comments={num_comments}
                        image={image}
                        subtitle={subtitle}
                        isPlaceholder={"idk"}
                        />
              <KanbanCard id={`${id}2`}  term={term}
                        title={title}
                        date={date}
                        desc={desc}
                        num_comments={num_comments}
                        image={image}
                        subtitle={subtitle}
                        isPlaceholder={"idk"} />
              <KanbanCard id={`${id}3`}  term={term}
                        title={title}
                        date={date}
                        desc={desc}
                        num_comments={num_comments}
                        image={image}
                        subtitle={subtitle}
                        isPlaceholder={"idk"}/>
              <KanbanCard id={`${id}4`}  term={term}
                        title={title}
                        date={date}
                        desc={desc}
                        num_comments={num_comments}
                        image={image}
                        subtitle={subtitle}
                        isPlaceholder={"idk"}/>
            </>
          ) : (
            <>
              <SortableKanCard id={`${id}1`}  term={term}
                        title={title}
                        date={date}
                        desc={desc}
                        num_comments={num_comments}
                        image={image}
                        subtitle={subtitle}
                        isPlaceholder={"idk"} />
              <SortableKanCard id={`${id}2`}  term={term}
                        title={title}
                        date={date}
                        desc={desc}
                        num_comments={num_comments}
                        image={image}
                        subtitle={subtitle}
                        isPlaceholder={"idk"} />
              <SortableKanCard id={`${id}3`}  term={term}
                        title={title}
                        date={date}
                        desc={desc}
                        num_comments={num_comments}
                        image={image}
                        subtitle={subtitle}
                        isPlaceholder={"idk"}/>
              <SortableKanCard id={`${id}4`} term={term}
                        title={title}
                        date={date}
                        desc={desc}
                        num_comments={num_comments}
                        image={image}
                        subtitle={subtitle}
                        isPlaceholder={"idk"}/>
            </>
          )}
        </SortableContext>
      </div>
    );
  }
  

export default KanbanColumn;