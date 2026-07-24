import cx from 'classnames';

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={cx('pb-6 mt-20', className)}>
      <p className="font-mono text-xs text-muted-foreground/70">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  );
}
