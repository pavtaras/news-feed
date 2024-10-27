import { Container } from '@radix-ui/themes';

export default async function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container size="2">{children}</Container>;
}
