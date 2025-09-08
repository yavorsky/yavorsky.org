import cx from 'classnames';

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={cx('pb-4 mt-4', className)}>
      <p className="text-neutral-600 dark:text-neutral-500">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  );
}
