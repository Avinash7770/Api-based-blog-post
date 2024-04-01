# Blog Post API

This is a simple blog post API built using Node.js and Express.js, with data stored in-memory. The API provides basic CRUD (Create, Read, Update, Delete) operations for managing blog posts.

## Features

- **Get All Posts**: Retrieve a list of all blog posts.
- **Get Specific Post by ID**: Retrieve a specific blog post by its ID.
- **Create New Post**: Add a new blog post.
- **Update Post**: Update an existing blog post.
- **Delete Post**: Delete a blog post.

## How to Use

1. Clone the repository:


2. Navigate to the project directory:


3. Install dependencies:


4. Start the server:


5. The server will start running at `http://localhost:3000`.

## Endpoints

### 1. Get All Posts

- **URL**: `/posts`
- **Method**: `GET`
- **Description**: Retrieve a list of all blog posts.

### 2. Get Specific Post by ID

- **URL**: `/posts/:id`
- **Method**: `GET`
- **Description**: Retrieve a specific blog post by its ID.

### 3. Create New Post

- **URL**: `/posts`
- **Method**: `POST`
- **Description**: Add a new blog post.

### 4. Update Post

- **URL**: `/posts/:id`
- **Method**: `PATCH`
- **Description**: Update an existing blog post.

### 5. Delete Post

- **URL**: `/posts/:id`
- **Method**: `DELETE`
- **Description**: Delete a blog post.

## Frontend Integration

This API can be integrated with a frontend to create a complete blogging platform. The frontend can utilize the provided endpoints to perform CRUD operations on blog posts.

## Technologies Used

- Node.js
- Express.js
- Axios (for making HTTP requests)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize and extend this API according to your requirements! If you have any questions or suggestions, please feel free to reach out.
