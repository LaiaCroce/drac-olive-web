import AdminHeader from "./AdminHeader";
import "./AdminLayout.css";

export default function AdminLayout({
  title,
  subtitle,
  children,
  showBackButton = true,
}) {
  return (
    <main className="admin-layout">
      <AdminHeader showBackButton={showBackButton} />

      <section className="admin-layout-header">
        <p>Gestió admin</p>
        <h1>{title}</h1>
        {subtitle && <span>{subtitle}</span>}
      </section>

      {children}
    </main>
  );
}