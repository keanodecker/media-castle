import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Seite nicht gefunden</p>
        <Link href="/" className="btn-primary">
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
