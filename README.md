This repository contains the backend API for the E-Pharmacy application, documented using OpenAPI 3.1.0.

Overview
The E-Pharmacy API allows clients to interact with the E-Pharmacy application. It provides endpoints for authentication, managing customers, products, suppliers, and orders.

OpenAPI Specification
The API is documented using OpenAPI 3.1.0. You can view the full specification here.

Tags
The API is organized into the following tags:

Auth: Authentication operations.
Customers: Operations related to customers.
Products: Operations related to products.
Suppliers: Operations related to suppliers.
Orders: Operations related to orders.

Server URLs
The API is available at the following base URLs:

Development: http://localhost:3000
Production: https://example.com/api/v1

Endpoints
Auth
Login
POST /api/user/login
Logout
POST /api/user/logout
Dashboard
GET /api/dashboard

Customers
Get Customers
GET /api/customers
Get Customer by ID
GET /api/customers/{customerId}

Products
Get Products
GET /api/products
Create Product
POST /api/products
Update Product
PUT /api/products/{productId}
Delete Product
DELETE /api/products/{productId}

Suppliers
Get Suppliers
GET /api/suppliers
Create Supplier
POST /api/suppliers
Update Supplier
PUT /api/suppliers/{supplierId}

Orders
Get Orders
GET /api/orders

Security
The API uses Bearer authentication. To access protected endpoints, include the Bearer token in the Authorization header.

Contact
For questions or feedback, please contact mail.oleg456@gmail.com.
