import { classNames } from '@/utils/css'

export default function Button({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      type="button"
      className={classNames(
        'rounded-md bg-primary-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
