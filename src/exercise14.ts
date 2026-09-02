export type PostItem = {
  id: number;
  title: string;
  body: string;
};

export async function fetchPostBatch(postIds: number[]): Promise<PostItem[]> {
  const requests = postIds.map(async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    const post = (await response.json()) as PostItem;

    return post;
  });

  return Promise.all(requests);
}
