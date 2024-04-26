import PaginatedProducts from "../components/PaginatedProducts";

const Shop: React.FC = () => {
  return (
    <div className="w-3/4 my-6 mx-auto">
      <PaginatedProducts itemsPerPage={16} />
    </div>
  );
};

export default Shop;
