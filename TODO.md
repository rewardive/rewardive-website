# Rewardive Website - TODO

## Missing Feature Detail Pages

The following feature detail pages need to be implemented for the website:

### 1. Vouchers & Discounts Detail Page
- **Feature**: Browse Vouchers
- **Location**: Linked from features-grid.tsx - Vouchers & Discounts card
- **Description**: A dedicated page to browse, filter, and search through 1000+ active voucher offers
- **Priority**: High
- **Components needed**:
  - Voucher listing with filters (by category, cashback %, etc.)
  - Search functionality
  - Individual voucher detail modal/page
  - Copy voucher code functionality

### 2. Real-Time Alerts Configuration Page
- **Feature**: Configure Alerts
- **Location**: Linked from features-grid.tsx - Real-Time Updates card
- **Description**: Allow users to configure which types of offers they want to be notified about
- **Priority**: Medium
- **Components needed**:
  - Alert preferences settings
  - Notification channels (push, email, etc.)
  - Custom alert rules based on card types, categories, or merchants

### 3. Smart Search Page
- **Feature**: Try Search
- **Location**: Linked from features-grid.tsx - Smart Search card
- **Description**: AI-powered search interface to find relevant offers
- **Priority**: High
- **Components needed**:
  - Search interface with autocomplete
  - Advanced filters (merchants, categories, card types)
  - Search results display
  - Search history/recent searches

### 4. Personalized Recommendations Page
- **Feature**: See Recommendations
- **Location**: Linked from features-grid.tsx - Personalized Recommendations card
- **Description**: Display tailored offer suggestions based on user's cards and preferences
- **Priority**: Medium
- **Components needed**:
  - Recommendation algorithm integration
  - Personalized offer grid
  - User preference settings
  - Explanation of why each offer is recommended

## Notes
- These features were initially planned with "View" buttons in the feature cards
- The commented-out code was removed in commit to clean up dead code
- Implementation should align with the overall design system and user experience
