### check-local-package

#### introduction

Check whether the local node package exists.


##### example for commonJS
```javascript
const checkPackage = require('check-local-package');
/**
 * @param cwd Cwd is a Current Window Directory
 * @param packageName PackageName is package name(optional)
 */
checkPackage(cwd, packageName) // 
```

##### example for ts
```typescript
import * as checkPackage from 'check-local-package';
/**
 * @param cwd Cwd is a Current Window Directory
 * @param packageName PackageName is package name(optional)
 */
checkPackage(cwd, packageName)
```