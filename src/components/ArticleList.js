import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    if (!Array.isArray(posts)) {

        return <p>No posts available</p>;
    }
    return (
        <main>
            {posts.map(post =>     (
                <Article key={post.id} {...post} />
            ))}
        </main>
    );
}
export default ArticleList