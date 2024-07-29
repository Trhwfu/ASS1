import { useEffect, useState } from "react";
import "../css/Sidebar.css";
import { ICategory } from "../interface/Category";
import { GetAllCategory } from "../service/category";

const img = [
  {
    id: 1,
    src: "https://lh3.googleusercontent.com/fife/ALs6j_EKnAxFIk2aR-1Hr1Dyk7y7KGcNvzRZKRBT_Z54fuYW0OLI5zNrHBQCak4AcBvxaE68NmHS8UxnrlwBzB4sgs__EbwNVLkEXZTzAv3FnwOd8U6b30Xt2Mk0ozCkop8HnrtAqj1A_MVLDRCCa5V28enTYFvcCkXbhEyowlOa2GnePVc1TUCh9zyIkInWR-glmeaA0EZ9LiI8y-57uNpXQP5mXsFH8k075NpRryYsMwfmGZGyyy5f_xuU4OsF9qnMIAR2SZgCm-xy3_4_3mFo6khqMdDJ47orwAi0sj7aDGEtbj2OmA9qJ1kaWE38RSZeonGSPbk6jXAaGTH3CjRST2kBuSqWuHyyWd8ovrEmJYauJl6i3_2kfdNCm9uYpBtvPPytGU_-g7F_3Q26upayPnM4doZPWo4IodQfniG-iJDvGclFoccrq_ac4K4nVwXqHTVlSzMhtY-n5grXLXhko9CYujwFPQx64l5x_HzaBOxipcLoh52JgkXA0iZjzB0A6cXpvB984-6HX2E1Ouu6TBvxk7MmjAdiLMTp1ZHjJZGPN6qj7-u2uw49Fo2DUvmJZ32SwcKffVCpUoC8cZScSq6Q014gXfTcd-r_DL4kjzfz01bFY9yBKCjJk9Lqwv2fZwBCJEm5bE4prIbJEJ5AmB6eOWswbahz9V6V0KxcEsrpfK1u8gWkj-jGM6SSA_UxrYQ01we8NWtiqlTDfB6YJWkd1kTaCqwldl0FtQHGoLVNlI3mME5-LhMNPUVS0Lom_1BmA-ZSloqpa9zVP2bK_-jSEYxt4Wsdf8ps7NlxOfva-Q0qtDaqg_sPxQ_6oYHjm8LqnHznq_djqK_y3pnoWAetYSVjo5XECCndd_xqlXkVtBRaxaZdi5dI-PqjOFdKlOdlQ1Sl_OjcBWbgFSRsc72eWAmtl-2YHnpa1mVyo1GF1Vn5GqPW8lIt1P54NPZaMzBgGoALQWqbSWjvakmXbAl9pfzxwVLNa74YztPOdKZH8ROXut-lwDYDJ79EZ8L03rpr4NjR36MTYG4FE8nQS45ijVE-aqlCLnJovHIztgDCFcDJdz27I9hQspCjtVezSkRNlq28u6nxuQUC3ix9Mk4lgHyJmQhP5NYkgQRytxkswILYMVC4RSMs39PMFeqIEyCg08ZL7kT1QYY6m84YhBDRBPoqtx-ndbKII-BPGPqurT2pVGV7TscOBL8zmL-bvF16glmN3fjB9_1YzFZdKm7eaqU_Hv4R5I1-WoU3QNstFj-eASJelLoUy3XbhJtQNvlQKZQO0TzwRcgSc1DI86H2B0ZqNwDE7cl_4dyMYTcPkL3acWjPxvBOf7vZTcCy99Uv1nhCZ9NonwYkpNuTBMDhAPLqxEgEda34IwvuFU8pfW1YFPhH08MBWMuSGyzk24dFCXzyLq_UI4CwBm04HRnGwPwqPZ4QVPdtReQGgErPtUA4Any0gpgSeZDO-2Vta4y72syIGObLuFVLB2qQrUQ0sBfBEsHS_CfScB6cO6ZD5pIPhbqYATlzagVWxMQF4tzkKSXBuwZ_S7OFbckqivEGF8JVfBixoG1O8Y1sKl7dPOeEMAxc2PJzxbo_Vg9ekzt1SpObc34noxbS5lOk9F5h_YqoB90kBoL7oWkqPqryC26J1hC0wGiVSk5QSCEarf96NwIf3kxSOBjtb_kSVvxuaqEzBsFSLYASuhebxWwmLorwZlmZS9FzPUZabjU=w1920-h928",
    text: "Grow your own favourite plant",
    store: "Shop Now",
    alt: "Image 1",
  },
];

type SidebarProps = {
  slCategory: string[];
  setslCategory: (categories: string[]) => void;
};

const Sidebar = ({ slCategory, setslCategory }: SidebarProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fullCategories = await GetAllCategory();
        setCategories(fullCategories);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  const handleCheckbox = (id: string) => {
    if (slCategory.includes(id)) {
      setslCategory(slCategory.filter((catId) => catId !== id));
    } else {
      setslCategory([...slCategory, id]);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Kategorien</h2>
      </div>
      <ul className="sidebar-list">
        {categories.map((cat) => (
          <li key={cat.id}>
            <input
              type="checkbox"
              value={cat.id}
              checked={slCategory.includes(cat.id)}
              onChange={() => handleCheckbox(cat.id)}
            />
            <span>{cat.name}</span>
          </li>
        ))}
      </ul>
      <div className="sidebar-footer">
        {img.map((img) => (
          <div key={img.id} className="sidebar-item">
            <img src={img.src} alt={img.alt} />
            <div className="sidebar-item-text">
              <h3>{img.text}</h3>
              <p>
                {img.store}
                <i className="fa-solid fa-circle-right"></i>
              </p>
            </div>
          </div>
        ))}
        <div className="sidebar-filters">
          <div className="filter-price">
            <label>Filter By Price:</label>
            <input type="range" id="price-from" min="0" max="8000" />
            <div className="Filter">
              <p>From $0 to $8000</p>
              <p>Filter</p>
            </div>
          </div>
          <div className="filter-size">
            <label>Filter By Size:</label>
            <input type="range" id="price-from" min="0" max="32" />
            <div className="Filter">
              <p>2 mm by 50</p>
              <p>Filter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
