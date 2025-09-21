export default function Pagination() {
  const pages = [1, 2, 3, 4, 5];
  const currentPage = 3;

  return (
    <div className="w-[1069px] h-[68.56px] mx-auto -mt-1 bg-[#F6F7F8] shadow-md flex items-center justify-center py-4">
      <div className="flex gap-6">
        {pages.map((page) => (
          <button
            key={page}
            className={`w-10 h-10 flex items-center justify-center rounded-md font-[Poppins] text-[16px] ${
              page === currentPage
                ? "bg-blue-400 text-white"
                : "text-gray-800 hover:bg-blue-100"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
