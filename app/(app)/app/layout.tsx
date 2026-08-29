import AppHeader from "@/components/app/AppHeader";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-950">
      <AppHeader />

      <main>{children}</main>
    </div>
  );
}