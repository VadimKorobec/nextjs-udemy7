import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "one", name: "One" },
    { id: "two", name: "Two" },
    { id: "three", name: "Three" },
  ];
  return (
    <div>
      <h2>The Clients Page</h2>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
