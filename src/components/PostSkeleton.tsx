import { Flex, Text, Skeleton } from '@radix-ui/themes';

type PostSkeletonProps = {
  withImage?: boolean;
  withFullDescription?: boolean;
};

export function PostSkeleton({
  withImage,
  withFullDescription,
}: PostSkeletonProps) {
  return (
    <Flex gap="2" direction="column">
      <Text size="7" mb="2">
        <Skeleton>Imaginary title</Skeleton>
      </Text>
      <Text size="5" mb="1">
        <Skeleton>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
          officia omnis quasi quis sed sit velit. Alias hic labore nam nemo
          perferendis repellendus saepe sunt?
        </Skeleton>
      </Text>

      {withImage && (
        <Skeleton width="100%" height="200px">
          Imaginary sub-title
        </Skeleton>
      )}

      {withFullDescription && (
        <Text>
          <Skeleton>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            debitis harum ipsum molestiae omnis rem velit vero. Aliquid
            asperiores dolorum ducimus eaque earum eum facilis maiores, maxime
            minima nesciunt non officia placeat quam qui quis repellat, sint
            vitae voluptate. Adipisci aliquam aliquid architecto cumque delectus
            deleniti distinctio dolor ducimus earum et eveniet excepturi facere
            facilis hic ipsum labore minus odit, omnis quae quaerat quibusdam
            quis sed suscipit, velit voluptatibus. Consectetur cupiditate
            delectus, dignissimos dolores est, et id impedit magni nisi
            obcaecati quod, recusandae rem tempore vero voluptate. Cumque
            deserunt eveniet excepturi facilis hic, illo minima molestiae,
            officiis, provident quaerat voluptatum.
          </Skeleton>
        </Text>
      )}
    </Flex>
  );
}
