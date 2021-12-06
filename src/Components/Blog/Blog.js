import React from "react";
import CardDetail from "./Card/CardDetail";

const Blog = () => {
  const blogData = [
    {
      img: "images/example-blog01.jpg",
      title: "Velit anim eiusmod labore sit amet",
      postHistory: "Posted 2 days ago",
      share: "Share via social media",
      content:
        "Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Qui ullamco consectetur aute fugiat officia ullamco proident Lorem ad irure. Sint eu ut consectetur ut esse veniam laboris adipisicing aliquip minim anim labore commodo.",
    },
    {
      img: "images/example-blog02.jpg",
      title: "Velit anim eiusmod labore sit amet",
      postHistory: "Posted 4 days ago",
      share: "Share via social media",
      content:
        "Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Qui ullamco consectetur aute fugiat officia ullamco proident Lorem ad irure. Sint eu ut consectetur ut esse veniam laboris adipisicing aliquip minim anim labore commodo.",
    },
    {
      img: "images/example-blog04.jpg",
      title: "Velit anim eiusmod labore sit amet",
      postHistory: "Posted 4 days ago",
      share: "Share via social media",
      content:
        "Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Qui ullamco consectetur aute fugiat officia ullamco proident Lorem ad irure. Sint eu ut consectetur ut esse veniam laboris adipisicing aliquip minim anim labore commodo.",
    },
  ];

  return (
    <main className="mdl-layout__content">
      <div className="mdl-grid portfolio-max-width">
        {blogData.map((val, index) => {
          return <CardDetail key={index} val={val} />;
        })}
      </div>
    </main>
  );
};

export default Blog;
