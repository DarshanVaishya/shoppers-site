import React from "react";

function Nav({ activeTab, setTab, cart }) {
	const getClasses = (tabName) =>
		`App-nav-item ${activeTab === tabName ? "selected" : ""}`;
	const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

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

			<span>
				🛒{cart.length} items (${total})
			</span>
		</nav>
	);
}

export default Nav;
