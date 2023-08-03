interface Props {
  categories: string[];
}
import Link from "next/link";
const Categories = ({ categories }: Props) => {
  return (
    <ul className="flex flex-wrap justify-center gap-5">
      {categories.map((category) => (
        <li className="text-sm " key={category}>
          <Link className="hover:underline capitalize" href={category}>
            {category}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
