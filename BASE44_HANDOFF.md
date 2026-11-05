# STATION / Base44 handoff

## Repository
GitHub: https://github.com/ptsionkis/streetfashion
Branch: `main`

## First import
1. In Base44, open the Station project and the GitHub integration.
2. Select this existing repository (if Base44 offers importing an existing repository) and `main`.
3. Inspect any overwrite/sync warning before confirming. Keep a backup of the existing Base44 project.
4. Check the Preview. Verify home, Shop, filters, quick view, size selection, wishlist, cart and mobile menu.
5. If Base44 requires its own scaffold rather than importing a standard Vite repository, stop and reconcile the structures. Do not overwrite a working app blindly.

## Current functionality
- React + Vite editorial frontend
- Six **placeholder** products with demo sizes/prices/stock
- Client-side wishlist/cart using localStorage
- Product quick view, category filters, search and sorting
- No real customer data, payment processing or submitted orders

## Production work (not completed)
- Base44 entities for products, variants, stock, customers, orders and admin roles
- Secure backend handlers and validated server-side price, VAT, shipping, promotions and availability
- Hosted payment checkout, verified signed webhook processing, refunds and idempotency
- WooCommerce migration with old product URL redirects and customer account strategy
- Real Greek legal/policy pages, shipping/couriers/invoicing integrations
- Test plan, accessibility, SEO crawlability, performance and launch rollback strategy

**Never put private secrets, customer CSV exports or admin credentials into this public repository.**
