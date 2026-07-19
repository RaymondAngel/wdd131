# WDD 131 Project Guidelines

Use this document as a standing reference when planning, building, reviewing, or
updating projects in this repository. Accessibility, semantic structure,
responsive behavior, and performance are built-in requirements rather than
optional finishing steps.

## General HTML and Accessibility

- Use valid, semantic HTML that communicates the structure and purpose of the
  content to browsers and assistive technology.
- Include the standard document structure: `<!DOCTYPE html>`, a language
  attribute, `<head>`, and `<body>`.
- Include the character encoding and viewport meta elements.
- Give each page a useful title and description.
- Organize pages with semantic landmarks such as `<header>`, `<nav>`, `<main>`,
  and `<footer>` when appropriate.
- Include one clear page heading in an `<h1>` and follow a logical heading
  hierarchy without skipping levels for visual styling.
- Make interactive controls operable with a keyboard and provide visible focus
  indicators.
- Do not communicate important meaning through color alone.
- Use colors with sufficient contrast, including text, controls, borders, and
  focus indicators.
- Test important pages with keyboard navigation, browser accessibility tools,
  and a screen reader when possible.

## Images

- Give meaningful images concise, descriptive `alt` text that communicates
  their relevant purpose.
- Use `alt=""` for images that are purely decorative so screen readers can skip
  them.
- Include intrinsic `width` and `height` attributes to reserve space and reduce
  layout shifting.
- Make images responsive so they do not overflow small screens.
- Select appropriate image dimensions and efficient file formats instead of
  sending unnecessarily large files.
- Do not depend on an image alone to communicate essential instructions or
  information.

## Lazy Loading and Page Performance

- Prioritize the first meaningful content so users receive a useful page
  quickly.
- Apply `loading="lazy"` to noncritical images and iframes that begin below the
  initial viewport.
- Do not normally lazy-load an important above-the-fold or hero image because
  doing so may delay the page's main visual content.
- Follow an assignment's explicit loading requirements when they differ from
  normal production decisions.
- Use external CSS and JavaScript files in appropriately named folders when
  required by the project.
- Use `defer` for JavaScript that does not need to run while the HTML is being
  parsed.
- Treat lazy loading as one part of performance work; also optimize image sizes,
  formats, and the number of requested resources.
- Confirm loading behavior with the browser developer tools Network panel.

## Animation

- Use animation as an enhancement, not as the only way to communicate meaning.
- Avoid distracting movement and keep transitions purposeful.
- Support the `prefers-reduced-motion` media query so users can disable or
  reduce nonessential animation.
- When an assignment requests a fade-from-black image effect, use CSS animation
  and opacity while still providing a reduced-motion alternative.

## Accessible Data Tables

- Use tables only for tabular data, never for general page layout.
- Use `<table>`, `<tr>`, `<th>`, and `<td>` according to their semantic
  purposes.
- Place a descriptive `<caption>` directly inside the table to explain its
  content.
- Organize table sections with `<thead>`, `<tbody>`, and `<tfoot>` when
  appropriate.
- Mark column headers with `<th scope="col">`.
- Mark row headers with `<th scope="row">`.
- Use `scope="colgroup"` and `scope="rowgroup"` for headers that describe
  groups of columns or rows.
- For complex tables that cannot be described adequately with `scope`, use
  unique `id` values on header cells and `headers` attributes on associated
  cells.
- Prefer `scope` for ordinary tables because it is simpler and less
  error-prone.
- Do not use the deprecated table `summary` attribute; use a visible caption
  and surrounding explanatory text when needed.
- Use zebra striping with an `nth-child` selector when it improves row tracking.
- Treat zebra striping as a visual aid, not a replacement for semantic table
  relationships.
- If symbols such as check marks and crosses communicate availability, provide
  an accessible text equivalent such as "Included" or "Not included."
- Make wide tables usable on small screens, such as by placing them in a
  horizontally scrollable container when necessary.

## CSS Practices

- Keep presentation in an external stylesheet when appropriate or required.
- Use CSS custom properties for colors and other repeated design values.
- Use relative units and responsive layouts where practical.
- Preserve readable spacing, line height, and target sizes.
- Ensure hover is not the only way to reveal or operate important content.
- Remember that CSS improves visual presentation, while semantic HTML supplies
  the underlying meaning for assistive technology.

## JavaScript and Footer Information

- Keep JavaScript in an external file when required by the assignment.
- Load noncritical scripts with `defer`.
- Use JavaScript to display the document's last-modified value when an
  assignment requests it.
