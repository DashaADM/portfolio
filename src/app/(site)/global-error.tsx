'use client'

import { Button } from '@/components/ui/button'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h2>Что-то пошло не так! :(</h2>
        <p>Перезагрузите страницу.</p>

        <Button onClick={() => reset()}>Попробовать еще раз</Button>
      </body>
    </html>
  )
}
