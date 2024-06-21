#!  /usr/bin/env node
function showBankAccountDetails(account) {
    console.log(`Account Holder: (hidden for security)`); // Replace with actual name for simulation
    console.log(`Account Number: ${account.accountNumber.slice(-4)} (HBL)`); // Show last 4 digits
    console.log(`Balance: (hidden for security)`); // Replace with balance for simulation (e.g., "$***.＊＊")
    // Add logic to display other properties (e.g., accountType, bankName) if applicable
}
const myAccount = {
    accountNumber: "1234567890123456",
    accountHolder: "John Doe",
    balance: 1000.00,
    // Add other property values if using them
};
showBankAccountDetails(myAccount);
export {};
