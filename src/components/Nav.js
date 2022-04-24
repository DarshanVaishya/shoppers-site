import React from "react";

function Nav({ activeTab, setTab }) {
	const itemClass = (tabName) =>
		`App-nav-item ${activeTab === tabName ? "selected" : ""}`;

	return (
		<nav className="App-nav">
			<ul>
				<li className={itemClass("items")}>
					<button onClick={() => setTab("items")}>Items</button>
				</li>
				<li className={itemClass("cart")}>
					<button onClick={() => setTab("cart")}>Cart</button>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
