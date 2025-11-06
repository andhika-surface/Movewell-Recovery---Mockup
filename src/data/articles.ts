export interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export const articlesData: Article[] = [
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
