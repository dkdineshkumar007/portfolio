export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with Redux",
    slug: "building-scalable-react-applications-redux",
    excerpt: "Learn how to structure and manage state in large React applications using Redux and modern patterns.",
    content: `
# Building Scalable React Applications with Redux

React applications can quickly become complex as they grow. Managing state across multiple components becomes challenging, and this is where Redux shines. In this post, I'll share my experience building enterprise-level applications with React and Redux.

## Why Redux?

Redux provides a predictable state container for JavaScript applications. It helps you write applications that behave consistently, run in different environments, and are easy to test.

### Key Benefits:
- **Predictable State Updates**: All state changes happen through pure functions
- **Centralized State Management**: Single source of truth for your application state
- **Time Travel Debugging**: Ability to replay actions and debug state changes
- **Hot Reloading**: Preserve state during development

## Best Practices I've Learned

### 1. Structure Your Redux Store
\`\`\`javascript
const store = {
  user: {
    profile: {},
    preferences: {}
  },
  inventory: {
    items: [],
    filters: {}
  },
  orders: {
    list: [],
    currentOrder: null
  }
}
\`\`\`

### 2. Use Redux Toolkit
Redux Toolkit simplifies Redux usage and includes utilities to simplify common use cases.

\`\`\`javascript
import { createSlice } from '@reduxjs/toolkit'

const inventorySlice = createSlice({
  name: 'inventory',
  initialState: {
    items: [],
    loading: false
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  }
})
\`\`\`

## Real-World Implementation

In my work at Aroopa Technologies, I implemented Redux for managing complex inventory and order management systems. The key was to normalize the state structure and use selectors for computed values.

## Conclusion

Redux might seem overwhelming at first, but once you understand the patterns, it becomes an invaluable tool for building scalable React applications.
    `,
    author: "Dinesh Kumar S",
    publishedAt: "2024-12-15",
    readTime: "8 min read",
    tags: ["React", "Redux", "JavaScript", "State Management"],
    category: "Frontend Development",
    featured: true,
    image: "/images/blog/redux-post.jpg"
  },
  {
    id: 2,
    title: "PostgreSQL Performance Optimization Tips",
    slug: "postgresql-performance-optimization-tips",
    excerpt: "Discover advanced techniques to optimize PostgreSQL queries and improve database performance in production applications.",
    content: `
# PostgreSQL Performance Optimization Tips

Database performance is crucial for any web application. During my time working with PostgreSQL at Aroopa Technologies, I've learned several optimization techniques that significantly improved our application performance.

## Indexing Strategies

### 1. B-tree Indexes
Most common type of index, perfect for equality and range queries.

\`\`\`sql
CREATE INDEX idx_orders_created_at ON orders(created_at);
CREATE INDEX idx_products_category_id ON products(category_id);
\`\`\`

### 2. Partial Indexes
Useful when you frequently query a subset of data.

\`\`\`sql
CREATE INDEX idx_active_orders ON orders(created_at) 
WHERE status = 'active';
\`\`\`

## Query Optimization

### Use EXPLAIN ANALYZE
Always analyze your query execution plans:

\`\`\`sql
EXPLAIN ANALYZE SELECT * FROM orders 
WHERE created_at > '2024-01-01' 
AND status = 'pending';
\`\`\`

### Avoid SELECT *
Only select the columns you need:

\`\`\`sql
-- Instead of
SELECT * FROM products;

-- Use
SELECT id, name, price FROM products;
\`\`\`

## Connection Pooling

Implement connection pooling to manage database connections efficiently:

\`\`\`javascript
const pool = new Pool({
  user: 'username',
  host: 'localhost',
  database: 'mydb',
  password: 'password',
  port: 5432,
  max: 20, // maximum number of connections
  idleTimeoutMillis: 30000,
});
\`\`\`

## Monitoring and Maintenance

Regular maintenance is key to optimal performance:

1. **VACUUM and ANALYZE** regularly
2. Monitor slow queries with pg_stat_statements
3. Keep statistics up to date
4. Monitor connection counts and locks

## Conclusion

These optimization techniques helped us achieve 40% better query performance in our production systems. Remember, optimization is an ongoing process!
    `,
    author: "Dinesh Kumar S",
    publishedAt: "2024-11-28",
    readTime: "6 min read",
    tags: ["PostgreSQL", "Database", "Performance", "SQL"],
    category: "Backend Development",
    featured: false,
    image: "/images/blog/postgresql-post.jpg"
  },
  {
    id: 3,
    title: "Modern CI/CD with Azure DevOps",
    slug: "modern-cicd-azure-devops",
    excerpt: "Learn how to set up efficient CI/CD pipelines using Azure DevOps for seamless deployment and integration.",
    content: `
# Modern CI/CD with Azure DevOps

Continuous Integration and Continuous Deployment (CI/CD) are essential practices in modern software development. At Aroopa Technologies, we use Azure DevOps to streamline our development workflow.

## Setting Up Build Pipelines

### YAML Pipeline Configuration
\`\`\`yaml
trigger:
- main
- develop

pool:
  vmImage: 'ubuntu-latest'

variables:
  buildConfiguration: 'Release'

steps:
- task: NodeTool@0
  inputs:
    versionSpec: '18.x'
  displayName: 'Install Node.js'

- script: |
    npm install
    npm run build
    npm run test
  displayName: 'npm install, build and test'

- task: PublishTestResults@2
  condition: succeededOrFailed()
  inputs:
    testRunner: JUnit
    testResultsFiles: '**/test-results.xml'
\`\`\`

## Deployment Strategies

### Blue-Green Deployment
Minimize downtime by maintaining two identical production environments:

1. **Blue Environment**: Current production
2. **Green Environment**: New version deployment
3. **Switch**: Route traffic from blue to green

### Rolling Deployment
Gradually replace instances of the previous version:

\`\`\`yaml
strategy:
  rolling:
    maxSurge: 1
    maxUnavailable: 1
\`\`\`

## Security Best Practices

### 1. Use Service Connections
Securely connect to external services without exposing credentials.

### 2. Variable Groups
Store sensitive configuration in Azure Key Vault:

\`\`\`yaml
variables:
- group: production-secrets
- name: apiUrl
  value: 'https://api.production.com'
\`\`\`

### 3. Branch Policies
Enforce code quality with branch policies:
- Require pull request reviews
- Build validation
- Work item linking

## Monitoring and Alerts

Set up monitoring for your pipelines:
- Build success/failure notifications
- Deployment status tracking
- Performance metrics

## Benefits We've Achieved

1. **Reduced Deployment Time**: From 2 hours to 15 minutes
2. **Improved Code Quality**: Automated testing catches issues early
3. **Better Collaboration**: Standardized processes across teams
4. **Faster Recovery**: Quick rollback capabilities

## Conclusion

Azure DevOps has transformed our development workflow, enabling faster and more reliable software delivery.
    `,
    author: "Dinesh Kumar S",
    publishedAt: "2024-10-20",
    readTime: "10 min read",
    tags: ["Azure DevOps", "CI/CD", "DevOps", "Deployment"],
    category: "DevOps",
    featured: true,
    image: "/images/blog/azure-devops-post.jpg"
  },
  {
    id: 4,
    title: "Building Real-time Applications with Node.js",
    slug: "building-realtime-applications-nodejs",
    excerpt: "Explore techniques for building real-time applications using Node.js, WebSockets, and modern frameworks.",
    content: `
# Building Real-time Applications with Node.js

Real-time applications are becoming increasingly important in modern web development. From chat applications to live dashboards, users expect instant updates. Here's how I approach building real-time applications with Node.js.

## WebSocket Implementation

### Basic WebSocket Server
\`\`\`javascript
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    
    // Broadcast to all clients
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});
\`\`\`

### Socket.IO for Enhanced Features
\`\`\`javascript
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('User connected');
  
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    socket.to(roomId).emit('user-joined');
  });
  
  socket.on('message', (data) => {
    socket.to(data.room).emit('message', data);
  });
});
\`\`\`

## Real-time Data Synchronization

### Database Change Streams
For MongoDB, use change streams to watch for data changes:

\`\`\`javascript
const changeStream = db.collection('orders').watch();

changeStream.on('change', (change) => {
  if (change.operationType === 'insert') {
    io.emit('new-order', change.fullDocument);
  }
});
\`\`\`

### PostgreSQL LISTEN/NOTIFY
\`\`\`javascript
const client = new Client();
client.connect();

client.query('LISTEN order_updates');

client.on('notification', (msg) => {
  const data = JSON.parse(msg.payload);
  io.emit('order-update', data);
});
\`\`\`

## Performance Considerations

### 1. Connection Management
Implement connection pooling and cleanup:

\`\`\`javascript
const connections = new Map();

io.on('connection', (socket) => {
  connections.set(socket.id, socket);
  
  socket.on('disconnect', () => {
    connections.delete(socket.id);
  });
});
\`\`\`

### 2. Rate Limiting
Prevent abuse with rate limiting:

\`\`\`javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
\`\`\`

## Scaling Real-time Applications

### Redis for Multi-server Setup
\`\`\`javascript
const redis = require('socket.io-redis');
io.adapter(redis({ host: 'localhost', port: 6379 }));
\`\`\`

### Load Balancing
Use sticky sessions for WebSocket connections:

\`\`\`nginx
upstream backend {
    ip_hash;
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
}
\`\`\`

## Real-world Implementation

In our inventory management system, we implemented real-time updates for:
- Stock level changes
- Order status updates
- User activity tracking
- System notifications

## Conclusion

Building real-time applications requires careful consideration of architecture, performance, and scalability. Node.js provides excellent tools for this purpose.
    `,
    author: "Dinesh Kumar S",
    publishedAt: "2024-09-15",
    readTime: "12 min read",
    tags: ["Node.js", "WebSocket", "Real-time", "JavaScript"],
    category: "Backend Development",
    featured: false,
    image: "/images/blog/nodejs-realtime-post.jpg"
  }
];

export const blogCategories = [
  "All",
  "Frontend Development",
  "Backend Development",
  "DevOps",
  "Database",
  "JavaScript",
  "React",
  "Node.js"
];

export const featuredPosts = blogPosts.filter(post => post.featured);
