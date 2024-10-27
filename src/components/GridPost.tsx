import { Box, Grid, Heading, Text, Link as RLink } from '@radix-ui/themes';
import Link from 'next/link';
import Image from 'next/image';
import { imgSize } from '@/const/statics';
import { type Post } from '@/repositories/postsRepo';

export function GridPost({
  post,
  linkTo,
}: {
  post: Post;
  linkTo: (post: Post) => string;
}) {
  return (
    <Grid
      gap="2"
      columns="1fr 1fr"
      rows="auto 1fr"
      areas={`"head img" "text img"`}
    >
      <Box gridArea="head">
        <Heading as="h2" size="5">
          <RLink asChild>
            <Link href={linkTo(post)}>{post.title}</Link>
          </RLink>
        </Heading>
      </Box>
      <Box gridArea="text">
        <Text>{post.subtitle}</Text>
      </Box>
      <Box gridArea="img">
        <Image
          src={post.imageUrl}
          alt={post.description}
          width={imgSize.width}
          height={imgSize.height}
          className="full-width"
        />
      </Box>
    </Grid>
  );
}
