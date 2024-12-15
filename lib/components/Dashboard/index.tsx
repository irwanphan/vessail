import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <h1>Logistic Dashboard</h1>
      <div className="flex gap-4">
        <Link href="/vessels">
          <div className="p-4 bg-blue-500 text-white rounded">Vessel Management</div>
        </Link>
        <Link href="/cargo">
          <div className="p-4 bg-green-500 text-white rounded">Cargo Tracking</div>
        </Link>
        <Link href="/crew">
          <div className="p-4 bg-yellow-500 text-white rounded">Crew Management</div>
        </Link>
        <Link href="/accounting">
          <div className="p-4 bg-red-500 text-white rounded">Accounting</div>
        </Link>
      </div>
    </div>
  );
}
