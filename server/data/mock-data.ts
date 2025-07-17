import { Post, User, Author, PostsResponse, Comment } from "@shared/types";

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
  {
    id: 5,
    name: "Jessica Jane",
    email: "jessica@example.com",
    headline: "Product Designer",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108755-2616b612b1d5?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Alexandra",
    email: "alexandra@example.com",
    headline: "Frontend Developer",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
];

export const mockPosts: Post[] = [
  {
    id: 1,
    title: "5 Reasons to Learn Frontend Development in 2025",
    content:
      "Frontend development is more than just building beautiful user interfaces — it's about crafting user experiences that are fast, accessible, and intuitive. As we move into 2025, the demand for skilled frontend developers continues to rise.\n\nHere are 5 reasons why you should start learning frontend development today:\n\n1. High Industry Demand\n\nTech companies, startups, and even traditional businesses are constantly looking for frontend developers to help them deliver high-quality digital experiences.\n\n2. Powerful and Beginner-Friendly Tools\n\nModern frameworks like React, Vue, and Svelte make it easier than ever to build interactive UIs. Their growing ecosystems and active communities mean you'll find support at every step.\n\n3. Creative Freedom\n\nFrontend development allows you to bring your design ideas to life. From animations to responsive layouts, your creativity directly impacts how users engage with a product.\n\n4. Rapid Career Growth\n\nWith roles like UI Developer, React Developer, and Frontend Engineer, you'll find plenty of opportunities with competitive salaries and growth potential.\n\n5. Essential for Fullstack Development\n\nUnderstanding frontend is crucial if you want to become a fullstack developer. It complements your backend knowledge and enables you to build complete applications.\n\nConclusion:\n\nIf you're interested in building things that users interact with daily, frontend development is the path to take. Whether you're a designer learning to code or a backend developer exploring the frontend, 2025 is the perfect year to start.",
    tags: ["Programming", "Frontend", "Coding"],
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Ff0814687c37c496a970fdefb6a24c7bf%2Fb847598d7d6f40138aba2309c8795157?format=webp&width=800",
    author: mockUsers[0] as Author,
    createdAt: "2025-05-27T10:00:00Z",
    likes: 20,
    comments: 20,
  },
  {
    id: 2,
    title: "5 Reasons to Learn Frontend Development in 2025",
    content:
      "Frontend development is more than just building beautiful user interfaces — it's about crafting user experiences that are fast, accessible, and intuitive. As we move into 2025, the demand for skilled frontend developers continues to rise.",
    tags: ["Programming", "Frontend", "Coding"],
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Ff0814687c37c496a970fdefb6a24c7bf%2Fb847598d7d6f40138aba2309c8795157?format=webp&width=800",
    author: mockUsers[1] as Author,
    createdAt: "2025-05-27T09:00:00Z",
    likes: 20,
    comments: 20,
  },
  {
    id: 3,
    title: "5 Reasons to Learn Frontend Development in 2025",
    content:
      "Frontend development is more than just building beautiful user interfaces — it's about crafting user experiences that are fast, accessible, and intuitive. As we move into 2025, the demand for skilled frontend developers continues to rise.",
    tags: ["Programming", "Frontend", "Coding"],
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Ff0814687c37c496a970fdefb6a24c7bf%2Fb847598d7d6f40138aba2309c8795157?format=webp&width=800",
    author: mockUsers[2] as Author,
    createdAt: "2025-05-27T08:00:00Z",
    likes: 20,
    comments: 20,
  },
  {
    id: 4,
    title: "5 Reasons to Learn Frontend Development in 2025",
    content:
      "Frontend development is more than just building beautiful user interfaces — it's about crafting user experiences that are fast, accessible, and intuitive. As we move into 2025, the demand for skilled frontend developers continues to rise.",
    tags: ["Programming", "Frontend", "Coding"],
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Ff0814687c37c496a970fdefb6a24c7bf%2Fb847598d7d6f40138aba2309c8795157?format=webp&width=800",
    author: mockUsers[3] as Author,
    createdAt: "2025-05-27T07:00:00Z",
    likes: 20,
    comments: 20,
  },
  {
    id: 5,
    title: "5 Reasons to Learn Frontend Development in 2025",
    content:
      "Frontend development is more than just building beautiful user interfaces — it's about crafting user experiences that are fast, accessible, and intuitive. As we move into 2025, the demand for skilled frontend developers continues to rise.",
    tags: ["Programming", "Frontend", "Coding"],
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Ff0814687c37c496a970fdefb6a24c7bf%2Fb847598d7d6f40138aba2309c8795157?format=webp&width=800",
    author: mockUsers[0] as Author,
    createdAt: "2025-05-27T06:00:00Z",
    likes: 20,
    comments: 20,
  },
];

