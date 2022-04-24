import React, { useState } from "react";
import "./styles/App.css";

import Nav from "./components/Nav";
import ItemPage from "./components/ItemPage";
import { items } from "./static-data";

function App() {
	const [activeTab, setActiveTab] = useState("items");

	return (
		<div className="App">
			<Nav activeTab={activeTab} setTab={setActiveTab} />
			<main className="App-content">
				<Content tab={activeTab} />
			</main>
		</div>
	);
}

function Content({ tab }) {
	switch (tab) {
		default:
		case "items":
			return <ItemPage items={items} />;
		case "cart":
			return <span>The cart</span>;
	}
}

export default App;
