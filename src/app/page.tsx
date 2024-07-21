import Link from 'next/link';

import prisma from '@/lib/db';

export default async function Home() {
    const posts = await prisma.post.findMany({
        include: {
            author: true
        }
    });
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    #{post.id} - {post.title} by {post.author.email} - <Link href={`/posts/${post.slug}`}>link</Link>
                </li>
            ))}
        </ul>
    );
}
