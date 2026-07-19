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
