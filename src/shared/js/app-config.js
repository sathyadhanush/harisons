// import MyAccountService from '../../service/MyAccountService';
// import StoreService from '../../service/StoreService';

// class AppConfig {
//   constructor() {
//     this.attrs = {};
//   }

//   async fetch() {
//     const account = await MyAccountService.fetch();
//     if (account.getOrganizationId()) {
//       this.attrs.organizationId = account.getOrganizationId();
//       const stores = await StoreService.getOrganizationStores({
//         organizationId: account.getOrganizationId(),
//       });
//       if (stores.length) {
//         this.attrs.storeId = stores[0].id;
//         this.attrs.storeName = stores[0].name;
//       }
//     }
//   }

//   getStoreId() {
//     return this.attrs.storeId;
//   }

//   getStoreName() {
//     return this.attrs.storeName;
//   }

//   getAccountId() { }

//   getOrganizationId() {
//     return this.attrs.organizationId;
//   }

//   setOrganizationId(organizationId) {
//     this.attrs.organizationId = organizationId;
//   }

//   getAccount() { }

//   isOwner() { }

//   isStaff() {
//     return this.attrs.isStaff;
//   }
// }

// export default new AppConfig();
