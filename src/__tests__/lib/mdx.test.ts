import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { 
  getAllPosts, 
  getPostBySlug, 
  getMDXContent
} from '@/lib/mdx';
import { logError } from '@/lib/errorHandling';

// Mock dependencies
jest.mock('fs');
jest.mock('path');
jest.mock('gray-matter');
jest.mock('next-mdx-remote/rsc', () => ({
  compileMDX: jest.fn().mockResolvedValue({ content: 'Compiled content' }),
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
      const mockFiles = ['post1.mdx', 'post2.mdx'];
      const mockData: MockData = {
        'post1': {
          data: { 
            title: 'Post 1', 
            date: '2023-01-02', 
            description: 'Description 1',
            author: 'Author 1',
            tags: ['tag1', 'tag2'],
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
          }, 
          content: 'Content 2'
        }
      };
      
      (fs.readdirSync as jest.Mock).mockReturnValue(mockFiles);
      (fs.readFileSync as jest.Mock).mockImplementation((filePath) => {
        const fileName = filePath.split('/').pop()?.replace('.mdx', '') || '';
        return `Content for ${fileName}`;
      });
      
      (matter as unknown as jest.Mock).mockImplementation((source) => {
        const postId = source.split(' ').pop() || '';
        return mockData[postId];
      });
      
      const result = await getAllPosts();
      
      // Most recent post should be first
      expect(result[0].title).toBe('Post 2');
      expect(result[1].title).toBe('Post 1');
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
        },
        content: 'Post content'
      };
      
      (fs.readFileSync as jest.Mock).mockReturnValue('mock file content');
      (matter as unknown as jest.Mock).mockReturnValue(mockPostData);
      
      const result = await getPostBySlug(mockSlug);
      
      expect(result.slug).toBe(mockSlug);
      expect(result.title).toBe(mockPostData.data.title);
      expect(result.content).toBe(mockPostData.content);
      expect(fs.readFileSync).toHaveBeenCalled();
    });
    
    it('calls notFound for an invalid slug', async () => {
      const mockSlug = 'invalid-post';
      
      (fs.readFileSync as jest.Mock).mockImplementation(() => {
        throw new Error('File not found');
      });
      
      await getPostBySlug(mockSlug);
      
      expect(logError).toHaveBeenCalledWith(
        expect.stringContaining(mockSlug),
        expect.any(Error),
        expect.any(Object)
      );
      expect(notFound).toHaveBeenCalled();
    });
  });
  
  describe('getMDXContent', () => {
    it('returns content and frontmatter for valid filepath', async () => {
      const mockFilepath = 'valid/file.mdx';
      const mockData = {
        data: {
          title: 'Test Title',
          lastUpdated: '2023-01-01',
          summary: 'Test summary',
          customField: 'Custom value'
        },
        content: 'Test content'
      };
      
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readFileSync as jest.Mock).mockReturnValue('mock file content');
      (matter as unknown as jest.Mock).mockReturnValue(mockData);
      
      const result = await getMDXContent(mockFilepath);
      
      expect(result.content).toBe(mockData.content);
      expect(result.frontmatter.title).toBe(mockData.data.title);
      expect(result.frontmatter.customField).toBe(mockData.data.customField);
    });
    
    it('throws error for invalid filepath', async () => {
      const mockInvalidFilepath = '';
      
      await expect(getMDXContent(mockInvalidFilepath)).rejects.toThrow('Invalid filepath');
      expect(logError).toHaveBeenCalled();
    });
    
    it('calls notFound for non-existent file', async () => {
      const mockFilepath = 'nonexistent/file.mdx';
      
      (fs.existsSync as jest.Mock).mockReturnValue(false);
      
      await getMDXContent(mockFilepath);
      
      expect(logError).toHaveBeenCalled();
      expect(notFound).toHaveBeenCalled();
    });
    
    it('throws error for missing required frontmatter', async () => {
      const mockFilepath = 'invalid/frontmatter.mdx';
      const mockData = {
        data: {
          // Missing title
          lastUpdated: '2023-01-01',
          summary: 'Test summary'
        },
        content: 'Test content'
      };
      
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readFileSync as jest.Mock).mockReturnValue('mock file content');
      (matter as unknown as jest.Mock).mockReturnValue(mockData);
      
      await expect(getMDXContent(mockFilepath)).rejects.toThrow('Invalid MDX content');
      expect(logError).toHaveBeenCalled();
    });
  });
}); 