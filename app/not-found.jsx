import Link from 'next/link';
import { FeyButton } from '@/components/ui/fey-button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Seite nicht gefunden</p>
        <FeyButton href="/" variant="primary">
          Zurück zur Startseite
        </FeyButton>
      </div>
    </div>
  );
}
