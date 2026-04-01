import { Product } from '../types'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.img} />
      <div style={styles.body}>
        <span style={styles.category}>{product.category}</span>
        <h3 style={styles.name}>{product.name}</h3>
        <p style={styles.desc}>{product.description}</p>
        <div style={styles.footer}>
          <strong>${product.price.toFixed(2)}</strong>
          <button style={styles.btn} onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  card: { background: '#fff', borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' },
  img: { width: '100%', height: 200, objectFit: 'cover' },
  body: { padding: '1rem', display: 'flex', flexDirection: 'column', gap: 6, flex: 1 },
  category: { fontSize: '0.75rem', textTransform: 'uppercase', color: '#888' },
  name: { fontSize: '1rem', fontWeight: 600 },
  desc: { fontSize: '0.85rem', color: '#555', flex: 1 },
  footer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  btn: { background: '#e94560', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 12px', cursor: 'pointer', fontSize: '0.85rem' },
}
