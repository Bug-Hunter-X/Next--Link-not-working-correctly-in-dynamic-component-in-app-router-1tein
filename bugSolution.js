```javascript
import Link from 'next/link';

function MyComponent() {
  // Ensure href values are absolute paths
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>    </div>
  );
}

export default MyComponent;
```