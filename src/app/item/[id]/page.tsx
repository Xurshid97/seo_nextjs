export const dynamic = 'force-dynamic';

interface Params {
  params: { id: string };
}

export default async function ItemDetail({ params }: Params) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`, { cache: 'no-store' });
  const item = await res.json();

  return (
    <main>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        maxWidth: '400px',
        margin: 'auto',
      }}>
        <h1 className="text-xl font-bold">{item.title}</h1>
        <div>
          <img src={item.image} alt={item.title} style={{
            width: '100%',
            height: 'auto',
            borderRadius: '5px',
          }} />
        </div>
        
        <p>{item.description}</p>
        <p className="font-bold">${item.price}</p>
      </div>
    </main>
  );
}
