import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button Component', () => {
  it('matches default button snapshot', () => {
    const { container } = render(<Button>Click me</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('matches green button snapshot', () => {
    const { container } = render(
      <Button className="bg-green-600 hover:bg-green-700">
        Let's start
      </Button>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('matches outline button snapshot', () => {
    const { container } = render(
      <Button variant="outline">Filter</Button>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('matches button with icon snapshot', () => {
    const { container } = render(
      <Button>
        <span>Search</span>
      </Button>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})