import { useState } from "react";

const tabs = [
  { id: 1, title: "About", content: "This is the About tab content." },
  { id: 2, title: "Contact", content: "This is the Contact tab content." },
  { id: 3, title: "Services", content: "This is the Services tab content." },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <h1>Tabs Component</h1>

      <div style={{ display: "flex", cursor: "pointer" }}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            style={{
              padding: "10px 20px",
              marginRight: "5px",
              border: "1px solid #ccc",
              backgroundColor: activeTab === tab.id ? "#ff0000" : "#f8f9fa",
              color: activeTab === tab.id ? "white" : "black",
              fontWeight: activeTab === tab.id ? "bold" : "normal",
            }}
          >
            {tab.title}
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id}>
                <h2>{tab.title}</h2>
                <p>{tab.content}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tabs;
