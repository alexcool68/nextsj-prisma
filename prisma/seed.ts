import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const initialPosts: Prisma.PostCreateInput[] = [
    {
        title: 'Post 01',
        slug: 'slug-01',
        content: 'content',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: 'john@gmail.com'
                },
                create: {
                    email: 'john@gmail.com',
                    password: 'alexis'
                }
            }
        }
    },
    {
        title: 'Post 02',
        slug: 'slug-02',
        content: 'content',
        published: true,
        author: {
            connectOrCreate: {
                where: {
                    email: 'john@gmail.com'
                },
                create: {
                    email: 'john@gmail.com',
                    password: 'alexis'
                }
            }
        }
    }
];

async function main() {
    console.log('Start seeding');
    for (const post of initialPosts) {
        const newPost = await prisma.post.create({
            data: post
        });
        console.log(`Created post with id: ${newPost.id}`);
    }
    console.log('Stop seeding');
}

main();