export const mockComments: Comment[] = [
  {
    id: 1,
    content: "This is super insightful — thanks for sharing!",
    author: {
      id: 2,
      name: "Clarissa",
      email: "clarissa@example.com",
      avatarUrl:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1d5?w=150&h=150&fit=crop&crop=face",
    },
    createdAt: "2025-03-27T10:00:00Z",
    postId: 1,
  },
  {
    id: 2,
    content:
      "Exactly what I needed to read today. Frontend is evolving so fast!",
    author: {
      id: 3,
      name: "Marco",
      email: "marco@example.com",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    createdAt: "2025-03-27T11:00:00Z",
    postId: 1,
  },
  {
    id: 3,
    content: "Great breakdown! You made complex ideas sound simple.",
    author: {
      id: 4,
      name: "Michael Sailor",
      email: "michael@example.com",
      avatarUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    createdAt: "2025-03-27T12:00:00Z",
    postId: 1,
  },
  {
    id: 4,
    content:
      "As a beginner in frontend, this motivates me a lot. Appreciate it!",
    author: {
      id: 5,
      name: "Jessica Jane",
      email: "jessica@example.com",
      avatarUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    createdAt: "2025-03-27T13:00:00Z",
    postId: 1,
  },
  {
    id: 5,
    content:
      "Well-written and straight to the point. Keep posting content like this!",
    author: {
      id: 6,
      name: "Alexandra",
      email: "alexandra@example.com",
      avatarUrl:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1d5?w=150&h=150&fit=crop&crop=face",
    },
    createdAt: "2025-03-27T14:00:00Z",
    postId: 1,
  },
];

// Helper functions for data manipulation
export class MockDataService {
  private static posts = [...mockPosts];
  private static users = [...mockUsers];
  private static comments = [...mockComments];
  private static nextPostId = Math.max(...mockPosts.map((p) => p.id)) + 1;
  private static nextUserId = Math.max(...mockUsers.map((u) => u.id)) + 1;
  private static nextCommentId = Math.max(...mockComments.map((c) => c.id)) + 1;

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

  // Comments methods
  static getCommentsByPostId(postId: number): Comment[] {
    return this.comments
      .filter((comment) => comment.postId === postId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
  }

  static createComment(commentData: {
    content: string;
    authorId: number;
    postId: number;
  }): Comment {
    const author = this.users.find((u) => u.id === commentData.authorId);
    if (!author) {
      throw new Error("Author not found");
    }

    const newComment: Comment = {
      id: this.nextCommentId++,
      content: commentData.content,
      author: author as Author,
      createdAt: new Date().toISOString(),
      postId: commentData.postId,
    };

    this.comments.push(newComment);

    // Update comment count on the post
    const post = this.posts.find((p) => p.id === commentData.postId);
    if (post) {
      post.comments += 1;
    }

    return newComment;
  }

  static deleteComment(id: number): boolean {
    const commentIndex = this.comments.findIndex(
      (comment) => comment.id === id,
    );
    if (commentIndex === -1) {
      return false;
    }

    const comment = this.comments[commentIndex];
    this.comments.splice(commentIndex, 1);

    // Update comment count on the post
    const post = this.posts.find((p) => p.id === comment.postId);
    if (post && post.comments > 0) {
      post.comments -= 1;
    }

    return true;
  }
}
