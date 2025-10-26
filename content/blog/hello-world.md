+++
title = "Hello World"
description = "This blog is where you'll find updates on whats going on with the Meetball Handbook writing"
date = 2025-08-08T09:19:42+00:00
updated = 2025-08-08T12:34:29+01:00
draft = false
template = "blog/page.html"

[taxonomies]
authors = ["Stuart"]

[extra]
lead = "This blog is where you'll find updates on whats going on with the <b>Meetball Handbook<b>."
+++
We are just gettign started, this page was set up by Guillherme so we have a repo and a version control. 

Stay Tuned

p.s. - Here some nerdy guideliens for adding pages:

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
