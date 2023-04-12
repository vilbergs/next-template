import { classNames } from '@/utils/css'

export default function Checkbox({
  className,
  ...props
}: React.PropsWithChildren<React.InputHTMLAttributes<HTMLInputElement>>) {
  return (
    <input
      type="checkbox"
      className={classNames('h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600', className)}
      {...props}
    />
  )
}
