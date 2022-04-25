import React from "react";
import PropTypes from "prop-types";
import "./styles/CartPage.css";

import Item from "./Item";

function CartPage({ items, onRemoveOne, onAddOne }) {
	const total = items
		.reduce((sum, item) => sum + item.price * item.count, 0)
		.toFixed(2);

	return (
		<ul className="CartPage-items">
			{items.map((item) => (
				<li key={item.id} className="CartPage-item">
					<Item item={item}>
						<div className="CartItem-controls">
							<button
								className="CartItem-removeOne"
								onClick={() => onRemoveOne(item)}
							>
								&ndash;
							</button>
							<span className="CartItem-count">{item.count}</span>
							<button
								className="CartItem-addOne"
								onClick={() => onAddOne(item)}
							>
								+
							</button>
						</div>
					</Item>
				</li>
			))}

			{items.length !== 0 ? (
				<p className="CartPage-total">Total: ${total}</p>
			) : (
				<h3>Your cart is empty</h3>
			)}
		</ul>
	);
}

CartPage.propTypes = {
	items: PropTypes.array.isRequired,
	onRemoveOne: PropTypes.func.isRequired,
	onAddOne: PropTypes.func.isRequired,
};

export default CartPage;
