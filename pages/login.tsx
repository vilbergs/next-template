import Button from '@/components/atoms/Button'
import LabelledInput from '@/components/molecules/LabelledInput'

export default function Login() {
  return (
    <main className="max-w-xs mx-auto mt-4">
      <h1>Login</h1>

      <LabelledInput placeholder="example@example.com">Email</LabelledInput>
      <LabelledInput type="password" placeholder="example@example.com">
        Password
      </LabelledInput>
      <Button className="mt-2">Sign In</Button>
    </main>
  )
}
