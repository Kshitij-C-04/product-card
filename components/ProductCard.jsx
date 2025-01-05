import styles from '../styles/ProductCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <Link href={`/product/${product.id}`}> 
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={100}
          className={styles.image}
          priority
        />
        <h3>{product.title}</h3>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
      </Link>
    </div>
     
  );
};

export default ProductCard;
