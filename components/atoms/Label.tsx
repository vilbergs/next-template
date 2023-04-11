// TailwindUI label

import { classNames } from '@/utils/css'

export default function Label({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.LabelHTMLAttributes<HTMLLabelElement>>) {
  return (
    <label className={classNames('block text-sm font-medium leading-6 text-gray-900', className)} {...props}>
      {children}
    </label>
  )
}
