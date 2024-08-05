import { useContext, useState, useEffect } from "react";
import "../css/list.css";
import { IProduct } from "../interface/Product";
import Sidebar from "./sibar";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

type Props = {
  product: IProduct[];
};

const List = ({ product }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const context = useContext(CartContext);
  const [slCategory, setslCategory] = useState<string[]>([]);

  if (!context) {
    return <p>Error: Cart context not found.</p>;
  }

  const { addCart } = context;

  // Tính toán các sản phẩm sẽ được hiển thị trên trang hiện tại
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;

  const filteredProducts = slCategory.length > 0 
    ? product.filter(p => slCategory.includes(p.categoryId))
    : product;

  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  

  // Tính tổng số trang
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1); // Reset to the first page when filters change
  }, [slCategory]);

  return (
    <div className="list">
      <div className="Listproduct m-0 ml-6">
        <div className="pick">
          <div className="luachon">
            <label >Sort By:</label>
            <select id="SortBy">
              <option value="Newest">Newest</option>
              <option value="price_asc">Low to High</option>
              <option value="price_desc">High to Low</option>
            </select>
          </div>
          <div className="luachon">
            <label >Show:</label>
            <select id="Show">
              <option value="9">9</option>
              <option value="12">12</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
        <div className="danhsach">
         
          {currentProducts.map((item, index) => (
            <div key={index} className="item">
              {item.sale && <span className="sale-badge">SALE</span>}
              <img src={item.image} alt={item.name} />
              <div className="inf">
                <p className="name">
                  <span>{item.name}</span>
                </p>
                <div className="giatien">
                  {item.sale ? (
                    <>
                      <p className="sale-price">
                        $<span>{item.salePrice}</span>
                      </p>
                      <p className="original-price">
                        $<span>{item.price}</span>
                      </p>
                    </>
                  ) : (
                    <p className="price">
                      $<span>{item.price}</span>
                    </p>
                  )}
                </div>
              </div>
              <div className="hover-buttons ">
                <Link to={`/product/${item.id}`} >
                  <button>
                    <i className="fa-solid fa-eye"></i>
                  </button>
                </Link>
                <button>
                  <i
                    onClick={() => addCart(item)}
                    className="fa-solid fa-cart-shopping"
                  ></i>
                </button>
                <button>
                  <i className="fa-regular fa-heart"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`page-item ${
                index + 1 === currentPage ? "active" : ""
              }`}
              onClick={() => handleClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="sidebar">
        <Sidebar
          slCategory={slCategory}
          setslCategory={setslCategory}
        />
      </div>
    </div>
  );
};

export default List;
