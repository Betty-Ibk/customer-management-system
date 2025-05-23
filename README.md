# Customer Management System

A modern, responsive web application for managing customer information, built with Angular.

## Overview

This Customer Management System provides a comprehensive solution for businesses to manage their customer data efficiently. The application offers a clean, intuitive interface with features for viewing, adding, editing, and deleting customer records.

## Features

- **Customer Dashboard**: View all customers with pagination support
- **Search Functionality**: Filter customers by name, email, or phone number
- **Customer Details**: View complete information for each customer
- **Add/Edit Forms**: Create new customer records or update existing ones
- **Delete Confirmation**: Secure deletion with confirmation dialog
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Technology Stack

- **Frontend Framework**: Angular 19.2.10
- **Styling**: Custom CSS with responsive design
- **State Management**: Angular services
- **Routing**: Angular Router for navigation between views

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/customer-management-system.git
   cd customer-management-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200/`

## Usage

### Managing Customers

- **View Customers**: The home page displays a paginated list of all customers
- **Search**: Use the search box to filter customers by name, email, or phone
- **View Details**: Click the "View" button to see complete customer information
- **Edit Customer**: Click the "Edit" button to modify customer details
- **Delete Customer**: Click the "Delete" button and confirm to remove a customer
- **Add Customer**: Click the "Add New Customer" button to create a new record

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── customer-list/
│   │   ├── customer-detail/
│   │   ├── customer-form/
│   │   ├── header/
│   │   └── dialog/
│   ├── services/
│   │   ├── customer.service.ts
│   │   └── dialog.service.ts
│   ├── app.component.ts
│   ├── app.routes.ts
│   └── customer.model.ts
├── assets/
└── styles.css
```

## Development

### Code Scaffolding

Run `ng generate component component-name` to generate a new component.

### Building for Production

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running Tests

Run `ng test` to execute the unit tests via Karma.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Angular team for the excellent framework
- All contributors who have helped improve this project
