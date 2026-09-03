import type { Metadata } from "next";
import EventSection from "@/components/ui/EventSection";
import type { EventItem } from "@/lib/types";
import events from "@/data/events.json";

export const metadata: Metadata = {
  title: "Events",
};

export default function EventsPage() {
  return (
    <div className="px-4 py-8 text-center">
      <h1 className="font-heading text-charcoal text-[2.8rem] mb-[0.2em]">
        Events
      </h1>
      <p className="font-description text-charcoal font-normal mb-[2em] leading-[1.25em] max-w-[600px] mx-auto">
        Often nature plays the muse to the solutions for the predicaments the
        club members try to solve through AI. But other times it&apos;s the
        beautiful minds around us. Apart from finding a solution to a problem
        the club welcomes teams to display their AI prowess. For a better
        tomorrow, the club spearheads the AI creed and tries to make people
        around cognizant of the capabilities and responsibilities of AI and
        Robotics.
      </p>
      {(events as EventItem[]).map((event, i) => (
        <EventSection key={i} event={event} />
      ))}
    </div>
  );
}
