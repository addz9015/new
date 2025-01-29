import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage(): React.JSX.Element {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-6">
        Welcome to Stock Market System
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl">
        Access real-time market data, analyze trends, and make informed
        decisions
      </p>
      <div className="space-x-4">
        <Link href="/dashboard">
          <Button variant="primary">Go to Dashboard</Button>
        </Link>
        <Link href="/market">
          <Button variant="outlined">View Market</Button>
        </Link>
      </div>
    </div>
  );
}
