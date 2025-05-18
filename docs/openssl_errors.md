When you face error like below

```
opensslErrorStack: [
    'error:03000086:digital envelope routines::initialization error',
    'error:0308010C:digital envelope routines::unsupported'
  ],
  ```

Run below

```bash
$env:NODE_OPTIONS="--openssl-legacy-provider"
npm run start
```

or on macos

```zsh
export NODE_OPTIONS=--openssl-legacy-provider
npm start
```