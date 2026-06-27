import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <h1 className="font-display text-8xl font-bold text-accent">404</h1>
      <p className="mt-4 text-xl font-semibold text-foreground">Página no encontrada</p>
      <p className="mt-2 max-w-md text-muted">
        La página que buscas no existe o ha sido movida. Verifica la URL o regresa al inicio.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 transition"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al inicio
      </a>
    </div>
  );
}
