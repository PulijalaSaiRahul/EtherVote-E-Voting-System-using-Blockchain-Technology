import abi from "./Transaction.json";

export const contractABI = abi.abi;

export const contractAddress = "0x2F81C6DBEFab59ba88BA5eB5F1303191eF1119Ba"; // Enter your ContractAddress here.
// This variable stores the address of the deployed smart contract. If you have deployed your own contract, replace the empty string with the address of your contract.

// If you can't find the `contractAddress` in the compiled `Transaction.json` file,
// you can manually locate the address by finding the appropriate piece of code in the file.
// The address should be located under the `"networks"` object, which lists the deployed addresses for different networks.
// For example, if you are using the default Ganache network, the `"networks"` object will contain an entry for network ID `5777`.
// Find the `"address"` field under this entry, and copy the address value into the `contractAddress` variable.
