---
date: 2021-05-03
title: 'What is arity?'
template: post
thumbnail: '../thumbnails/elixir.png'
slug: 'blog/what-is-arity'
tags:
  - elixir
  - english
  - beginner
  - concepts
---

# What does "arity" mean?
In mathematics, **arity** is the number of arguments or operands taken by a function or operation in logic

Programming isn't different, **arity** is also represented by the number of arguments taken by a function.

When we have a function with:

| Number of arguments |                              Called                              |
| :------------------ | :--------------------------------------------------------------: |
| 0                   |                           **Nullary**                            |
| 1                   |                            **Unary**                             |
| 2                   |                            **Binary**                            |
| >= 3                | According to the quantity-ary, for example: **4-ary**, **5-ary** |

# How Elixir represent arity ?
```elixir
defmodule Arity do
    def hello(), do: 'Hello world' #hello/0
    def hello(name), do: 'Hello world #{name}' #hello/1
    def hello(name, age), do: 'Hello world #{name} your age is #{age}' #hello/2
end
```

# Conclusion 
A function's arity is the number of arguments a function should take according to its implementation. 