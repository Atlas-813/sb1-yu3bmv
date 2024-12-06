import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

export default function BlogPosts() {
  const handleDelete = (id: number) => {
    // Implement delete functionality
    console.log('Delete post:', id);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Blog Posts</h2>
        <Link
          to="/admin/dashboard/posts/new"
          className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg 
            hover:bg-primary-600 transition-all duration-300"
        >
          <Plus size={18} className="mr-2" />
          New Post
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-primary-300/20">
              <th className="text-left py-3 px-4 text-primary-100">Title</th>
              <th className="text-left py-3 px-4 text-primary-100">Category</th>
              <th className="text-left py-3 px-4 text-primary-100">Date</th>
              <th className="text-left py-3 px-4 text-primary-100">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogPosts.map((post) => (
              <tr key={post.id} className="border-b border-primary-300/20">
                <td className="py-3 px-4 text-white">{post.title}</td>
                <td className="py-3 px-4 text-primary-100">{post.category}</td>
                <td className="py-3 px-4 text-primary-100">
                  {new Date(post.date).toLocaleDateString()}
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-2">
                    <Link
                      to={`/admin/dashboard/posts/${post.id}/edit`}
                      className="p-2 text-primary-300 hover:text-primary-100 transition-colors"
                    >
                      <Edit size={18} />
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="p-2 text-red-400 hover:text-red-300 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}