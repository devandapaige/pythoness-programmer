import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { 
  getAllPosts, 
  getPostBySlug, 
  getPostBySlugSync,
  type BlogPost
} from '@/lib/mdx';
import { logError } from '@/lib/errorHandling';

// Mock dependencies
jest.mock('fs');
jest.mock('path');
jest.mock('gray-matter');
jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}));
jest.mock('@/lib/errorHandling', () => ({
  logError: jest.fn(),
}));

interface MockPostData {
  data: {
    title: string;
    date: string;
    description: string;
    author: string;
    tags: string[];
    image: string;
  };
  content: string;
}

interface MockData {
  [key: string]: MockPostData;
}

describe('MDX Utilities', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (path.join as jest.Mock).mockImplementation((...args) => args.join('/'));
  });
  
  describe('getAllPosts', () => {
    it('returns sorted blog posts by date', async () => {
      // Mock filesystem and matter responses
      const mockFiles = ['post2.mdx', 'post1.mdx'];
      const mockData: MockData = {
        'post1': {
          data: { 
            title: 'Post 1', 
            date: '2023-01-02', 
            description: 'Description 1',
            author: 'Author 1',
            tags: ['tag1', 'tag2'],
            image: 'image1.jpg',
          },
          content: 'Content 1'
        },
        'post2': {
          data: { 
            title: 'Post 2', 
            date: '2023-01-03', 
            description: 'Description 2',
            author: 'Author 2',
            tags: ['tag2', 'tag3'],
            image: 'image2.jpg',
          }, 
          content: 'Content 2'
        }
      };
      
      (fs.readdirSync as jest.Mock).mockReturnValue(mockFiles);
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readFileSync as jest.Mock).mockImplementation((filePath) => {
        if (filePath.includes('post1.mdx')) return 'Content for post1';
        if (filePath.includes('post2.mdx')) return 'Content for post2';
        return '';
      });
      
      (matter as unknown as jest.Mock).mockImplementation((source) => {
        // Extract the post ID from the source content (e.g., 'Content for post1')
        const match = source.match(/Content for (post\d+)/);
        const postId = match ? match[1] : 'post1';
        return mockData[postId];
      });
      
      const result = await getAllPosts();
      
      // Most recent post should be first
      expect(result[0].frontmatter.title).toBe('Post 2');
      expect(result[1].frontmatter.title).toBe('Post 1');
      expect(result).toHaveLength(2);
      expect(fs.readdirSync).toHaveBeenCalled();
    });
  });
  
  describe('getPostBySlug', () => {
    it('returns the correct blog post for a valid slug', async () => {
      const mockSlug = 'valid-post';
      const mockPostData: MockPostData = {
        data: {
          title: 'Valid Post',
          date: '2023-01-01',
          description: 'This is a valid post',
          author: 'Test Author',
          tags: ['test', 'valid'],
          image: 'valid-image.jpg',
        },
        content: 'Post content'
      };
      
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readFileSync as jest.Mock).mockReturnValue('mock file content');
      (matter as unknown as jest.Mock).mockReturnValue(mockPostData);
      
      const result = await getPostBySlug(mockSlug);
      
      expect(result?.frontmatter.slug).toBe(mockSlug);
      expect(result?.frontmatter.title).toBe(mockPostData.data.title);
      expect(result?.content).toBe(mockPostData.content);
      expect(fs.readFileSync).toHaveBeenCalled();
    });
    
    it('returns null for an invalid slug', async () => {
      const mockSlug = 'invalid-post';
      
      (fs.existsSync as jest.Mock).mockReturnValue(false);
      
      const result = await getPostBySlug(mockSlug);
      
      expect(result).toBeNull();
    });
  });

  describe('getPostBySlugSync', () => {
    it('returns the correct blog post for a valid slug', () => {
      const mockSlug = 'valid-post';
      const mockPostData: MockPostData = {
        data: {
          title: 'Valid Post',
          date: '2023-01-01',
          description: 'This is a valid post',
          author: 'Test Author',
          tags: ['test', 'valid'],
          image: 'valid-image.jpg',
        },
        content: 'Post content'
      };
      
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readFileSync as jest.Mock).mockReturnValue('mock file content');
      (matter as unknown as jest.Mock).mockReturnValue(mockPostData);
      
      const result = getPostBySlugSync(mockSlug);
      
      expect(result?.frontmatter.slug).toBe(mockSlug);
      expect(result?.frontmatter.title).toBe(mockPostData.data.title);
      expect(result?.content).toBe(mockPostData.content);
      expect(fs.readFileSync).toHaveBeenCalled();
    });
    
    it('returns null for an invalid slug', () => {
      const mockSlug = 'invalid-post';
      
      (fs.existsSync as jest.Mock).mockReturnValue(false);
      
      const result = getPostBySlugSync(mockSlug);
      
      expect(result).toBeNull();
    });

    it('handles slug with .mdx extension', () => {
      const mockSlug = 'valid-post.mdx';
      const mockPostData: MockPostData = {
        data: {
          title: 'Valid Post',
          date: '2023-01-01',
          description: 'This is a valid post',
          author: 'Test Author',
          tags: ['test', 'valid'],
          image: 'valid-image.jpg',
        },
        content: 'Post content'
      };
      
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readFileSync as jest.Mock).mockReturnValue('mock file content');
      (matter as unknown as jest.Mock).mockReturnValue(mockPostData);
      
      const result = getPostBySlugSync(mockSlug);
      
      expect(result?.frontmatter.slug).toBe('valid-post');
      expect(result?.frontmatter.title).toBe(mockPostData.data.title);
    });
  });
}); 