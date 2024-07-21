import { unstable_cache as cache } from 'next/cache';
import Link from 'next/link';
import prisma from '@/lib/db';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const getCachedPost = cache((slug) => {
    return prisma.post.findUnique({
        where: {
            slug
        }
    });
});

export default async function PostPage({ params }: { params: { slug: string } }) {
    const post = await getCachedPost(params.slug);

    return (
        <>
            <div className="flex w-full justify-between h-16">
                <h1 className="text-3xl font-semibold">{post?.title}</h1>
                <Button variant={'outline'} asChild>
                    <Link href="/">
                        <ArrowLeft className="w-4 h-4 mr-2" /> back
                    </Link>
                </Button>
            </div>
            <p>{post?.content}</p>
        </>
    );
}
