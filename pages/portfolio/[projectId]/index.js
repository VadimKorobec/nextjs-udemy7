import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h2>The Portfolio Project Page</h2>
    </div>
  );
}

export default PortfolioProjectPage;
