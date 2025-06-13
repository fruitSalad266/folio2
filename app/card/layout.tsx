import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Matthew Nguyen - Card',
  description: 'Highlights card for Matthew Nguyen - Informatics + Business at UW',
}

export default function CardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 