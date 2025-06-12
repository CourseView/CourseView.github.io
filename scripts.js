document.addEventListener("DOMContentLoaded", () => {
  fetch("blogs.json")
    .then(response => response.json())
    .then(data => {
      const blogList = document.getElementById("blog-list");
      data.forEach(blog => {
        const link = document.createElement("a");
        link.href = blog.link;
        link.textContent = blog.title;
        link.target = "_blank";
        blogList.appendChild(link);
      });
    })
    .catch(error => {
      console.error("Error loading blogs:", error);
    });
});
