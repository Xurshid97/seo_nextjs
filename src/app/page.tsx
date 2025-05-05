import Link from "next/link";
import Image from "next/image";
import Popup from "./popup/Popup";

export const dynamic = 'force-dynamic'; // Ensure SSR

export default async function HomePage() {
  const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' });
  const products = await res.json();

  return (
    <main>
      <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Store Items</h1>
      <Popup />
      <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
        {products.map((item: {id: string, image: string, title: string, price: string}) => (
          <div
            key={item.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center',
              backgroundColor: '#f9f9f9',
            }}
          >
            <Link href={`/item/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <Image
                src={item.image}
                alt={item.title}
                style={{ height: '150px', objectFit: 'contain', marginBottom: '10px' }}
              />
              <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{item.title}</div>
              <div style={{ marginTop: '5px', color: 'green' }}>${item.price}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </main>
  );
}
