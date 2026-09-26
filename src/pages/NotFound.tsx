import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <p className="font-display text-8xl text-[color:var(--color-gold-champagne)] mb-4">404</p>
        <h1 className="font-display text-3xl text-[color:var(--color-navy-deep)] mb-4">Page Not Found</h1>
        <p className="text-[color:var(--color-gray-subtle)] mb-8 max-w-sm">
          The page you're looking for seems to have checked out early.
        </p>
        <Link to="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </div>
    </Layout>
  );
}
