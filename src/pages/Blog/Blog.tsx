import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./Blog.css";
import Card from "react-bootstrap/Card";
import BlogCard from "../../components/BlogCard/BlogCard";
import blogService from "../../services/blogService";
import { Paginate } from "../../models/paginate";
import GetListBlogResponse from "../../models/responses/blog/getListBlogResponse";

export default function Blog() {
  const [blogs, setBlogs] = useState<Paginate<GetListBlogResponse>>();

  useEffect(() => {
    blogService.getAll().then((result) => {
      setBlogs(result.data);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="witp-content title-card">Blog</h1>
      <div>
        {blogs?.items.map((blog) => (
          <BlogCard
            key={blog.id}
            thumbnailPath={blog.thumbnailPath}
            description={blog.description}
            title={blog.title}
            releaseDate={blog.releaseDate}
            id={blog.id}
          />
        ))}
      </div>
    </div>
  );
}

// {
//   educationPrograms?.items.map((educationProgram) => (
//       <EducationCard
//           title={educationProgram.name}
//           date={formatCustomDate(educationProgram.startDate)} />
//   ))
// }
