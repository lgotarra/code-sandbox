import { useMemo, useState } from "react";
import { filterSearchResults } from "./searchFilter";
import { data } from "./mock";

export const SearchEngine = (): React.JSX.Element => {
  const [searchParams, setSearchParams] = useState<string>("");
  const visibleData = useMemo(
    () => filterSearchResults(data, searchParams),
    [data, searchParams]
  );

  return (
    <div>
      <div className="flex items-center justify-center pt-16 pb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchParams}
          onChange={(e) => setSearchParams(e.target.value)}
          className="border p-2 rounded w-full max-w-md"
        />
      </div>
      {visibleData.length > 0 ? (
        visibleData.map((item, index) => (
          <div key={index} className="p-4 border-b border-gray-200">
            {item}
          </div>
        ))
      ) : (
        <p className="text-gray-500">No results found.</p>
      )}
    </div>
  );
};
