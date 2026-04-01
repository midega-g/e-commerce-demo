import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { items } = useCart()
  const count = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.brand}>ShopDemo</Link>
      <div style={styles.links}>
        <Link to="/products">Products</Link>
        <Link to="/cart" style={styles.cartLink}>
          🛒 Cart {count > 0 && <span style={styles.badge}>{count}</span>}
        </Link>
      </div>
    </nav>
  )
}

const styles: Record<string, React.CSSProperties> = {
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', background: '#1a1a2e', color: '#fff' },
  brand: { fontSize: '1.4rem', fontWeight: 700, color: '#e94560' },
  links: { display: 'flex', gap: '1.5rem', fontSize: '1rem' },
  cartLink: { position: 'relative' },
  badge: { background: '#e94560', color: '#fff', borderRadius: '50%', padding: '0 6px', fontSize: '0.75rem', marginLeft: 4 },
}
