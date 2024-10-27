import { Grid, Heading, Skeleton } from '@radix-ui/themes';

export default function Loading() {
  return (
    <>
      <Heading size="7" align="center" my="4">
        <Skeleton>Lorem ipsum ↓</Skeleton>
      </Heading>

      <Grid
        gap="6"
        columns={{
          initial: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
      >
        {[...Array(12)].map((_, index) => (
          <Skeleton
            key={index}
            width="100%"
            height="200"
            style={{ aspectRatio: '4 / 1' }}
          />
        ))}
      </Grid>
    </>
  );
}
