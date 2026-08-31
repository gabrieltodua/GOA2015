# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d).

![Design preview](./preview.jpg)

## The challenge

Users are able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the layout for mobile, tablet, and desktop screen sizes
- See hover and focus states for all interactive elements

## How to open and view the site

The page loads the desserts from `data.json`. Browsers block that kind of file
loading when you just double-click an HTML file, so run a tiny local server.

### Step by step

1. Open the Terminal app.
2. Go into this project folder:

   ```
   cd "day 115/classwork"
   ```

3. Start a simple server (Python 3 comes with macOS):

   ```
   python3 -m http.server 8000
   ```

4. Open your browser and go to:

   ```
   http://localhost:8000
   ```

5. To stop the server, press `Ctrl + C` in the Terminal.

If you use VS Code, you can instead install the **Live Server** extension,
right-click `index.html`, and choose **Open with Live Server**.

### How to try it out

- Click **Add to Cart** on a dessert. The button turns into `- 1 +`.
- Use `+` and `-` to change how many you want.
- The cart on the right shows every item, the quantity, and the order total.
- Click the small `x` next to a cart item to remove it completely.
- Click **Confirm Order** to see the confirmation window.
- Click **Start New Order** to empty the cart and start again.

## Files in this project

| File | What it does |
| --- | --- |
| `index.html` | The page structure: product list, cart, and confirmation modal. |
| `style.css` | All the styling, including the mobile / tablet / desktop layouts. |
| `script.js` | The JavaScript that loads the data and runs the cart. |
| `data.json` | The list of desserts (name, category, price, images). |
| `assets/` | Images, icons, and fonts. |
| `design/` | The design pictures the site was built from. |
| `style-guide.md` | Colors, fonts, and layout sizes. |
| `index1.html` / `index1.css` / `index1.js` | Separate class practice files, not part of this site. |

## Built with

- Semantic HTML5
- Plain CSS (custom properties, Flexbox, CSS Grid, media queries)
- Plain JavaScript (no frameworks)
- Mobile-first responsive layout

### How the responsive layout works

- **Mobile (under 640px):** one product per row, cart underneath the list.
- **Tablet (640px and up):** three products per row, cart still underneath.
- **Desktop (1000px and up):** products on the left, cart in a column on the right.

## Author

- Gabriel Todua
