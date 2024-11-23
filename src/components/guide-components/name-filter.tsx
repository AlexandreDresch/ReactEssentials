import React, { useState } from "react";

const NameFilter = () => {
  const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

  const [filter, setFilter] = useState<string>("");

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>Name Filter</h1>
      <input
        type="text"
        placeholder="Filter names..."
        value={filter}
        onChange={handleFilterChange}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
          color: "black",
        }}
      />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameFilter;
