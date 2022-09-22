import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import KanbanColumn from "../KanbanColumn";
  
  export function SortableKanColumn({term, image, desc, title, subtitle, num_comments, date, isPlaceholder, id, isDragOverlay}: {
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
  const {
    setNodeRef,
    listeners,
    transform,
    transition,
    isDragging
  } = useSortable({ id, data: { type: "column" } });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  return (
    <div {...listeners} style={style} ref={setNodeRef}>
      <KanbanColumn isPlaceholder={isDragging} id={id} term={term}
                        title={title}
                        date={date}
                        desc={desc}
                        num_comments={num_comments}
                        image={image}
                        subtitle={subtitle}
                        isDragOverlay={"idk"}/>
    </div>
  )
  }
  


export default SortableKanColumn;