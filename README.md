# Online Shopping Website

This project is an online shopping website built with Next.js. It includes features such as a product listing page, product categories, featured products, and detailed product pages.

## Features
- Dynamic fetching of product categories
- Display of featured products
- Detailed product view with reviews and ratings
- Responsive design

## Requirements
- Node.js (version 14 or later)
- npm (Node Package Manager) or Yarn

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Running the Project Locally

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure
- **components**: Contains reusable React components like `Navbar`, `Footer`, `HeroSection`, etc.
- **pages**: Contains Next.js pages for routes like `/`, `/about`, `/products`.
- **data**: Contains JSON files for static data, e.g., `products.json`.
- **lib**: Utility functions used across the project.


## Data Sources
- Product categories and data are fetched from [DummyJSON](https://dummyjson.com/).

## Customization
- To add more products, update the `products.json` file in the `data` folder.
- For styling, the project uses Tailwind CSS. Modify styles in the `tailwind.config.js` or corresponding component CSS classes.

## Available Scripts
- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm run start`**: Runs the production build.
- **`npm run lint`**: Lints the project code.

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contributing
Contributions are welcome! Please follow the steps below to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## Contact
For questions or issues, feel free to reach out or create an issue in the repository.

---
Happy Coding! 🎉









