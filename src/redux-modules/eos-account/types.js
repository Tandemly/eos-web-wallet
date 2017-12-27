//@flow
export type KeyPair = {
  publicKey?: string,
  privateKey?: string
};

export type AccountState = {
  accountName: ?string,
  ownerKeys: KeyPair,
  activeKeys: KeyPair
};

