import { render, expect, test } from 'test/unit/utils'

import Button from '@/components/atoms/Button'

test('Button', () => {
  const { getByText } = render(<Button>Press Me</Button>)
  expect(getByText('Press Me')).toBeInTheDocument()
})
