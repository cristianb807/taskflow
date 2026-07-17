import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { FaSearch } from "react-icons/fa";

function SearchBar() {

  const { search, setSearch } = useContext(TaskContext);


  return (

    <section className="max-w-7xl mx-auto px-6 py-5">

      <div className="relative">

        <FaSearch
          className="absolute left-4 top-5 text-slate-400"
        />


        <input

          type="text"

          placeholder="Buscar tarea..."

          value={search}

          onChange={(e) => setSearch(e.target.value)}

          className="
          w-full
          bg-slate-900
          border
          border-slate-800
          rounded-xl
          p-4
          pl-12
          outline-none
          text-white
          focus:border-green-400
          transition
          "

        />

      </div>

    </section>

  );

}

export default SearchBar;