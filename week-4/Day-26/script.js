// Sample blog post data
const blogPostData = {
    title: "The Art of Coding: A Journey into JavaScript",
    author: "Jane Smith",
    content: "JavaScript, the language of the web, has become an integral part of modern development. In this blog post, we embark on a journey into the art of coding with JavaScript. Destructuring, spread and rest operators, template literals, and enhanced object literals are powerful tools that add elegance and efficiency to our code.\n\nDestructuring allows us to extract specific values from objects, making our code concise and readable. Meanwhile, the spread operator enables us to combine arrays and objects effortlessly. These features, along with template literals, enhance our ability to create dynamic and expressive strings, perfect for crafting blog posts such as this.\n\nEnhanced object literals, a feature introduced in ES6, offer a more concise syntax for object creation. This makes our code cleaner and more maintainable, contributing to the artistry of our coding practices.\n\nLet's not forget the importance of styling. The CSS in this blog post provides a clean and comfortable reading experience. The subtle background colors and careful font choices make the content easily digestible.\n\nAs we dive into the world of JavaScript, let's embrace these features and elevate our coding skills. Whether you're a seasoned developer or just starting, the art of coding awaits your creative touch.",
    tags: ["JavaScript", "Coding", "Web Development"],
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
