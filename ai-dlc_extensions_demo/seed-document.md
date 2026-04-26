# Minimal Node.js API — AI-DLC Example

## Objective
Create a minimal Node.js API project following AI-DLC principles.

---

## Constraints
- Language: Pure JavaScript (no TypeScript)
- Dependencies: Only :contentReference[oaicite:0]{index=0}
- Keep the implementation minimal and production-ready

---

## Requirements

1. Initialize a Node.js project structure  
2. Implement an HTTP server using Express  
3. Expose a single endpoint:

   - Method: `GET`  
   - Route: `/hello`

4. The endpoint must return a JSON response:

```json
{
  "message": "Hello World!"
}