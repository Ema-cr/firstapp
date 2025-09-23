import { PRODUCTS } from '../utils/products';
import { capitalize, toLowerCaseSafe, truncate, formatPrice } from '../utils/textUtils';

export default function ProductList() {
  return (
   <div>
   {PRODUCTS.map((product) => (
        <div key={product.id}>
          <h2>{truncate(capitalize(product.name), 30)}</h2>
          <p>sMarca: {toLowerCaseSafe(product.brand)}</p>
          <p>Precio: {formatPrice(product.price.amount, product.price.currency)}</p>
          <p>Estado:{product.isActive ? 'Activo' : 'Inactivo'}</p>
        </div>
      ))}
   </div>
  );
}