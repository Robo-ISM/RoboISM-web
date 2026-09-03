import { EventItem } from "@/lib/types";

interface EventSectionProps {
  event: EventItem;
}

export default function EventSection({ event }: EventSectionProps) {
  return (
    <section className="py-[2.8rem] px-0">
      <h2 className="text-[2.2rem] font-semibold pb-[0.8rem] text-center">{event.title}</h2>
      <div 
        className="text-[1.05rem] font-normal max-w-[800px] mx-auto text-center mb-8"
        dangerouslySetInnerHTML={{ __html: event.description }}
      />
      <div className="flex flex-row flex-wrap justify-center">
        {event.images.map((img, idx) => (
          <img 
            key={idx}
            src={img}
            alt={`${event.title} - ${idx + 1}`}
            className="w-full max-w-[432px] md:w-[30%] md:min-w-[300px] md:max-w-none px-0 md:px-[0.3rem] mb-[0.6rem]"
          />
        ))}
      </div>
    </section>
  );
}
