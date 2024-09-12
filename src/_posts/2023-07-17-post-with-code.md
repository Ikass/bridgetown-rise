---
title: "Post with Some Code"
description: Description of a blog post with some code.
image:
date: 2023-07-17 13:56:48 +0300
categories: updates
---

Bridgetown Excellent uses:

- [Pygments](https://pygments.org/) syntax highlighter. Highlighting is done at build time.
- [Monokai](https://monokai.pro/) color scheme for syntax highlighting.
- Roboto Mono variable monospaced typeface.

Here is some Ruby code:

```ruby
# Output "I love Ruby"
say = "I love Ruby"
puts say

# Output "I *LOVE* RUBY"
say['love'] = "*love*"
puts say.upcase

# Output "I *love* Ruby"
# five times
5.times { puts say }
```

More styles available at [Jekyll pygments themes](https://github.com/jwarby/jekyll-pygments-themes).

Edit styles in `css/blocks/code.css`.
