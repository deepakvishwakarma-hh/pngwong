"use client";
import PngPreviewer from "./PngPreviewer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const Masonary = () => {
  const breakpoints = { 350: 2, 750: 2, 900: 3, 1200: 4, 1500: 5 };
  return (
    <section className="px-3">
      <ResponsiveMasonry columnsCountBreakPoints={breakpoints}>
        <Masonry>
          {srcUrls.map((url) => (
            <PngPreviewer src={url} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
};
export default Masonary;

const srcUrls = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
];
