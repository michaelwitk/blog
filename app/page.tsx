import { BlogPosts } from 'app/components/posts'

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                My Blog
            </h1>
            <p className="mb-4">
                <a
                    href="https://x.com/michael_witk"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Follow me on x @michael_witk
                </a>
            </p>
            <div className="my-8">
                <BlogPosts />
            </div>
        </section>
    )
}