- Ensure essential content and navigation remain understandable if a
  nonessential script fails.

## JavaScript Objects and Dynamic Content

- Use JavaScript objects to group related data and functionality instead of
  maintaining related values in parallel or multidimensional arrays.
- Treat an object as a collection of `key: value` pairs.
- Use clear, descriptive property names so the object's purpose and structure
  are easy to understand and maintain.
- Remember that an object key is a string. It may be written without quotation
  marks when it is a valid JavaScript identifier, but keys containing spaces
  must be quoted.
- Object values may be primitives, arrays, other objects, or functions.
- Refer to keys that hold data as properties and keys that hold functions as
  methods.
- Use nested objects when one property contains another related group of named
  values, such as an address.
- Use arrays inside objects when a property can contain multiple related items,
  such as course sections or hobbies.
- Prefer dot notation for ordinary property access because it is concise and
  readable, for example `course.title`.
- Use bracket notation when a property name is dynamic, stored in a variable,
  contains spaces, or cannot be accessed conveniently with dot notation.
- Access nested data one level at a time with dot notation, bracket notation,
  or an appropriate combination of both.
- Update object properties by assigning a new value, for example
  `person.age = 31`.
- Within an object method, use `this` when referring to another property on the
  same object when that method's calling context supports it.
- Use functions to separate data processing and rendering responsibilities
  rather than placing all work in global statements.
- Pass the object a function needs as a parameter instead of making the
  function depend unnecessarily on a global variable.
- Use descriptive function names that state their responsibility, such as
  `setCourseInformation()` and `renderSections()`.
- When displaying object data, select the intended HTML element and update it
  through the DOM.
- Render arrays of related objects by iterating over the array and producing a
  consistent HTML structure for every item.
- When object data is tabular, render it as semantic table rows and preserve the
  accessible table-header relationships described elsewhere in this guide.
- Treat external data as text when inserting it into the page. Prefer safe DOM
  APIs such as `textContent` unless intentionally creating trusted markup.

### WDD 131 Course-Object Activity Pattern

The Week 4 activity teaches the following data and rendering pattern:

1. Represent a course with an object containing `code`, `title`, and `credits`.
2. Add a `sections` property whose value is an array containing at least two
   section objects.
3. Give every section object the same properties: `section`, `enrolled`, and
   `instructor`.
4. Create `setCourseInformation(course)` and pass the course object into it.
5. Use dot notation inside that function to display the course code and title
   in the element whose ID is `courseName`.
6. Create `renderSections()` to display the section objects as rows in the
   table whose ID is `sections`.

The broader lesson is to keep related course information encapsulated in one
stable object structure and use focused functions to transform that data into
accessible HTML.

## Functional Programming and JavaScript Array Methods

- Prefer declarative array methods when they express the intended data
  transformation more clearly than a manual loop.
- Keep data transformations predictable by avoiding unnecessary mutation of
  the original array and its values.
- Give callback parameters descriptive names that communicate what each array
  item represents.
- Store the returned result of `filter()`, `map()`, or `reduce()` when it will be
  used later; these methods do not automatically replace the original array.
- Keep callback functions focused on one condition, transformation, or
  accumulation task.
- Do not use `filter()`, `map()`, or `reduce()` only because they are available.
  Choose the method whose purpose matches the desired result.

### `filter()`

- Use `array.filter()` to create a new array containing only the elements that
  satisfy a condition.
- The callback must return a truthy value to keep an item or a falsy value to
  exclude it.
- The callback can receive three arguments: the current element, its index, and
  the source array.
- An optional second argument to `filter()` can provide the callback's `this`
  value. Prefer an arrow function or a clearly scoped regular function when
  that makes the intended context easier to understand.
- `filter()` does not modify the original array unless the callback deliberately
  mutates shared values.
- The returned array is a shallow copy. Primitive values are copied, but object
  elements still refer to the same underlying objects as the source array.
- The resulting array can contain fewer items than the original, the same
  number of items, or no items.
- When no items satisfy the condition, `filter()` returns an empty array.
- The callback runs only for indexes that have assigned values. Empty slots in
  sparse arrays are skipped.
- The callback's third argument refers to the array being filtered, not the new
  result array under construction.
- Avoid side effects inside a filter callback. A predicate should normally test
  one item and return a Boolean-like result.
- Use named predicate functions when the condition is complex or reusable.
- Validate both type and value when filtering untrusted or inconsistent object
  data. For numeric identifiers, `Number.isFinite()` can prevent strings,
  `null`, missing values, and `NaN` from passing as valid numbers.
