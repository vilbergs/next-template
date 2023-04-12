import Input from '@/components/atoms/Input'
import Label from '@/components/atoms/Label'
import { useId, PropsWithChildren } from 'react'

interface LabelledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>
}

export default function LabelledInput({ children, labelProps, ...props }: PropsWithChildren<LabelledInputProps>) {
  const id = useId()

  return (
    <div>
      <Label {...labelProps} htmlFor={id}>
        {children}
      </Label>
      <div className="mt-2">
        <Input {...props} id={id} />
      </div>
    </div>
  )
}
