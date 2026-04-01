import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, removeFromCart, total } = useCart()

  if (items.length === 0) {
    return (
      <div style={styles.empty}>
        <p>Your cart is empty.</p>
        <Link to="/products" style={styles.link}>Browse Products</Link>
      </div>
    )
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Your Cart</h1>
      <div style={styles.list}>
        {items.map(item => (
          <div key={item.id} style={styles.row}>
            <img src={item.image} alt={item.name} style={styles.img} />
            <div style={styles.info}>
              <strong>{item.name}</strong>
              <span style={styles.meta}>Qty: {item.quantity} × ${item.price.toFixed(2)}</span>
            </div>
            <div style={styles.right}>
              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
              <button style={styles.remove} onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div style={styles.summary}>
        <span style={styles.totalLabel}>Total</span>
        <strong style={styles.totalAmount}>${total.toFixed(2)}</strong>
      </div>
      <button style={styles.checkout}>Proceed to Checkout</button>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: { maxWidth: 700, margin: '2rem auto', padding: '0 1rem' },
  title: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' },
  list: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  row: { display: 'flex', alignItems: 'center', gap: '1rem', background: '#fff', padding: '1rem', borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.08)' },
  img: { width: 80, height: 80, objectFit: 'cover', borderRadius: 6 },
  info: { flex: 1, display: 'flex', flexDirection: 'column', gap: 4 },
  meta: { fontSize: '0.85rem', color: '#666' },
  right: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 },
  remove: { background: 'none', border: '1px solid #e94560', color: '#e94560', borderRadius: 4, padding: '4px 10px', cursor: 'pointer', fontSize: '0.8rem' },
  summary: { display: 'flex', justifyContent: 'space-between', padding: '1.5rem 0', borderTop: '2px solid #eee', marginTop: '1.5rem' },
  totalLabel: { fontSize: '1.1rem' },
  totalAmount: { fontSize: '1.3rem' },
  checkout: { width: '100%', padding: '0.9rem', background: '#e94560', color: '#fff', border: 'none', borderRadius: 6, fontSize: '1rem', fontWeight: 600, cursor: 'pointer' },
  empty: { textAlign: 'center', padding: '4rem', fontSize: '1.1rem' },
  link: { display: 'inline-block', marginTop: '1rem', color: '#e94560', fontWeight: 600 },
}
