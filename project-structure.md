# Project Structure

Generated on: 6/18/2025, 3:01:43 AM
Root: e:\KAIDORA-TECH-WORKS

```
├── BACKEND/
│   ├── config/
│   │   ├── database.js
│   │   └── passport.js
│   ├── controllers/
│   │   └── authController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── validation.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
└── frontend/
    ├── .angular/
    │   └── cache/
    │       └── 19.2.14/
    │           └── frontend/
    │               ├── vite/
    │               │   ├── deps/
    │               │   │   ├── _metadata.json
    │               │   │   ├── @angular_common_http.js
    │               │   │   ├── @angular_common_http.js.map
    │               │   │   ├── @angular_common.js
    │               │   │   ├── @angular_common.js.map
    │               │   │   ├── @angular_core.js
    │               │   │   ├── @angular_core.js.map
    │               │   │   ├── @angular_forms.js
    │               │   │   ├── @angular_forms.js.map
    │               │   │   ├── @angular_platform-browser.js
    │               │   │   ├── @angular_platform-browser.js.map
    │               │   │   ├── @angular_router.js
    │               │   │   ├── @angular_router.js.map
    │               │   │   ├── chunk-55WSUAAI.js
    │               │   │   ├── chunk-55WSUAAI.js.map
    │               │   │   ├── chunk-77T4RW2Q.js
    │               │   │   ├── chunk-77T4RW2Q.js.map
    │               │   │   ├── chunk-HVF36QVL.js
    │               │   │   ├── chunk-HVF36QVL.js.map
    │               │   │   ├── chunk-LKBYGJ3F.js
    │               │   │   ├── chunk-LKBYGJ3F.js.map
    │               │   │   ├── chunk-SOL5XZJW.js
    │               │   │   ├── chunk-SOL5XZJW.js.map
    │               │   │   └── package.json
    │               │   └── deps_ssr/
    │               │       ├── _metadata.json
    │               │       ├── @angular_common_http.js
    │               │       ├── @angular_common_http.js.map
    │               │       ├── @angular_common.js
    │               │       ├── @angular_common.js.map
    │               │       ├── @angular_core.js
    │               │       ├── @angular_core.js.map
    │               │       ├── @angular_forms.js
    │               │       ├── @angular_forms.js.map
    │               │       ├── @angular_platform-browser.js
    │               │       ├── @angular_platform-browser.js.map
    │               │       ├── @angular_platform-server.js
    │               │       ├── @angular_platform-server.js.map
    │               │       ├── @angular_router.js
    │               │       ├── @angular_router.js.map
    │               │       ├── @angular_ssr_node.js
    │               │       ├── @angular_ssr_node.js.map
    │               │       ├── @angular_ssr.js
    │               │       ├── @angular_ssr.js.map
    │               │       ├── chunk-5YUK47QP.js
    │               │       ├── chunk-5YUK47QP.js.map
    │               │       ├── chunk-AHD6W5EK.js
    │               │       ├── chunk-AHD6W5EK.js.map
    │               │       ├── chunk-D6OAEE7N.js
    │               │       ├── chunk-D6OAEE7N.js.map
    │               │       ├── chunk-LTLABGG2.js
    │               │       ├── chunk-LTLABGG2.js.map
    │               │       ├── chunk-PXXRCHXC.js
    │               │       ├── chunk-PXXRCHXC.js.map
    │               │       ├── chunk-UMQWUUBM.js
    │               │       ├── chunk-UMQWUUBM.js.map
    │               │       ├── chunk-VELZVX4X.js
    │               │       ├── chunk-VELZVX4X.js.map
    │               │       ├── chunk-XKU4W7O3.js
    │               │       ├── chunk-XKU4W7O3.js.map
    │               │       ├── chunk-YHCV7DAQ.js
    │               │       ├── chunk-YHCV7DAQ.js.map
    │               │       ├── express.js
    │               │       ├── express.js.map
    │               │       ├── package.json
    │               │       ├── xhr2-TXIMV6CV.js
    │               │       └── xhr2-TXIMV6CV.js.map
    │               └── .tsbuildinfo
    ├── public/
    │   └── favicon.ico
    ├── src/
    │   ├── app/
    │   │   ├── components/
    │   │   │   ├── auth/
    │   │   │   │   ├── auth.component.css
    │   │   │   │   ├── auth.component.html
    │   │   │   │   └── auth.component.ts
    │   │   │   ├── login/
    │   │   │   │   ├── login.component.css
    │   │   │   │   ├── login.component.html
    │   │   │   │   └── login.component.ts
    │   │   │   └── signup/
    │   │   │       ├── signup.component.css
    │   │   │       ├── signup.component.html
    │   │   │       └── signup.component.ts
    │   │   ├── services/
    │   │   │   └── auth.service.ts
    │   │   ├── app-routing.module.ts
    │   │   ├── app.component.css
    │   │   ├── app.component.html
    │   │   ├── app.component.spec.ts
    │   │   ├── app.component.ts
    │   │   ├── app.config.server.ts
    │   │   ├── app.config.ts
    │   │   └── app.routes.ts
    │   ├── index.html
    │   ├── main.server.ts
    │   ├── main.ts
    │   ├── server.ts
    │   └── styles.css
    ├── .editorconfig
    ├── .gitignore
    ├── angular.json
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── tsconfig.app.json
    ├── tsconfig.json
    └── tsconfig.spec.json
```