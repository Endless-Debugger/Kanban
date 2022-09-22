import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import KanbanCard from "../KanbanCard";

export default function SortableKanCard({term, image, desc, title, subtitle, num_comments, date, isPlaceholder, id}: {
    term: string,
    image: string,
    desc: string,
    title: string,
    subtitle: string,
    num_comments: string,
    date: string,
    isPlaceholder: any,
    id: any
}) {
  const {
    setNodeRef,
    listeners,
    transform,
    transition,
    isDragging
  } = useSortable({ id, data: { type: "row" } });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  return (
    <div {...listeners} style={style} ref={setNodeRef}>
      <KanbanCard term={term}
                        title={title}
                        date={date}
                        desc={desc}
                        num_comments={num_comments}
                        image={image}
                        subtitle={subtitle}
                        isPlaceholder={isDragging}
                        id={id} />
    </div>
  );
}