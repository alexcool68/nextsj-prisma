import React from 'react';
import Link from 'next/link';
import prisma from '@/lib/db';

export default async function PostsPage() {
    const posts = await prisma.post.findMany({
        include: {
            author: true
        }
    });

    return (
        <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
            {posts.map((post) => (
                <li key={post.id}>
                    #{post.id} - {post.title} by {post.author.email} - <Link href={`/posts/${post.slug}`}>link</Link>
                </li>
            ))}
        </main>
    );
}
