﻿# Celebal_Technologies--w-2-A


# 📁 Node.js File Management Tool 

This project is a simple file management tool built using **Node.js core modules**: `fs`, `path`, and `http`. It is designed to create, read, and delete a text file via HTTP routes. The assignment demonstrates how to use Node.js without any external frameworks to build a minimal backend tool.

---

## 🔧 Core Concepts Used

- **HTTP Module**: To create a server and handle requests/responses.
- **File System (fs) Module**: To perform file operations like create, read, and delete.
- **Path Module**: To resolve file paths in a cross-platform way.

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js installed on your machine

### 📂 Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/nandkumar1000/Celebal_Technologies--w-2-A.git
   cd Celebal_Technologies--w-2-A
````

2. Run the application:

   ```bash
   node index.js
   ```

---

## 🌐 API Endpoints

| Method | Endpoint  | Description                                             |
| ------ | --------- | ------------------------------------------------------- |
| GET    | `/create` | Creates a file named `Data.txt` with predefined content |
| GET    | `/read`   | Reads the content of `Data.txt`                         |
| GET    | `/delete` | Deletes the file `Data.txt`                             |

> ⚠️ Make sure the server is running on `http://localhost:3000`.

---

## 📁 Example Output

* **/create**
  `File created successfully!`

* **/read**
  `This is Assignment of week-2. Our work is to utilize Node.js core modules...`

* **/delete**
  `File deleted successfully.`

---

## 🧑‍💻 Author

Developed  BY nand kumar sahu as part of the **Week-2 Assignment** for **Celebal Technologies**.

---



