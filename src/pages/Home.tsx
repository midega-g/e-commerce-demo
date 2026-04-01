import { Link } from 'react-router-dom'
import { PRODUCTS } from './Products'
import ProductCard from '../components/ProductCard'

export default function Home() {
  return (
    <div>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Discover Amazing Products</h1>
        <p style={styles.heroSub}>Quality items at unbeatable prices</p>
        <Link to="/products" style={styles.heroCta}>Shop Now</Link>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Featured Products</h2>
        <div style={styles.grid}>
          {PRODUCTS.slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  hero: { background: 'linear-gradient(135deg, #1a1a2e, #16213e)', color: '#fff', textAlign: 'center', padding: '5rem 2rem' },
  heroTitle: { fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' },
  heroSub: { fontSize: '1.1rem', color: '#ccc', marginBottom: '2rem' },
  heroCta: { background: '#e94560', color: '#fff', padding: '0.75rem 2rem', borderRadius: 4, fontWeight: 600, fontSize: '1rem' },
  section: { maxWidth: 1100, margin: '3rem auto', padding: '0 1rem' },
  sectionTitle: { fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' },
}
