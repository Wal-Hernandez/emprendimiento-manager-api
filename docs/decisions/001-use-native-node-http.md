# ADR-001: Use Node.js native HTTP

## Context

We need to build the HTTP API for Emprendimiento Manager.

At this stage, the goal is to understand how an HTTP server works before introducing a web framework.

## Decision

Use Node.js native `node:http` without Express or NestJS.

## Rationale

Using the native HTTP module allows us to understand:

- HTTP requests and responses.
- Headers and status codes.
- Request bodies.
- Streams and chunks.
- Manual routing.

## Consequences

### Positive

- Better understanding of the HTTP lifecycle.
- No framework abstraction hiding the underlying mechanisms.
- Provides a baseline for evaluating Express later.

### Negative

- Manual routing.
- Manual request body parsing.
- More boilerplate.
- More responsibility for error handling.

## Status

Accepted