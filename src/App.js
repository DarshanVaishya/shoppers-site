import React, { useState } from "react";
import "./App.css";

import Nav from "./components/Nav";
import ItemPage from "./components/ItemPage";
import { items } from "./static-data";
import CartPage from "./components/CartPage";

function summarizeCart(cart) {
	const groupedItems = cart.reduce((summary, item) => {
		summary[item.id] = summary[item.id] || {
			...item,
			count: 0,
		};

		summary[item.id].count++;
		return summary;
	}, {});

	return Object.values(groupedItems);
}

function App() {
	const [activeTab, setActiveTab] = useState("items");
	const [cart, setCart] = useState([]);

	const addToCart = (item) => {
		setCart((cart) => cart.concat(item));
	};

	const removeItem = (item) => {
		let index = cart.findIndex((i) => i.id === item.id);

		if (index === -1) return;

		setCart((cart) => {
			const copy = cart.slice();
			copy.splice(index, 1);
			return copy;
		});
	};

	return (
		<div className="App">
			<Nav activeTab={activeTab} setTab={setActiveTab} />
			<main className="App-content">
				<Content
					tab={activeTab}
					cart={summarizeCart(cart)}
					onAddToCart={addToCart}
					onRemoveItem={removeItem}
				/>
			</main>
		</div>
	);
}

function Content({ tab, cart, onAddToCart, onRemoveItem }) {
	switch (tab) {
		default:
		case "items":
			return <ItemPage items={items} onAddToCart={onAddToCart} />;
		case "cart":
			return (
				<CartPage
					items={cart}
					onAddOne={onAddToCart}
					onRemoveOne={onRemoveItem}
				/>
			);
	}
}

export default App;
