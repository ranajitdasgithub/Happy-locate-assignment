## Setup Instructions

1. **Extract the Project**

   - Extract the provided zip file into your desired directory.

2. **Navigate to the Project Directory**

   ```bash
   cd happy-locate-assignment
   ```

3. **Install Dependencies**
   Run the following command to install all required dependencies:

   ```bash
   npm install
   ```

4. **Run the Application**
   Start the development server using:

   ```bash
   npm start
   ```

   The app will be accessible at `http://localhost:3000` in your browser.

5. **Build the Application (Optional)**
   To create a production build, use:
   ```bash
   npm run build
   ```

## Project Structure

```md
project-root/
│
├── public/
│ ├── index.html
│ ├── favicon.ico
│ └── manifest.json
│
├── src/
| |
│ ├── components/
│ │ ├── Layout/
│ │ │ ├── Header.jsx
│ │ │ ├── Footer.jsx
│ │ │ └── TabsNavigation.jsx
│ │ ├── Inventory/
│ │ └── SelectInventory.jsx
│ │ ├── Shared/
│ │ │ ├── CounterButton.jsx
│ │ │ ├── CustomButton.jsx
│ │ │ └── LazyImage.jsx
│ │ │ └── SearchBar.jsx
│ │ └── RoomDetails/
│ │ ├── RoomDetailsForm.jsx
│ │ └── RoomList.jsx
│ ├── hooks/
| | ├── useInventoryManagement.js
│ │ └── useInventorySelection.js
│ ├── pages/
│ │ ├── AddInventoryPage.jsx
│ │ └── SelectInventoryPage.jsx
│ ├── Modals/
│ │ ├── AddedItemsModal/
│ │ └── AddedModal.jsx
│ │ ├── RemoveModal/
│ │ └── RemoveModal.jsx
│ ├── redux/
│ │ ├── store.js
│ │ └──appSlice.js
│ ├── services/
│ │ └── api.js
│ ├── styles/
│ │ └── index.css
│ ├── App.jsx
│ └── index.js
├── package.json
├── tailwind.config.js
└── README.md
```
