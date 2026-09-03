import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[600px] text-center py-8 px-4">
      <h1 className="font-heading text-charcoal text-[4em] leading-none my-[30px]">
        404
      </h1>
      <p className="font-description text-charcoal font-bold mb-[2em]">
        Page not found :(
      </p>
      <p className="font-description text-charcoal font-normal mb-[2em]">
        The requested page could not be found.
      </p>
      <Link href="/" className="button--secondary mx-auto">
        Go Home
      </Link>
    </div>
  );
}
