+++
title = "Hello World"
description = "This blog is where you'll find updated on whats going on with the Meetball Handbook writing"
date = 2021-05-01T09:19:42+00:00
updated = 2021-05-01T09:19:42+00:00
draft = false
template = "blog/page.html"

[taxonomies]
authors = ["Stuart"]

[extra]
lead = "This blog is where you'll find updated on whats going on with the <b>Meetball Handbook<b>. We're writing each page as we need it."
+++
Test
```rust
// This is a comment, and is ignored by the compiler

// This is the main function
fn main() {
    // Statements here are executed when the compiled binary is called

    // Print text to the console
    println!("Hello World!");
}
```

`println!` is a macro that prints text to the console.

A binary can be generated using the Rust compiler: `rustc`.

```bash
$ rustc hello.rs
```

`rustc` will produce a `hello` binary that can be executed.

```bash
$ ./hello
Hello World!
```
