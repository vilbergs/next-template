export function classNames(...args: any[]) {
  return args.filter(Boolean).join(' ')
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  test('Concats classnames', () => {
    expect(classNames('a', 'b', 'c')).toBe('a b c')
  })

  test('Can handle falsy values', () => {
    expect(classNames('', null, undefined, NaN, 0, false)).toBe('')
    expect(classNames('a', undefined, 'b', undefined, 'c', undefined, 'd')).toBe('a b c d')
    expect(classNames('a', NaN, 'b', NaN, 'c', NaN, 'd')).toBe('a b c d')
    expect(classNames('a', 0, 'b', 0, 'c', 0, 'd')).toBe('a b c d')
    expect(classNames('a', false, 'b', false, 'c', false, 'd')).toBe('a b c d')
    expect(classNames('a', 0, 'b', '', 'c', NaN, 'd')).toBe('a b c d')
    expect(classNames('a', false, 'b', null, 'c', undefined, 'd')).toBe('a b c d')
  })
}
