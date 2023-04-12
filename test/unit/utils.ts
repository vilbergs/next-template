import { RenderOptions, render } from '@testing-library/react'
import { PropsWithChildren } from 'react'

// Be wary of overlaps here, it should be fine though as we mostly just use the render function
export * from '@testing-library/react'
export * from 'vitest'

function Providers({ children }: PropsWithChildren<unknown>) {
  return children
}

function renderWithDefaults(ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) {
  return render(ui, { wrapper: Providers, ...options })
}

export { renderWithDefaults as render }
