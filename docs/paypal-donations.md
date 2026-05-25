# PayPal Donations Implementation

## Current Implementation

The donate button uses a direct PayPal checkout link with an onclick handler:

```html
<div class="centerflex">
  <img
    class="hot-spot"
    src="https://res.cloudinary.com/nrityagram/image/upload/v1701072823/ng-donate-now-paypal_zg0qwu.png"
    alt="Donate Now with PayPal"
    width="230"
    onclick="window.open('https://www.paypal.com/ncp/payment/WLUHLYNLVE5CG', '_blank')"
    style="cursor: pointer;"
  />
</div>
```

**Key Notes:**
- The `.hot-spot` class is required because all images have `pointer-events: none` by default (to prevent right-click saves)
- The `cursor: pointer;` style indicates the image is clickable
- The onclick opens the PayPal link in a new tab

## Previous Implementation (Legacy - Deprecated)

The old method used PayPal's hosted button system:

```html
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" class="center">
  <input type="hidden" name="cmd" value="_s-xclick" />
  <input type="hidden" name="hosted_button_id" value="TS968LYRJTVUC" />
  <input type="image"
    src="https://res.cloudinary.com/nrityagram/image/upload/v1701072823/ng-donate-now-paypal_zg0qwu.png"
    border="0"
    name="submit"
    width="230"
    alt="PayPal – The safer, easier way to pay online!" />
  <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
</form>
```

## Comparison

| Aspect | Old Method | New Method |
|--------|-----------|-----------|
| **Submission** | POST form to `paypal.com/cgi-bin/webscr` | Direct link to PayPal checkout page |
| **Configuration** | Hidden input fields (`cmd`, `hosted_button_id`) | Direct URL with payment ID |
| **Analytics** | Tracking pixel in form | Handled by PayPal directly |
| **Implementation** | Form-based | Simple link with onclick |
| **Maintainability** | Requires updating hidden fields | Just update the URL |
| **Modern** | Legacy system (deprecated) | Current PayPal standard (NCP) |

## Why We Switched

1. **Simplicity**: No form submission or hidden fields needed
2. **Maintainability**: Just a straightforward URL
3. **Modern**: PayPal's current recommended approach (New Checkout Page - NCP)
4. **Efficiency**: Direct link is faster and cleaner

## Implementation Notes

- **File Location**: `src/makeadonation-usa.njk`
- **CSS Dependency**: Requires `.hot-spot` class from `src/sass/base/_reset.scss`
- **Payment Link**: `https://www.paypal.com/ncp/payment/WLUHLYNLVE5CG`

## Related Files

- CSS pointer-events handling: `src/sass/base/_reset.scss`
- Clickable images guide: `docs/clickable-images.md`
