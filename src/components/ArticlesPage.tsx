import { useState } from "react";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ArticlesPageProps {
  onBookingClick?: () => void;
}

export default function ArticlesPage({ onBookingClick }: ArticlesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "recovery", "mobility", "wellness", "tips"];

  const articles = [
    {
      id: 1,
      title: "The Importance of Post-Workout Recovery",
      excerpt: "Learn why recovery is just as important as your workout routine and how bodywork can accelerate your healing process.",
      image: "https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvdmVyeSUyMG1hc3NhZ2UlMjB0aGVyYXB5fGVufDF8fHx8MTc2MjMyNTA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "recovery",
      author: "Dr. Sarah Johnson",
      date: "November 1, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "5 Stretches Every Desk Worker Needs",
      excerpt: "Combat the effects of sitting all day with these essential stretches that can be done right at your desk.",
      image: "https://images.unsplash.com/photo-1758599880788-e49f6ee77bc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJldGNoaW5nJTIwZmxleGliaWxpdHklMjBleGVyY2lzZXxlbnwxfHx8fDE3NjIzMjUwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "mobility",
      author: "Michael Chen",
      date: "October 28, 2024",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Understanding Joint Mobilization Therapy",
      excerpt: "Discover how joint mobilization can help reduce pain, improve function, and restore your natural range of motion.",
      image: "https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvdmVyeSUyMG1hc3NhZ2UlMjB0aGVyYXB5fGVufDF8fHx8MTc2MjMyNTA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "wellness",
      author: "Dr. Amanda Lee",
      date: "October 25, 2024",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "How to Prepare for Your First Bodywork Session",
      excerpt: "Everything you need to know before your first visit to make the most out of your bodywork experience.",
      image: "https://images.unsplash.com/photo-1695462131822-368776114494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGJsb2clMjBhcnRpY2xlJTIwd3JpdGluZ3xlbnwxfHx8fDE3NjIzMjUwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "tips",
      author: "James Wilson",
      date: "October 20, 2024",
      readTime: "3 min read"
    },
    {
      id: 5,
      title: "The Science Behind Assisted Stretching",
      excerpt: "Explore the research and benefits of assisted stretching and why it's more effective than stretching alone.",
      image: "https://images.unsplash.com/photo-1758599880788-e49f6ee77bc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJldGNoaW5nJTIwZmxleGliaWxpdHklMjBleGVyY2lzZXxlbnwxfHx8fDE3NjIzMjUwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "mobility",
      author: "Dr. Sarah Johnson",
      date: "October 15, 2024",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Recovery Tips for Athletes",
      excerpt: "Professional athletes share their recovery routines and how regular bodywork helps them perform at their best.",
      image: "https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvdmVyeSUyMG1hc3NhZ2UlMjB0aGVyYXB5fGVufDF8fHx8MTc2MjMyNTA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "recovery",
      author: "Michael Chen",
      date: "October 10, 2024",
      readTime: "5 min read"
    }
  ];

  const filteredArticles = selectedCategory === "all" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-gray-900 mb-4">Articles & Resources</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert insights, tips, and advice to help you move better and feel your best
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors capitalize ${
                selectedCategory === category
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredArticles.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm capitalize">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1 group">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest articles, wellness tips, and exclusive offers
          </p>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
