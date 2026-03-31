export default function Glass({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg">
      {children}
    </div>
  );
}