import { bech32 } from "bech32";

export interface Address {
    string(): string;

    stringEth(): string;

    bytes(): Uint8Array;
}

class AddressV1 implements Address {
    public static ADDRESS_LENGTH: number = 20;
    public static PREFIX: string = "io";

    public static prefix(): string {
        return this.PREFIX;
    }

    constructor(payload: Uint8Array) {
        this.payload = payload;
    }

    public payload: Uint8Array;

    public string(): string {
        const grouped = bech32.toWords(this.payload);
        return bech32.encode(AddressV1.prefix(), grouped);
    }

    public stringEth(): string {
        return `0x${Buffer.from(this.payload).toString("hex")}`;
    }

    public bytes(): Uint8Array {
        return this.payload;
    }
}

export function fromEthereum(addrStr: string): Address {
    if (addrStr.startsWith("0x")) {
        addrStr = addrStr.substring(2);
    }
    const bytes = Buffer.from(addrStr, "hex");
    return fromBytes(bytes);
}

export function fromBytes(bytes: Uint8Array): Address {
    if (bytes.length !== AddressV1.ADDRESS_LENGTH) {
        throw new Error(`invalid address length in bytes: ${bytes.length}`);
    }
    const addr = new AddressV1(bytes);
    return addr;
}

export function fromString(addrStr: string): Address {
    const { prefix, words } = bech32.decode(addrStr);
    if (prefix !== AddressV1.prefix()) {
        throw new Error(
            `hrp ${prefix} and address prefix ${AddressV1.prefix()} don't match`
        );
    }
    // @ts-ignore
    const addr = new AddressV1(bech32.fromWords(words));
    return addr;
}