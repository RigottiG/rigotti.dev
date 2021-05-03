---
date: 2021-05-04
title: "Let's make an API with Phoenix Framework ? Part I"
template: post
thumbnail: '../thumbnails/elixir.png'
slug: 'blog/lets-make-an-api-phoenix-part01'
tags:
  - elixir
  - phoenix
  - api
  - english
  - beginner
---

![cover_image](https://miro.medium.com/max/800/1*HJys_sp0AydmrDCLbBmTJg.png)


Hi, in this serie of posts we'll building a API with Phoenix, with the goal of learning about framework and the fantastic language called Elixir 💧. 

### First of all
We need install Elixir and the quickest way to install Elixir is through a distribution or using one of the available installers on [Elixir Doc](https://elixir-lang.org/install.html)

In my case I use Homebrew to install with the following command.
```brew install elixir```

After install Elixir, we need to install [Phoenix Framework](hexdocs.pm/phoenix), to install it I run the following command in my terminal
```mix archive.install hex phx_new 1.5.8```

### Creating a project
With everything done, now we can create a project using the following command

`mix phx.new bank --no-html --no-webpack`

Parameter: `--no-html` means that we'll not render anything

Parameter: `--no-webpack` means that we'll not using webpack

After executing the command, we'll have the following structure

![Imgur](https://i.imgur.com/j5xDZad.png)

### Running server
We are almost there! We need configure our database in *config/dev.exs* and run `mix ecto.create`. My configuration is as follows

```elixir
config :bank, Bank.Repo,
  username: "postgres",
  password: "postgres",
  database: "bank_dev",
  hostname: "localhost",
  show_sensitive_data_on_connection_error: true,
  pool_size: 10

```
Then, after configure our database, we will run `mix ecto.create` for create the storage. If all is OK, we will run `mix phx.server` and received the following message.

```
[info] Running BankWeb.Endpoint with cowboy 2.8.0 at 0.0.0.0:4000 (http)
[info] Access BankWeb.Endpoint at http://localhost:4000
```

All is fine, cya 👋🏼