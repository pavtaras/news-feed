import { Heading, Skeleton, Text } from '@radix-ui/themes';

export default function Loading() {
  return (
    <>
      <Heading size="7" mb="2">
        <Skeleton>Lorem ipsum dolor sit amet.</Skeleton>
      </Heading>

      <Skeleton
        style={{ aspectRatio: '2 / 1', display: 'block' }}
        width="100%"
        height="200"
      />

      <Text as="div" size="5" weight="bold" mb="2">
        <Skeleton>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque,
          perferendis?
        </Skeleton>
      </Text>
      <Text size="4" as="p">
        <Skeleton>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis,
          deleniti et, facilis fuga id itaque magnam neque optio qui quia totam
          vero voluptas! Consectetur eveniet nulla quasi qui tempora voluptate.
          Blanditiis deserunt dignissimos ducimus error facere facilis iure
          laborum natus necessitatibus nesciunt officia praesentium quia quod,
          totam voluptas voluptatibus.
        </Skeleton>
      </Text>
    </>
  );
}
