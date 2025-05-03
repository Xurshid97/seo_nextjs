import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function ItemDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Await the params Promise to get the id
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, { cache: "no-store" });
  const item = await res.json();

  return (
    <main>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          maxWidth: "400px",
          margin: "auto",
        }}
      >
        <h1 className="text-xl font-bold">{item.title}</h1>
        <Image
          src={item.image}
          alt={item.title}
          width={300}
          height={300}
          style={{ borderRadius: "5px" }}
        />
        <p>{item.description}</p>
        <p className="font-bold">${item.price}</p>
      </div>
    </main>
  );
}