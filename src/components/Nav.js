import React from "react";

function Nav({ activeTab, setTab }) {
	const getClasses = (tabName) =>
		`App-nav-item ${activeTab === tabName ? "selected" : ""}`;

	return (
		<nav className="App-nav">
			<ul>
				<li className={getClasses("items")}>
					<button onClick={() => setTab("items")}>Items</button>
				</li>
				<li className={getClasses("cart")}>
					<button onClick={() => setTab("cart")}>Cart</button>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
