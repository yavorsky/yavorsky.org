import cx from 'classnames';

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={cx('mb-16', className)}>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  )
}
