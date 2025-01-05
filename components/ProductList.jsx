import styles from '../styles/ProductList.module.scss';
import ProductCard from './ProductCard';
import productDetail from './productDetail';

const ProductList = ({ products }) => {
  if (!Array.isArray(products) || products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div className={styles.list}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