- Normalize both the source text and query when implementing
  case-insensitive searches.
- Although `filter()` is generic and can operate on array-like objects with a
  `length` property and integer-indexed values, use it directly on arrays unless
  working with an array-like structure is intentional.
- Example: select names beginning with the letter B.

```js
const namesB = names.filter((name) => name.startsWith("B"));
```

Example with a reusable predicate:

```js
function isAtLeastTen(value) {
    return value >= 10;
}

const filteredValues = [12, 5, 8, 130, 44].filter(isAtLeastTen);
// [12, 130, 44]
```

Example case-insensitive search:

```js
function filterItems(items, query) {
    const normalizedQuery = query.toLowerCase();

    return items.filter((item) =>
        item.toLowerCase().includes(normalizedQuery)
    );
}
```

Example validation of objects:

```js
const validItems = items.filter(
    (item) => Number.isFinite(item.id) && item.id !== 0
);
```

### `map()`

- Use `array.map()` to transform every item in an array and return the
  transformed values in a new array.
- The callback can receive three arguments: the current element, its index, and
  the source array.
- An optional second argument to `map()` can provide the callback's `this`
  value. Prefer an arrow function or a clearly scoped regular function when
  that makes the intended context easier to understand.
- Return the transformed value explicitly from the callback when using a block
  body.
- `map()` does not modify the original array unless the callback itself mutates
  referenced objects.
- The new array always has the same number of items as the source array.
- The returned array is a shallow result. If a callback returns an existing
  object, both arrays refer to that same object. Use object or array spread when
  creating changed copies.
- If a callback returns nothing, the corresponding result is `undefined`.
  `map()` does not remove that item.
- To exclude items, use `filter()` before or after mapping as appropriate. Use
  `flatMap()` when one operation intentionally transforms an item into either a
  value or an empty array.
- Do not use `map()` merely for side effects or ignore its returned array. Use
  `forEach()` or `for...of` when the purpose is only to perform an action.
- Keep mapping callbacks pure when practical. Calculate unrelated totals with
  `reduce()` instead of changing outside state from inside `map()`.
- Avoid mutating source objects inside a mapping callback unless mutation is
  explicitly intended and documented.
- The callback's third argument refers to the array being mapped, which may be
  an intermediate array in a method chain. It does not refer to the result array
  being constructed.
- Sparse arrays remain sparse after mapping. The callback is not called for
  unassigned slots, and those slots remain empty in the result.
- `map()` is generic and can work with array-like objects that have a `length`
  property and integer-indexed values.
- For DOM collections such as a `NodeList`, prefer converting to an array with
  `Array.from(collection)` or spread syntax when supported, then call `map()`.
- Be careful when passing an existing function directly as the callback.
  `map()` supplies element, index, and array arguments, which may accidentally
  fill optional parameters that have a different meaning.
- In particular, do not use `strings.map(parseInt)`. `parseInt()` interprets
  the index supplied by `map()` as its radix argument.
- Example: transform each name into its character count.

```js
const namesLength = names.map((name) => name.length);
```

Example numeric transformation:

```js
const doubled = [1, 4, 9, 16].map((number) => number * 2);
// [2, 8, 18, 32]
```

Example creating updated object copies without mutating the originals:

```js
const productsWithPrice = products.map((product) => ({
    ...product,
    price: 100
}));
```

Safe conversion of numeric strings:

```js
const integers = ["1", "2", "3"].map(
    (value) => Number.parseInt(value, 10)
);

const numbers = ["1", "2", "3"].map(Number);
```

Choose between `Number()` and `Number.parseInt()` intentionally:

- `Number("2.2e2")` returns `220`.
- `Number.parseInt("2.2e2", 10)` returns `2`.

Example mapping a DOM collection:

```js
const selectedOptions = document.querySelectorAll("select option:checked");
const selectedValues = Array.from(
    selectedOptions,
    (option) => option.value
);
```

### `reduce()`

- Use `array.reduce()` when an array needs to become one accumulated result,
  such as a total, average, object, or grouped collection.
- The reducer callback can receive the accumulator, current value, current
  index, and source array.
- Return the updated accumulator during every iteration.
- The callback's return value becomes the accumulator passed into the next
  callback invocation. The final accumulator becomes the value returned by
  `reduce()`.
- Provide an explicit initial accumulator value when practical. This makes the
  result type clear, ensures processing begins at index `0`, and prevents errors
  when reducing an empty array.
