import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h2>The Client Project Page</h2>
    </div>
  );
}

export default ClientProjectPage;
