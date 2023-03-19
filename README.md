# Guideline on how to build and run the service

## Prerequisites

The following dependencies must be installed on your system:

- Node.js (v14 or higher)
- XAMPP (or any MySQL database provider)

## Getting Started

To get started with this service, follow these steps:

1. Clone the repository:

```
    git clone https://github.com/timileyin19/nestjs-mysql-and-typeorm-crud.git
```

2. Install the dependencies:

```
    cd nestjs-mysql-and-typeorm-crud
    npm install
```

3. Create a new MySQL database and update the app.module.ts file with your database credentials:

```
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'yourusername',
    password: 'yourpassword',
    database: 'yourdatabasename',
    entities: [Media],
    synchronize: true,
```

4. Import the sql file in the root directory of the repo into the created database

5. Start the service

```
    npm run start:dev
```

## Endpoints

This service exposes the following endpoints:

- `GET /media?page=1&perPage=12` - Fetch a paginated list of existing media
- `GET /media/:id` - Fetch a single media by id
- `GET /media/search?query=xyz` - Search media by title and description
- `POST /media` - Create a new media object
- `PATCH /media/:id` - Update an existing media by id
- `DELETE /media/:id` - Soft delete a media item by id
