import { Post, User, Author, PostsResponse } from "@shared/types";

export const mockUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    headline: "Frontend Developer",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    headline: "Full Stack Developer",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108755-2616b612b1d5?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    headline: "UI/UX Designer",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    headline: "Backend Developer",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
];

export const mockPosts: Post[] = [
  {
    id: 1,
    title: "Getting Started with React 18",
    content:
      "React 18 introduces exciting new features including concurrent rendering, automatic batching, and new hooks. In this comprehensive guide, we'll explore how to leverage these features to build better user experiences.",
    tags: ["react", "javascript", "frontend"],
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    author: mockUsers[0] as Author,
    createdAt: "2024-01-15T10:00:00Z",
    likes: 42,
    comments: 8,
  },
  {
    id: 2,
    title: "Building Scalable APIs with Node.js",
    content:
      "Learn how to design and implement scalable REST APIs using Node.js, Express, and modern best practices. We'll cover authentication, validation, error handling, and performance optimization.",
    tags: ["nodejs", "api", "backend"],
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    author: mockUsers[1] as Author,
    createdAt: "2024-01-14T15:30:00Z",
    likes: 38,
    comments: 12,
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Which",
    content:
      "Both CSS Grid and Flexbox are powerful layout systems, but they serve different purposes. This article explains when to use each one and provides practical examples.",
    tags: ["css", "layout", "design"],
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    author: mockUsers[2] as Author,
    createdAt: "2024-01-13T09:15:00Z",
    likes: 67,
    comments: 15,
  },
  {
    id: 4,
    title: "TypeScript Best Practices for Large Projects",
    content:
      "As your TypeScript project grows, maintaining type safety and code quality becomes crucial. Here are proven strategies for organizing and scaling TypeScript codebases.",
    tags: ["typescript", "best-practices", "architecture"],
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
    author: mockUsers[3] as Author,
    createdAt: "2024-01-12T14:20:00Z",
    likes: 89,
    comments: 23,
  },
  {
    id: 5,
    title: "Modern Authentication Patterns",
    content:
      "Explore modern authentication patterns including JWT, OAuth 2.0, and passwordless authentication. Learn how to implement secure user authentication in your applications.",
    tags: ["authentication", "security", "oauth"],
    imageUrl:
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&h=400&fit=crop",
    author: mockUsers[0] as Author,
    createdAt: "2024-01-11T11:45:00Z",
    likes: 156,
    comments: 34,
  },
  {
    id: 6,
    title: "Database Design Fundamentals",
    content:
      "Good database design is the foundation of any robust application. Learn about normalization, indexing, and relationship modeling to create efficient database schemas.",
    tags: ["database", "sql", "design"],
    imageUrl:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop",
    author: mockUsers[1] as Author,
    createdAt: "2024-01-10T16:00:00Z",
    likes: 73,
    comments: 19,
  },
  {
    id: 7,
    title: "Performance Optimization in React Applications",
    content:
      "Learn essential techniques for optimizing React application performance, including memoization, lazy loading, and efficient re-rendering strategies.",
    tags: ["react", "performance", "optimization"],
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    author: mockUsers[2] as Author,
    createdAt: "2024-01-09T13:30:00Z",
    likes: 95,
    comments: 27,
  },
  {
    id: 8,
    title: "Microservices Architecture Patterns",
    content:
      "Dive into microservices architecture patterns, including service discovery, API gateways, and distributed system challenges. Learn when and how to implement microservices.",
    tags: ["microservices", "architecture", "distributed-systems"],
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    author: mockUsers[3] as Author,
    createdAt: "2024-01-08T10:15:00Z",
    likes: 112,
    comments: 41,
  },
];

// Helper functions for data manipulation
export class MockDataService {
  private static posts = [...mockPosts];
  private static users = [...mockUsers];
  private static nextPostId = Math.max(...mockPosts.map((p) => p.id)) + 1;
  private static nextUserId = Math.max(...mockUsers.map((u) => u.id)) + 1;

