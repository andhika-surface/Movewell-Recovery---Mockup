import { useState } from "react";
import { Plus, Edit2, Trash2, Save, X } from "lucide-react";
import type { Article } from "../../data/articles";

interface ArticleEditorProps {
  articles: Article[];
  setArticles: (articles: Article[]) => void;
}

export default function ArticleEditor({ articles, setArticles }: ArticleEditorProps) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState<Article>({
    id: 0,
    title: "",
    excerpt: "",
    image: "",
    category: "wellness",
    author: "",
    date: "",
    readTime: ""
  });

  const categories = ["recovery", "mobility", "wellness", "tips"];

  const handleEdit = (article: Article) => {
    setFormData(article);
    setEditingId(article.id);
    setIsCreating(false);
  };

  const handleCreate = () => {
    const newId = articles.length > 0 ? Math.max(...articles.map(a => a.id)) + 1 : 1;
    setFormData({
      id: newId,
      title: "",
      excerpt: "",
      image: "",
      category: "wellness",
      author: "",
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      readTime: ""
    });
    setIsCreating(true);
    setEditingId(null);
  };

  const handleSave = () => {
    if (isCreating) {
      setArticles([...articles, formData]);
    } else {
      setArticles(articles.map(a => a.id === editingId ? formData : a));
    }
    handleCancel();
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this article?")) {
      setArticles(articles.filter(a => a.id !== id));
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsCreating(false);
    setFormData({
      id: 0,
      title: "",
      excerpt: "",
      image: "",
      category: "wellness",
      author: "",
      date: "",
      readTime: ""
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-gray-900">Manage Articles</h2>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Add New Article</span>
        </button>
      </div>

      {/* Form */}
      {(isCreating || editingId) && (
        <div className="bg-gray-50 rounded-lg p-6 mb-6 border-2 border-blue-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900">{isCreating ? "Create New Article" : "Edit Article"}</h3>
            <button onClick={handleCancel} className="text-gray-600 hover:text-gray-900">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter article title"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Excerpt</label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows={3}
                placeholder="Enter article excerpt"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Image URL</label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="https://images.unsplash.com/..."
              />
              <p className="text-gray-500 text-sm mt-1">Tip: Use Unsplash or upload to GitHub /data/images folder</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Author</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Dr. Sarah Johnson"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Date</label>
                <input
                  type="text"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="November 1, 2024"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Read Time</label>
                <input
                  type="text"
                  value={formData.readTime}
                  onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="5 min read"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Save className="w-5 h-5" />
                <span>Save</span>
              </button>
              <button
                onClick={handleCancel}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Articles List */}
      <div className="space-y-4">
        {articles.map((article) => (
          <div key={article.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <img
                src={article.image}
                alt={article.title}
                className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-gray-900 mb-1">{article.title}</h4>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                      <span className="px-2 py-1 bg-gray-100 rounded capitalize">{article.category}</span>
                      <span>{article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(article)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(article.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
