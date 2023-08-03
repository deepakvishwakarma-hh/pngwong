interface Props {
  src: string;
}
import Link from "next/link";
const PngPreviewer = ({ src }: Props) => {
  return (
    <Link href={"/"}>
      <div className="m-2 relative rounded-md group overflow-hidden transition-all ">
        <img
          src={src}
          alt={"any"}
          className="group-hover:scale-105 duration-300 ease-linear"
        />
        <div className="absolute group-hover:opacity-100 opacity-0 bottom-0 bg-green-700 w-full bg-opacity-50 p-3 duration-300 ease-linear">
          <h3 className="text-white">Lorem, ipsum dolor.</h3>
        </div>
      </div>
    </Link>
  );
};

export default PngPreviewer;
