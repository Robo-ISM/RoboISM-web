import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
};

const galleryRows = [
  [
    "https://swaraj-jain.github.io/ROBOISM-Webpage/galleryimg/img22.png",
    "https://swaraj-jain.github.io/ROBOISM-Webpage/galleryimg/6.png",
    "https://swaraj-jain.github.io/ROBOISM-Webpage/galleryimg/23.png",
  ],
  ["https://swaraj-jain.github.io/ROBOISM-Webpage/galleryimg/img8.jpg"],
  [
    "https://swaraj-jain.github.io/ROBOISM-Webpage/galleryimg/robocon/img2.png",
    "https://swaraj-jain.github.io/ROBOISM-Webpage/galleryimg/robocon/img1.png",
  ],
  [
    "https://swaraj-jain.github.io/ROBOISM-Webpage/galleryimg/img3.png",
    "https://swaraj-jain.github.io/ROBOISM-Webpage/galleryimg/img7.png",
    "https://swaraj-jain.github.io/ROBOISM-Webpage/galleryimg/img2.png",
  ],
  ["https://swaraj-jain.github.io/ROBOISM-Webpage/galleryimg/10.png"],
  [
    "https://swaraj-jain.github.io/ROBOISM-Webpage/galleryimg/11.png",
    "https://swaraj-jain.github.io/ROBOISM-Webpage/galleryimg/12.png",
    "https://swaraj-jain.github.io/ROBOISM-Webpage/galleryimg/13.png",
  ],
  [
    "https://swaraj-jain.github.io/ROBOISM-Webpage/galleryimg/17.png",
    "https://swaraj-jain.github.io/ROBOISM-Webpage/galleryimg/15.png",
    "https://swaraj-jain.github.io/ROBOISM-Webpage/galleryimg/16.png",
  ],
  [
    "https://swaraj-jain.github.io/ROBOISM-Webpage/galleryimg/18.png",
    "https://swaraj-jain.github.io/ROBOISM-Webpage/galleryimg/14.png",
  ],
  [
    "https://swaraj-jain.github.io/ROBOISM-Webpage/galleryimg/20.png",
    "https://swaraj-jain.github.io/ROBOISM-Webpage/galleryimg/21.png",
    "https://swaraj-jain.github.io/ROBOISM-Webpage/galleryimg/19.png",
  ],
  ["https://swaraj-jain.github.io/ROBOISM-Webpage/galleryimg/img4.png"],
];

export default function GalleryPage() {
  return (
    <div className="px-4 py-8 text-center" style={{ paddingTop: "25px" }}>
      <h1 className="font-heading text-charcoal text-[2.8rem] mb-[0.2em]">
        Gallery
      </h1>
      {galleryRows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className="flex overflow-hidden justify-center max-md:flex-col"
        >
          {row.map((src, imgIdx) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={imgIdx}
              src={src}
              alt=""
              className="w-0 block basis-0 grow shrink m-[0.2rem] max-md:w-full"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
