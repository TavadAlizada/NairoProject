import React from "react";
import ContentItems from "../../components/Blog/ContentItems";
import BlogModalContext from "../../context/BlogModalContext";

export default function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="title">
          <h2>Latest Blog</h2>
        </div>
        <div className="contentBlog">
          <div className="content">
            <BlogModalContext>
              <ContentItems
                img="https://nairo.ibthemespro.com/img/blog/blog-4.jpg"
                title="29/FEB/2020 - BY ALEX"
                text=" Five Solid Evidences Attending Design Is Good For Your Career Development."
                titleModal="They Now Bade Farewell To The Kind But Unseen People"
                blogImg="https://nairo.ibthemespro.com/img/testimonial/team-1.jpg"
                name="BY ALEX"
                date="26 FEB 2020"
              />
            </BlogModalContext>
            <BlogModalContext>
              <ContentItems
                img="https://nairo.ibthemespro.com/img/blog/blog-2.jpg"
                title="05/JAN/2020 - BY SMITH"
                text="Five Solid Evidences Attending Design Is Good For Your Career Development."
                titleModal="Ten Mind-Blowing Reasons Why Design Is Using This Technique For Exposure."
                blogImg="https://nairo.ibthemespro.com/img/testimonial/team-2.jpg"
                name="BY SMITH"
                date="05 JAN 2020"
              />
            </BlogModalContext>
          </div>
          <div className="content">
            <BlogModalContext>
              <ContentItems
                img="https://nairo.ibthemespro.com/img/blog/blog-3.jpg"
                title="12/AUG/2020 - BY RIO"
                text=" Five Solid Evidences Attending Design Is Good For Your Career Development."
                titleModal="I Will Tell You The Truth About Design In The Next 60 Seconds."
                blogImg="https://nairo.ibthemespro.com/img/testimonial/team-3.jpg"
                name="BY RIO"
                date="12 AUG 2020"
              />
            </BlogModalContext>
            <BlogModalContext>
              <ContentItems
                img="https://nairo.ibthemespro.com/img/blog/blog-1.jpg"
                title="22/JAN/2020 - BY SVEIL"
                text=" Five Solid Evidences Attending Design Is Good For Your Career Development."
                titleModal="They Now Bade Farewell To The Kind But Unseen PeopleThey Now Bade Farewell To The Kind But Unseen People"
                blogImg="https://nairo.ibthemespro.com/img/testimonial/team-4.jpg"
                name="BY SVEIL"
                date="22 JAN 2020"
              />
            </BlogModalContext>
          </div>
        </div>
      </div>
    </section>
  );
}
