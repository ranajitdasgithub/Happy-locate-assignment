project-root/
│
├── public/
│ ├── index.html
│ ├── favicon.ico
│ └── manifest.json
│
├── src/
│ ├── assets/
│ │ └── (images/icons used in design)
│ ├── components/
│ │ ├── Layout/
│ │ │ ├── Header.jsx
│ │ │ ├── Footer.jsx
│ │ │ └── Sidebar.jsx
│ │ ├── Inventory/
│ │ │ ├── SelectInventory.jsx
│ │ │ ├── AddInventory.jsx
│ │ │ └── ViewInventory.jsx
│ │ ├── Shared/
│ │ │ ├── Modal.jsx
│ │ │ ├── Button.jsx
│ │ │ └── InputField.jsx
│ │ └── RoomDetails/
│ │ ├── RoomDetailsForm.jsx
│ │ └── RoomList.jsx
│ ├── hooks/ # New folder for custom hooks
│ │ └── useInventory.js
│ ├── pages/
│ │ ├── Home.jsx
│ │ └── InventoryPage.jsx
│ ├── redux/
│ │ ├── store.js
│ │ ├── features/
│ │ │ ├── inventorySlice.js
│ │ │ └── roomSlice.js
│ ├── services/
│ │ └── api.js
│ ├── styles/
│ │ └── index.css (or Tailwind configuration files)
│ ├── App.jsx
│ ├── index.js
│ └── routes.jsx
├── package.json
├── tailwind.config.js
└── README.md
