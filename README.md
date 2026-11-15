# বাজার দর — Bazar Dor

A Bangla market price platform that helps users explore everyday product prices, compare market rates, and stay informed about price changes in Bangladesh.

## Overview

**বাজার দর (Bazar Dor)** is a web application designed to make market price information more accessible to Bangla-speaking users. It provides product-level price information, historical comparisons, and market-specific price details through a simple and user-friendly interface.

The project focuses on accessibility, performance, and a clean user experience.

## Features

- **Product Listings:** Browse available products and their current prices.
- **Product Categories:** Explore products organized by category.
- **Product Details:** View individual product information and market prices.
- **Price Comparison:** Compare today's prices with previous price records.
- **Market Information:** Explore price ranges across different markets.
- **Bangla Interface:** Bangla typography, localized numbers, and units.
- **User Authentication:** Sign up, sign in, and sign out using Better Auth.
- **User Profiles:** View and update account information.
- **Protected Routes:** Restrict access to selected pages for unauthenticated users.
- **Responsive Design:** Designed to work across desktop and mobile screens.

## Tech Stack

| Technology           | Purpose         |
| -------------------- | --------------- |
| Next.js (App Router) | React framework |
| TypeScript           | Type safety     |
| Tailwind CSS         | Styling         |
| daisyUI              | UI components   |
| Better Auth          | Authentication  |
| MongoDB              | Database        |
| React Toastify       | Notifications   |

## API

The application uses the Bazar Dor API to retrieve product and category information.

**Base URL:**

```text
https://openapi.programming-hero.com/api/bazardor
```

| Endpoint                    | Description                         |
| --------------------------- | ----------------------------------- |
| `/products`                 | Retrieve all products               |
| `/products?category={slug}` | Retrieve products by category       |
| `/products/{id}`            | Retrieve individual product details |
| `/categories/{slug}`        | Retrieve category information       |

## Authentication

Authentication is implemented using **Better Auth** with MongoDB.

The application supports:

- Email and password authentication.
- User registration and sign-in.
- Session management.
- Profile information updates.
- Protected product and profile routes.

Unauthenticated users attempting to access protected routes are redirected to the sign-in page. A callback URL is included to support returning to the originally requested page after authentication.

## Design Goals

- Simple and intuitive navigation.
- Bangla-first user experience.
- Clear presentation of product prices.
- Responsive layouts.
- Accessible and readable typography.
- Consistent green-and-white visual identity.

## Future Improvements

Potential improvements for future development:

- Search and filter products.
- More detailed historical price charts.
- Market-wise price comparison.
- User-submitted market prices.
- Price alerts and notifications.
- Administrative dashboard for managing products and prices.

## License

This project is currently under development. Licensing information can be added when a license is selected.

---

**বাজার দর — বাজারের সঠিক তথ্য, সহজেই।**
