import { Link } from "react-router-dom";
import { ICategory } from "../interface/Category";

type Props = {
  category: ICategory[];
};

const DowMenu = ({ category }: Props) => {
  return (
    <div className="menuList">
      <div className="header h-[140px] shadow-inner max-h-full bg-gradient-to-r from-[#B5DCB0] to-[#F9F3EE]">
        <p className="pt-12 pl-20 font-sans text-[30px] font-bold text-[#505F4E] text-shadow-sm">
          Töpfe & Behälter
        </p>
      </div>
      <div className="collections grid grid-flow-col auto-cols-max justify-evenly mt-5">
        {category.map((collection) => (
          <Link to={`/category/${collection.id}`}>
          <div
            key={collection.id}
            className="item rounded-[4px] shadow-gray-500/40 shadow-lg border flex w-[193px] bg-gradient-to-r from-[#B5DCB0] to-[#D2E8CD] hover:shadow-inner hover:ease-in"
          >
            <img
              src={collection.banner}
              className="w-[43px] h-[50px] m-2"
              alt={collection.name}
            />
            <div className="inf">
              <p>
                {collection.name}
              </p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DowMenu;
