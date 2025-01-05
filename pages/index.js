import { fetchProducts } from '../lib/api';
import ProductList from '../components/ProductList';

const Home = ({ products }) => {
  return <ProductList products={products} />;
};

export async function getStaticProps() {
  const products = await fetchProducts();

  return {
    props: {
      products: products || [], 
    },
  };
}

export default Home;
