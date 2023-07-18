import { getPostsMeta } from "@/lib/posts"
import ListItem from "./ListItem"

export default async function Posts() {
    const posts = await getPostsMeta();

    if(!posts) return <p>No Posts available</p>

    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
            <ul className="w-full ;ist-none p-0">
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>
        </section>
    )
}