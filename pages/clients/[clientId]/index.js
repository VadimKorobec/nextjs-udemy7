import { useRouter } from "next/router";

function ClientPage() {
  const router = useRouter();

  function loadProjectHandler() {
    router.push("/clients/one/projectA");
  }

  return (
    <div>
      <h2>The Client Page</h2>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientPage;
