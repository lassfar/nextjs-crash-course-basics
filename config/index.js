const dev_prod = process.env.NODE_ENV;

export const absoluteURL = dev_prod !== 'production' ? 'http://localhost:3001' : 'https://next-crash-course.netlify.app';