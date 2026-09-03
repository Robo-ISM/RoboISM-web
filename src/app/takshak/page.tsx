import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Takshak",
};

const contacts = [
  {
    name: "Aditya Kumar Garg",
    position: "Club Coordinator",
    phone: "+91 626 128 6580",
    tel: "+916261286580",
  },
  {
    name: "Surya Prakash Mishra",
    position: "Club Coordinator",
    phone: "+91 773 521 1362",
    tel: "+917735211362",
  },
  {
    name: "P Govind Rao",
    position: "Event Head",
    phone: "+91 877 071 7897",
    tel: "+918770717897",
  },
];

export default function TakshakPage() {
  return (
    <div className="px-4 py-8 text-center">
      <Image
        src="/images/takshak_rounded.png"
        alt="Takshak Rounded Logo"
        width={125}
        height={125}
        className="block w-[125px] mx-auto mb-[1.4rem]"
      />
      <h1
        className="font-heading text-charcoal text-[2.8rem] mb-[0.2em]"
        style={{ lineHeight: 1.1 }}
      >
        Takshak 2021 Has Ended!
        <br />
        See You Again Next Year!
      </h1>
      <p className="font-description text-charcoal font-normal mb-[2em] max-w-[600px] mx-auto" style={{ lineHeight: "1.28rem" }}>
        Takshak 2021, organized by RoboISM, was the largest Robotics Fest of
        India, with 2500+ participants and 400+ teams from across the country,
        in a variety of competitions, workshops, tech talks, and battle nights
        during the 6 days of the fest from 1st October - 6th October 2021.{" "}
        <strong style={{ fontWeight: 600 }}>
          For participation certificates, log in with your registered email:{" "}
          <a
            href="https://takshak-certificates.herokuapp.com"
            style={{ fontWeight: 600 }}
          >
            Takshak 2021 Certificates
          </a>
        </strong>
      </p>
      <p
        className="font-description text-charcoal font-medium mb-[2em] max-w-[600px] mx-auto"
        style={{ lineHeight: "1.28rem", fontSize: "1.1em" }}
      >
        For any queries, contact the following:
      </p>
      <div className="flex justify-around mx-[2.8rem] mt-[2.8rem] mb-[1.2rem] max-lg:flex-col max-lg:mx-0">
        {contacts.map((contact, i) => (
          <div key={i} className="text-center max-lg:mb-[2.4rem]">
            <div className="text-[1.1rem] font-medium uppercase font-[Rubik] mb-[0.2rem]">
              {contact.name}
            </div>
            <div className="text-[1.1rem] font-medium mb-[0.4rem]">
              {contact.position}
            </div>
            <a
              href={`tel:${contact.tel}`}
              className="font-[Rubik] text-[1.05rem] font-normal block"
            >
              {contact.phone}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
