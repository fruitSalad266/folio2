import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Theses',
  description: 'Academic research and writings by Matthew Nguyen exploring technology, design, and human behavior.',
}

export default function ThesesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 