  // Posts methods
  static getAllPosts(
    page = 1,
    limit = 10,
    sortBy: "latest" | "likes" = "latest",
  ): PostsResponse {
    let sortedPosts = [...this.posts];

    if (sortBy === "likes") {
      sortedPosts.sort((a, b) => b.likes - a.likes);
    } else {
      sortedPosts.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = sortedPosts.slice(startIndex, endIndex);

    return {
      data: paginatedPosts,
      total: sortedPosts.length,
      page,
      lastPage: Math.ceil(sortedPosts.length / limit),
    };
  }

  static getPostById(id: number): Post | null {
    return this.posts.find((post) => post.id === id) || null;
  }

  static getPostsByAuthor(
    authorId: number,
    page = 1,
    limit = 10,
  ): PostsResponse {
    const authorPosts = this.posts.filter(
      (post) => post.author.id === authorId,
    );
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = authorPosts.slice(startIndex, endIndex);

    return {
      data: paginatedPosts,
      total: authorPosts.length,
      page,
      lastPage: Math.ceil(authorPosts.length / limit),
    };
  }

  static searchPosts(query: string, page = 1, limit = 10): PostsResponse {
    const searchTerm = query.toLowerCase();
    const filteredPosts = this.posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchTerm)),
    );

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

    return {
      data: paginatedPosts,
      total: filteredPosts.length,
      page,
      lastPage: Math.ceil(filteredPosts.length / limit),
    };
  }

  static createPost(postData: {
    title: string;
    content: string;
    tags: string[];
    imageUrl?: string;
    authorId: number;
  }): Post {
    const author = this.users.find((u) => u.id === postData.authorId);
    if (!author) {
      throw new Error("Author not found");
    }

    const newPost: Post = {
      id: this.nextPostId++,
      title: postData.title,
      content: postData.content,
      tags: postData.tags,
      imageUrl: postData.imageUrl,
      author: author as Author,
      createdAt: new Date().toISOString(),
      likes: 0,
      comments: 0,
    };

    this.posts.unshift(newPost);
    return newPost;
  }

  static updatePost(
    id: number,
    updates: {
      title?: string;
      content?: string;
      tags?: string[];
      imageUrl?: string;
    },
  ): Post | null {
    const postIndex = this.posts.findIndex((post) => post.id === id);
    if (postIndex === -1) {
      return null;
    }

    this.posts[postIndex] = {
      ...this.posts[postIndex],
      ...updates,
    };

    return this.posts[postIndex];
  }

  static deletePost(id: number): boolean {
    const postIndex = this.posts.findIndex((post) => post.id === id);
    if (postIndex === -1) {
      return false;
    }

    this.posts.splice(postIndex, 1);
    return true;
  }

  static likePost(id: number): Post | null {
    const post = this.posts.find((post) => post.id === id);
    if (!post) {
      return null;
    }

    post.likes += 1;
    return post;
  }

  // Users methods
  static getAllUsers(): User[] {
    return [...this.users];
  }

  static getUserById(id: number): User | null {
    return this.users.find((user) => user.id === id) || null;
  }

  static getUserByEmail(email: string): User | null {
    return this.users.find((user) => user.email === email) || null;
  }

  static createUser(userData: {
    name: string;
    email: string;
    headline?: string;
    avatarUrl?: string;
  }): User {
    const newUser: User = {
      id: this.nextUserId++,
      name: userData.name,
      email: userData.email,
      headline: userData.headline,
      avatarUrl: userData.avatarUrl,
    };

    this.users.push(newUser);
    return newUser;
  }

  static updateUser(
    id: number,
    updates: {
      name?: string;
      email?: string;
      headline?: string;
      avatarUrl?: string;
    },
  ): User | null {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return null;
    }

    this.users[userIndex] = {
      ...this.users[userIndex],
      ...updates,
    };

    return this.users[userIndex];
  }
}
