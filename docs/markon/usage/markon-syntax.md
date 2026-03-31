---
title: Markon Syntax
sidebar_position: 1
---

# Markon Syntax

This page documents all supported Markon syntax rules.
Markon uses an explicit, bracket-based syntax designed for predictable and controlled text formatting.

Each syntax rule is processed independently and does not support nesting.

---

## Bold

Wrap text with `#b[...]#` to render bold content.

**Syntax**

```

#b[Text]#

```

**Example**

```

Hello #b[World]#

```

**Output**

```html
Hello <b>World</b>
```

---

## Underline

Wrap text with `#u[...]#` to underline content.

**Syntax**

```
#u[Text]#
```

**Example**

```
#u[Important]#
```

**Output**

```html
<u>Important</u>
```

---

## Emphasis

Use `#e[...]#` to emphasize text.

**Syntax**

```
#e[Text]#
```

**Example**

```
This is #e[important]#.
```

**Output**

```html
<em>important</em>
```

---

## Line Break

Insert a line break using `#br#`.

**Syntax**

```
#br#
```

**Example**

```
Line one #br# Line two
```

**Output**

```html
Line one <br />
Line two
```

---

## Link

Create a hyperlink using `#link[Text, URL]#`.

**Syntax**

```
#link[Text, URL]#
```

**Example**

```
#link[Visit GitHub, https://github.com]#
```

**Output**

```html
<a href="https://github.com" target="_blank">Visit GitHub</a>
```

---

## List

Render a list using `#list[...]#`.

Items are comma-separated.

**Syntax**

```
#list[Item 1, Item 2, Item 3]#
```

**Example**

```
#list[Apple, Banana, Orange]#
```

**Output**

```html
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Orange</li>
</ul>
```

---

## Combined Example

```text
#b[Markon]# #br#
#e[Lightweight formatting library]# #br#
#list[Fast, Simple, Predictable]# #br#
#link[View Repository, https://github.com/NofiniteHQ/markon]#
```

---

## Parsing Rules

- Syntax rules do not support nesting.
- Formatting is applied in a single pass.
- Input is treated as plain text unless matched by a Markon rule.
- Invalid or incomplete syntax is ignored.

---

## Security Considerations

- Markon does **not** sanitize HTML output.
- Only trusted input should be rendered directly.
- For user-generated content, sanitize output before rendering.

---

## Notes

- Markon is intentionally minimal by design.
- No configuration or plugins are supported.
- Output structure is stable and deterministic.
