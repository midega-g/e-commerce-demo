import { useState } from 'react'
import { Product } from '../types'
import ProductCard from '../components/ProductCard'

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Wireless Headphones', price: 79.99, category: 'Electronics', image: 'https://picsum.photos/seed/headphones/400/300', description: 'Premium sound quality with noise cancellation.' },
  { id: 2, name: 'Running Shoes', price: 59.99, category: 'Footwear', image: 'https://picsum.photos/seed/shoes/400/300', description: 'Lightweight and breathable for all terrains.' },
  { id: 3, name: 'Leather Wallet', price: 29.99, category: 'Accessories', image: 'https://picsum.photos/seed/wallet/400/300', description: 'Slim genuine leather bifold wallet.' },
  { id: 4, name: 'Smart Watch', price: 149.99, category: 'Electronics', image: 'https://picsum.photos/seed/watch/400/300', description: 'Track fitness and stay connected.' },
  { id: 5, name: 'Backpack', price: 49.99, category: 'Accessories', image: 'https://picsum.photos/seed/backpack/400/300', description: 'Durable 30L backpack for everyday use.' },
  { id: 6, name: 'Sunglasses', price: 34.99, category: 'Accessories', image: 'https://picsum.photos/seed/sunglasses/400/300', description: 'UV400 protection with polarized lenses.' },
  { id: 7, name: 'Bluetooth Speaker', price: 44.99, category: 'Electronics', image: 'https://picsum.photos/seed/speaker/400/300', description: 'Portable waterproof speaker, 12h battery.' },
  { id: 8, name: 'Sneakers', price: 69.99, category: 'Footwear', image: 'https://picsum.photos/seed/sneakers/400/300', description: 'Classic style meets modern comfort.' },
]

const CATEGORIES = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))]

export default function Products() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === active)

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>All Products</h1>
      <div style={styles.filters}>
        {CATEGORIES.map(cat => (
          <button key={cat} style={{ ...styles.filter, ...(active === cat ? styles.filterActive : {}) }} onClick={() => setActive(cat)}>
            {cat}
          </button>
        ))}
      </div>
      <div style={styles.grid}>
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: { maxWidth: 1100, margin: '2rem auto', padding: '0 1rem' },
  title: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' },
  filters: { display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' },
  filter: { padding: '6px 16px', borderRadius: 20, border: '1px solid #ccc', background: '#fff', cursor: 'pointer', fontSize: '0.9rem' },
  filterActive: { background: '#1a1a2e', color: '#fff', borderColor: '#1a1a2e' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' },
}
