const SearchBox = () => {
    return (
      <div className="flex items-center bg-white shadow-lg rounded-full px-4 py-2 w-[600px] border-2 border-gradient">
        <input type="text" placeholder="Visualize a ..." className="flex-1 p-2 rounded-l-full focus:outline-none" />
        <input type="text" placeholder="Size" className="w-20 p-2 border-l focus:outline-none" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Go</button>
      </div>
    );
  };
  
  export default SearchBox;
  