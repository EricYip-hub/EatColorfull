import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main>
      <h1>Colorfull</h1>
      <p>The local project is running.</p>
    </main>
  )
}