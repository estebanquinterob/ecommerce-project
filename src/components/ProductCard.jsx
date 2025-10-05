function ProductCard({ name, price }) {
  return (
    <div>
        {/* image */}
        <h3>{name}</h3>
        <p>{price}</p>
    </div>
    );
}

export default ProductCard;