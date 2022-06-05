import { useState } from "react";

const QuantityPicker = () => {
    let [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        console.log("Plus clicked!");
        let value = quantity + 1;
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        console.log("Plus clicked!");
        let value = quantity - 1;
        if (value > 0) {
            setQuantity(value);
        }
    };

    return (
        <div className="quantity-picker">
            <button className="btn btn-info btn-sm" onClick={handleIncrease}>
                +
            </button>
            <label>{quantity}</label>
            <button
                className="btn btn-info btn-sm"
                disabled={quantity === 1}
                onClick={handleDecrease}
            >
                -
            </button>
        </div>
    );
};

export default QuantityPicker;
