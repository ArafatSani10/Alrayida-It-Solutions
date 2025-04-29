import React from 'react';
import BlogBanner from './BlogBanner/BlogBanner';
import BlogService from './BlogService/BlogService';

const Blog = () => {
    return (
        <div>
            {/* here start  */}
            <BlogBanner></BlogBanner>
            <BlogService></BlogService>
        </div>
    );
};

export default Blog;