- Choose an initial value that matches the intended result type: `0` for a
  numeric sum, `""` for a string, `[]` for an array, or an appropriate object
  for keyed results.
- Without an initial value, the first assigned array element becomes the
  accumulator and iteration begins with the next assigned element.
- Calling `reduce()` on an empty array without an initial value throws a
  `TypeError`.
- Reducing an empty array with an initial value returns that initial value
  without calling the callback.
- Reducing a one-item array without an initial value returns that item without
  calling the callback.
- `reduce()` does not accept a `thisArg`. Do not design reducer callbacks around
  a configurable `this` context.
- Calculate an average by dividing the accumulated total by the array length.
- Decide how an empty array should be handled before dividing by its length.
- Sparse-array holes are skipped, but assigned `undefined` values are processed.
  A numeric operation involving `undefined` can produce `NaN`.
- `reduce()` is generic and can operate on intentional array-like objects with
  a `length` property and integer-indexed values.
- Use semantic accumulator and item names such as `total`, `countByName`, and
  `course` instead of vague names when the reducer is not trivial.
- Keep reducers readable. A straightforward `for...of` loop is preferable when
  it communicates a complex accumulation more clearly.
- For immutable accumulation, return a new array or object rather than mutating
  the previous accumulator.
- Be aware that copying a growing array or object on every iteration can create
  excessive memory use and quadratic runtime. For large collections, a clear
  loop that mutates a locally owned result may be safer and faster.
- If intentionally mutating an accumulator inside `reduce()`, always return that
  accumulator so the next iteration does not receive `undefined`.
- Use `reduce()` for natural accumulations such as numeric totals, function
  composition, or deliberately sequenced operations. Do not force unrelated
  tasks into a reducer.
- Example: calculate the average character count of a nonempty array of names.

```js
const averageNameLength =
    names.reduce((total, name) => total + name.length, 0) / names.length;
```

Example sum:

```js
const total = [1, 2, 3, 4].reduce(
    (sum, value) => sum + value,
    0
);
// 10
```

Example summing a property from objects:

```js
const items = [{ amount: 1 }, { amount: 2 }, { amount: 3 }];
const totalAmount = items.reduce(
    (total, item) => total + item.amount,
    0
);
// 6
```

### Prefer a Clearer Specialized Operation When Available

Before using `reduce()`, check whether a method with a more specific purpose
communicates the operation better:

- Flatten nested arrays with `flat()`.
- Transform and flatten in one operation with `flatMap()`.
- Remove duplicate primitive values with `Array.from(new Set(values))` or
  `[...new Set(values)]`.
- Select matching values with `filter()`.
- Locate a value or index with `find()` or `findIndex()`.
- Test whether any value matches with `some()`.
- Test whether every value matches with `every()`.
- Group values with `Object.groupBy()` when the required browser support or
  project tooling is available.

These specialized methods may also stop early when the answer is known, as
`find()`, `some()`, and `every()` do, whereas `reduce()` normally processes the
entire collection.

Equivalent accumulation with a loop:

```js
let result = initialValue;

for (const item of items) {
    result = update(result, item);
}
```

Use the version that is easiest for the project team to understand and maintain.

### WDD 131 Array-Methods Activity Pattern

Given:

```js
const names = ["Nancy", "Blessing", "Jorge", "Svetlana", "Bob"];
```

the Week 4 activity expects these concepts and results:

1. `filter()` creates `namesB`, containing `"Blessing"` and `"Bob"`.
2. `map()` creates `namesLength`, producing `[5, 8, 5, 8, 3]`.
3. `reduce()` totals the name lengths so the calculated average is `5.8`.

The broader lesson is to create clear data-processing pipelines in which
`filter()` selects values, `map()` transforms values, and `reduce()` combines
values into a final result.

## Review Checklist

Before considering a page finished:

1. Validate the HTML and CSS.
2. Check the page at narrow and wide viewport sizes.
3. Navigate all interactive content using only the keyboard.
4. Verify heading order, landmarks, labels, alternative text, and table
   relationships.
5. Check color contrast and visible focus indicators.
6. Look for horizontal overflow and unexpected layout movement.
7. Inspect the console for errors.
8. Use the Network panel to review image loading and resource sizes.
9. Run the course audit and relevant browser audits when required.
10. Compare the completed work with the assignment's exact criteria.

## Course-Specific Rule

Assignment instructions take priority when they explicitly require a particular
technique. When a course example omits a best practice, preserve the learning
objective while adding accessibility and performance improvements that do not
conflict with the grading criteria.
