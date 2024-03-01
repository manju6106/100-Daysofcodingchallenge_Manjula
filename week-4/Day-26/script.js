// Sample blog post data
const blogPostData = {
    title: "Introduction to Destructuring and Spread Operator",
    author: "John Doe",
    content: "Destructuring and spread operators are powerful features in JavaScript that make working with data more concise and expressive. In this blog post, we'll explore how to use these features to enhance your code.",
    tags: ["JavaScript", "ES6", "Programming"],
    date: "2024-03-01",
};

// Destructuring and enhanced object literals
const { title, author, content, tags, date } = blogPostData;
const blogPost = { title, author, content, tags, date };

// Template literal for displaying the blog post
const formattedBlogPost = `
    <div id="blogPost">
        <h1>${blogPost.title}</h1>
        <p class="meta">By ${blogPost.author} on ${blogPost.date}</p>
        <p>${blogPost.content}</p>
        <p class="tags">Tags: ${[...blogPost.tags].join(", ")}</p>
    </div>
`;

// Display the blog post in the HTML
document.getElementById("blogPost").innerHTML = formattedBlogPost;
